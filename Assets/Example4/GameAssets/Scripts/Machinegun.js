/* 
*  This file is part of the Unity networking tutorial by M2H (http://www.M2H.nl)
*  The original author of this code is Mike Hergaarden, even though some small parts 
*  are copied from the Unity tutorials/manuals.
*  Feel free to use this code for your own projects, drop us a line if you made something exciting! 
*/
#pragma strict
#pragma implicit
#pragma downcast

var range = 100.0;
var fireRate = 0.2;
var force = 10.0;
var damage = 5.0;
var bulletsPerClip = 40;
var clips = 10;
var reloadTime = 0.5;
private var hitParticles : ParticleEmitter;
var muzzleFlash : Renderer;

var localPlayer : boolean = false;
var localPlayerName : String = "";

private var bulletsLeft : int = 0;
private var nextFireTime = 0.0;
private var m_LastFrameShot = -1;

private var ammoText : String = "";

var mytrans : Transform;
var target : Transform;
function Start () {
//transform.LookAt(target);	
	mytrans=transform;	
	localPlayerName=PlayerPrefs.GetString("playerName");
	
	hitParticles = GetComponentInChildren(ParticleEmitter);
	
	// We don't want to emit particles all the time, only when we hit something.
	if (hitParticles){
		hitParticles.emit = false;
	}
	bulletsLeft = bulletsPerClip;
	GetBulletsLeft();
}

function Update(){
	if(!localPlayer){
		return;
	}
	
	// Did the user press fire?
	if (Input.GetButton("Fire1")){
		Fire();
	}	
	transform.LookAt(target);	
}
	
function LateUpdate() {

		// We shot this frame, enable the muzzle flash
		if (m_LastFrameShot >= Time.frameCount-3) {
			muzzleFlash.enabled=true;
			//muzzleFlash.transform.localRotation = Quaternion.AngleAxis(Random.value * 360, Vector3.forward);
			if(!localPlayer){
				muzzleFlash.enabled = false;
			}
			
			if (audio) {
				if (!audio.isPlaying)
					audio.Play();
				audio.loop = true;
			}
		} else {
		// We didn't, disable the muzzle flash
			muzzleFlash.enabled = false;

			// Play sound
			if (audio)
			{
				audio.loop = false;
			}
		}
}


function Fire () {
	
	if (bulletsLeft == 0){
		return;
	}
	
	// If there is more than one bullet between the last and this frame
	// Reset the nextFireTime
	if (Time.time - fireRate > nextFireTime){
		nextFireTime = Time.time - Time.deltaTime;
	}
	
	
	// Keep firing until we used up the fire time
	while( nextFireTime < Time.time && bulletsLeft != 0) {
		var direction = transform.TransformDirection(Vector3.forward);
		var hit : RaycastHit;
	
				
		// Did we hit anything?
		if (Physics.Raycast (mytrans.position, direction, hit, range)) {
			FiredOneShot(true, hit.point, hit.normal );
			networkView.RPC("FiredOneShot",RPCMode.Others,false, hit.point, hit.normal); 
		
			// Send a damage message to the hit object			
			var settingsArray = new String[2];
			settingsArray[0]=damage+"";
			settingsArray[1]=localPlayerName;
		    Debug.Log(hit);
			hit.collider.SendMessage("ApplyDamage", settingsArray, SendMessageOptions.DontRequireReceiver);	
		//Apply a force to the rigidbody we hit
		if (hit.rigidbody){
			hit.rigidbody.AddForceAtPosition(force * direction, hit.point);
		}
		}
	
	bulletsLeft--;
	GetBulletsLeft();

	// Register that we shot this frame,
	// so that the LateUpdate function enabled the muzzleflash renderer for one frame
	m_LastFrameShot = Time.frameCount;
	//enabled = true;
	
	// Reload gun in reload Time		
	if (bulletsLeft == 0){
		Reload();		
	}	
	
	nextFireTime += fireRate;

	}	
}


@RPC
function FiredOneShot (shotOwner : boolean, hitPoint : Vector3, hitNormal : Vector3) {

		
		// Place the particle system for spawing out of place where we hit the surface!
		// And spawn a couple of particles
		if (hitParticles) {
			hitParticles.transform.position = hitPoint;
			hitParticles.transform.rotation = Quaternion.FromToRotation(Vector3.up, hitNormal);
			hitParticles.Emit();
		}

		m_LastFrameShot = Time.frameCount;

}

function Reload () {
	// Wait for reload time first - then add more bullets!
	yield WaitForSeconds(reloadTime);

	// We have a clip left reload
	if (clips > 0) {
		clips--;
		bulletsLeft = bulletsPerClip;
		if(localPlayer){
			ammoText=bulletsLeft+"/"+(clips*bulletsPerClip);
		}
	}
}

function OnGUI(){
	if(localPlayer){
		GUILayout.Space(20);
		GUILayout.Label("Ammo: "+ammoText);
	}
}


function GetBulletsLeft () {
	ammoText=bulletsLeft+"/"+(clips*bulletsPerClip);
	return bulletsLeft;
}