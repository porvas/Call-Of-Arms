//FPS Constructor - s
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.

var localPlayer : boolean = false;
var localPlayerName : String = "";
var localPlayerID:int;
//Gun Types
enum gunTypes {gun, launcher, sustained, melee}
var gunType : gunTypes = gunTypes.gun;

//Launcher-Specific Variables
var projectile : Rigidbody;
var initialSpeed = 20.0;
var projectileCount : int = 1;
var launchPosition : GameObject;

//Gun-Specific Variables
var range = 100.0;
var force = 10.0;
var damage = 5.0;
var shotCount : int = 6;
var burstFire : boolean = false;
var burstCount : int = 1;
var burstTime : float = .5;
var penetrateVal : int = 1;
//Sustained Fire (Laser) Specific Variables
var damagePerSecond : float;
var ammoPerSecond : float;
var laserRange : float;
var laserGFX : GameObject;
static var takingOut : boolean = false;

//Sustained Fire and Gun shared variables
var kickbackZ : float = 0;
private var startKickback : boolean = false;

//General Variables
private var baseParticles : ParticleEmitter;
 var bloodParticles1 : ParticleEmitter;
 var bloodParticles2 : ParticleEmitter;
private var dirtParticles : ParticleEmitter;
private var hitParticles : ParticleEmitter;
private var waterParticles:ParticleEmitter[];
private var waterSparks:GameObject;
var ammoPerClip : int = 40;
var clips : int = 20;
var maxClips : int = 20;
var reloadTime = 0.5;
var reloadInTime = 0.5;
var reloadOutTime = 0.5;
var muzzleFlash : Renderer;
var muzzleFlashNetwork : Renderer;
var waitforReload = 0.00;
var gunActive : boolean = false;
var infiniteAmmo : boolean = false;
var reloading : boolean = false;
var ammoLeft : float = 0;
var nextFireTime = 0.0;
private var m_LastFrameShot = -1;
private var muzzleFlashOn : boolean = false;
private var mainCam : GameObject;
private var weaponCam : GameObject;
var kickbackAngle : float;
var isPrimaryWeapon : boolean = true;
private var primaryWeapon : gunscript;
var secondaryWeapon : gunscript;
var secondaryActive : boolean = false;
var secondaryInterrupt : boolean = false;
var secondaryFire : boolean = false;
enum ammoTypes {byClip, byBullet}
var ammoType : ammoTypes = ammoTypes.byClip;
var shellEjection : boolean = false;
var ejectorPosition : GameObject;
var shell : GameObject;

//Variables shared between launcher and Gun
var fireRate = 0.05;
static var crosshairSpread : float;
private var shotSpread : float;
private var actualSpread : float;
var standardSpread = .1;
private var spreadRate = .05;
var maxSpread = .25;
var crouchSpreadModifier = .7;
var moveSpreadModifier = 1.5;
var standardSpreadRate = .05;
var aimSpreadRate = .01;
var aimSpread = .01;
var spDecRate = .05;
var autoFire : boolean;
var fireAnim : boolean = false;
var progressiveReload : boolean = false;
private var progressiveReloading : boolean = false;
private var pReloadTime : float = 0;
var delay : float = 0;
private var inDelay : boolean = false;
var hitBox : boolean = false;

//Ammo Sharing
var sharesAmmo : boolean = false;
var shareLoadedAmmo : boolean = false;
var ammoSetUsed : int = 0;
var managerObject : GameObject;
managerObject = GameObject.FindWithTag("Manager");


//Sway
var swayFactor : Vector3;
private var walkSway1 : Vector3;
private var walkSway2 : Vector3;
private var swayTarget : int = 1;
var swayRate : float = .5;
private var player : GameObject;
private var startPosition : Vector3;
private var areSprinting : boolean = false;
var aim : boolean = false;
var aim1 : aimmode;
var chatScript:FPSChat4;
private var reloadSound:AudioClip;
private var gunAudio:AudioSource;

function aiming () {
	shotSpread = aimSpread;
	spreadRate = aimSpreadRate;

	if(FPSWalkerDB.walking)
		walking();
}

function walking () {
	shotSpread = Mathf.Max(standardSpread*moveSpreadModifier, shotSpread);
	spreadRate *= moveSpreadModifier;
}
function stopWalking () {
	spreadRate = standardSpreadRate;
	if(shotSpread < standardSpread)
		shotSpread = standardSpread;
	if(GetComponentInChildren(aimmode).aiming){
		spreadRate = aimSpreadRate;
		shotSpread = aimSpread;
	}
	if(shotSpread > maxSpread)
		shotSpread = maxSpread;

}
function stopAiming () {
	shotSpread = standardSpread;
	spreadRate = standardSpreadRate;

	if(FPSWalkerDB.walking)
		walking();
}
function Cooldown () {
	if(FPSWalkerDB.walking && shotSpread > standardSpread*moveSpreadModifier){
		shotSpread = Mathf.Max(standardSpread*moveSpreadModifier, shotSpread - spDecRate);
	} else if(  shotSpread > standardSpread){
		shotSpread = Mathf.Max(standardSpread, shotSpread - spDecRate);
	} else if(FPSWalkerDB.walking && shotSpread > standardSpread*moveSpreadModifier){
		shotSpread = Mathf.Max(standardSpread*moveSpreadModifier, shotSpread - spDecRate);
	} else if(shotSpread > standardSpread && !FPSWalkerDB.walking){
		shotSpread = Mathf.Max(standardSpread, shotSpread - spDecRate);
	}
	if(laserGFX != null){
		laserGFX.active = false;
		if (audio) {
			audio.Stop();
		}
	}

}

function Start () {
	localPlayerName=PlayerPrefs.GetString("playerName");
	var localPlayerScript:PlayerScript=GetComponent(Transform).parent.transform.parent.GetComponent("PlayerScript");
	gunAudio=GetComponent(AudioSource);
	reloadSound=GetComponent(ammodisplay).reloadSound;
	//}
	aim1 = GetComponentInChildren(aimmode);
	inDelay = false;
	hitBox = false;
	var audio:AudioSource=GetComponent(AudioSource);
	if(sharesAmmo){
		clips = managerObject.GetComponent(AmmoManager).clipsArray[ammoSetUsed];
		maxClips = managerObject.GetComponent(AmmoManager).maxClipsArray[ammoSetUsed];
		infiniteAmmo = managerObject.GetComponent(AmmoManager).infiniteArray[ammoSetUsed];
		
	}

	if(!isPrimaryWeapon){
		gunActive = false;
		var wpns = new Array();
		wpns = this.GetComponents(gunscript);
		for(var p : int = 0; p < wpns.length; p++){
			if(wpns[p].isPrimaryWeapon){
				primaryWeapon = wpns[p];
			}
		}
	}
	if(laserGFX != null)
		laserGFX.active = false;

	baseParticles=transform.parent.Find("Sparks/Sparks").GetComponent(ParticleEmitter);
	bloodParticles1=transform.parent.Find("Sparks/bloodSparks/blood1").GetComponent(ParticleEmitter);
	bloodParticles2=transform.parent.Find("Sparks/bloodSparks/blood2").GetComponent(ParticleEmitter);
	dirtParticles=transform.parent.Find("Sparks/dirtSparks").GetComponent(ParticleEmitter);
	waterSparks=transform.parent.Find("Sparks/waterSparks").gameObject;
	
	
	shotSpread = standardSpread;
	spreadRate = standardSpreadRate;
	// We don't want to emit particles all the time, only when we hit something.
	if (baseParticles)
		baseParticles.emit = false;
	if (bloodParticles1)
		bloodParticles1.emit = false;
	if (bloodParticles2)
		bloodParticles2.emit = false;

	ammoLeft = ammoPerClip;
	SendMessage("updateAmmo", ammoLeft, SendMessageOptions.DontRequireReceiver);
	SendMessage("updateClips", clips, SendMessageOptions.DontRequireReceiver);
	player = this.transform.parent.parent.gameObject;
	controller = player.GetComponent(Rigidbody);
	defineSwayPoints();
	startPosition = transform.localPosition;
	muzzleFlash.enabled = false;
	mainCam = this.transform.parent.parent.transform.Find("Main Camera").gameObject;
	weaponCam =this.transform.parent.gameObject;
	chatScript = GameObject.Find("Generalscripts").GetComponent(FPSChat4) as FPSChat4;
}
function Update () {
//   	if(!localPlayer){
//  		return;
//  	}
 	if (!Screen.lockCursor) return;
	if(progressiveReloading){
		if(ammoLeft < ammoPerClip){
			if(Time.time > pReloadTime){
				BroadcastMessage("ReloadAnim", reloadTime);
				pReloadTime = Time.time + reloadTime;
				ammoLeft++;
				clips--;
				SendMessage("updateAmmo", ammoLeft, SendMessageOptions.DontRequireReceiver);
				SendMessage("updateClips", clips, SendMessageOptions.DontRequireReceiver);
			}
		} else if(Time.time > pReloadTime) {
			progressiveReloading = false;
			BroadcastMessage("ReloadOut", reloadOutTime);
			reloading=false;
			if(aim)
				aim1.aim = true;
			aim1.canSwitchWeaponAim = true;
			ApplyToSharedAmmo();
		}
	}
	
	if(actualSpread != shotSpread){
		actualSpread += (shotSpread-actualSpread)*Time.deltaTime*16;
	}
	if(gunActive){
		if(!playerweapons.autoFire && autoFire){
			SendMessageUpwards("FullAuto");
		}
		if(playerweapons.autoFire && !autoFire){
			SendMessageUpwards("SemiAuto");
		}
	}
}
function LateUpdate() {
	if (!Screen.lockCursor){
		muzzleFlash.enabled = false;
		muzzleFlashOn = false;
		
		// Play sound
		if (audio){
			audio.loop = false;
		}
		return;
	}
	if(shotSpread > maxSpread)
		shotSpread = maxSpread;

	if(gunActive)
		crosshairSpread = actualSpread*180/mainCam.camera.fieldOfView*Screen.height;
	
	if(!gunActive || reloading){
		if(laserGFX != null){
			laserGFX.active = false;		
			if (audio) {
				audio.Stop();
			}
		}
	}
	
	if(Input.GetKeyDown("q") && secondaryWeapon != null){
		if(!secondaryWeapon.gunActive){
			activateSecondary();
		} else if(secondaryWeapon.gunActive){
			activatePrimary();
		}
	}
	
	if(FPSWalkerDB.walking){
		walkSway();
	} else {
		resetPosition();
	}
	if (!Screen.lockCursor) networkView.RPC("sendMuzzle",RPCMode.All,false);
	else{
		if (muzzleFlash && muzzleFlashOn) {
			// We shot this frame, enable the muzzle flash
			var scoped : boolean = transform.Find("AimObject").GetComponent(aimmode).inScope;
			if (m_LastFrameShot == Time.frameCount) {
				if(!scoped)
					muzzleFlash.enabled = true;
				if (audio) {
					audio.Play();
					audio.loop = true;
				}
				networkView.RPC("sendMuzzle",RPCMode.Others,true);
			} else {
				// We didn't, disable the muzzle flash
				muzzleFlash.enabled = false;
				muzzleFlashOn = false;
				
				// Play sound
				if (audio){
					audio.loop = false;
				}
				networkView.RPC("sendMuzzle",RPCMode.Others,false);
			}
		}
	}
}
function FireAlt () {
	if(!isPrimaryWeapon){
		AlignToSharedAmmo();
		gunActive = true;
		Fire();
		gunActive = false;
	}
}
function AlignToSharedAmmo () {
	if(sharesAmmo){
		clips = managerObject.GetComponent(AmmoManager).clipsArray[ammoSetUsed];
		maxClips = managerObject.GetComponent(AmmoManager).maxClipsArray[ammoSetUsed];
		infiniteAmmo = managerObject.GetComponent(AmmoManager).infiniteArray[ammoSetUsed];
		SendMessage("updateAmmo", ammoLeft, SendMessageOptions.DontRequireReceiver);
		SendMessage("updateClips", clips, SendMessageOptions.DontRequireReceiver);	
	}

}
function ApplyToSharedAmmo () {
	if(sharesAmmo){
		managerObject.GetComponent(AmmoManager).clipsArray[ammoSetUsed] = clips;
		managerObject.GetComponent(AmmoManager).maxClipsArray[ammoSetUsed] = maxClips;
		managerObject.GetComponent(AmmoManager).infiniteArray[ammoSetUsed] = infiniteAmmo;
		}

}
function Fire2 () {
	if(isPrimaryWeapon && secondaryWeapon != null && gunActive && secondaryWeapon.secondaryFire){
		ApplyToSharedAmmo();
		secondaryWeapon.FireAlt();
	
	}
}
function Fire () {
	if (!gunActive || areSprinting || inDelay)
		return;
	if(progressiveReloading){
		progressiveReloading = false;
		reloading = false;
		if(aim)
			aim1.aim = true;
		aim1.canSwitchWeaponAim = true;
		if(secondaryWeapon != null && secondaryWeapon.secondaryFire && !secondaryWeapon.secondaryInterrupt){
				secondaryWeapon.reloading = false;
			} else if(secondaryFire &&!secondaryInterrupt && !isPrimaryWeapon){
				primaryWeapon.reloading = false;
			}

	}

	var b : int = 1; //variable to control burst fire
		
	if ((ammoLeft <= 0) || ( nextFireTime > Time.time ) || !gunActive || reloading){
		if(ammoLeft <=0){
			Reload();
		}
		return;
	}
	hitBox = true;

	if(gunType != gunTypes.sustained){
		if(burstFire){
			b = burstCount;
		} else {
			b = 1;
		}
		for(var i=0; i<b; i++){
			if(ammoLeft > 0){
				FireShot();
				ammoLeft--;
				if(fireRate<delay){	
					nextFireTime = Time.time+delay;
				} else {
					nextFireTime = Time.time+fireRate;
				}
				if(secondaryWeapon != null && secondaryWeapon.secondaryFire && !secondaryWeapon.secondaryInterrupt){
					if(fireRate<delay){	
						secondaryWeapon.nextFireTime = Time.time+delay;
					} else {
						secondaryWeapon.nextFireTime = Time.time+fireRate;
					}
				} else if(secondaryFire && !secondaryInterrupt && !isPrimaryWeapon){
					if(fireRate<delay){	
						primaryWeapon.nextFireTime = Time.time+delay;
					} else {
						primaryWeapon.nextFireTime = Time.time+fireRate;
					}

				}
				if(burstFire && i < (b-1)){
					if(burstTime/burstCount<delay){	
						yield new WaitForSeconds(delay);
					} else {
						yield new WaitForSeconds(burstTime/burstCount);
					}
				}
			}else if(ammoLeft==0&&clips <= 0){
				
				Debug.Log("CANT SHOOT EMPTY");	
							
			}		
		}
	} else {	
		FireLaser();
		var APS : float = ammoPerSecond*Time.deltaTime;
		ammoLeft -= APS;
	}	
	ApplyToSharedAmmo();
		
	SendMessage("updateAmmo", ammoLeft, SendMessageOptions.DontRequireReceiver);
	SendMessage("updateClips", clips, SendMessageOptions.DontRequireReceiver);
	if (ammoLeft <= 0){
		if(fireRate<delay){
			yield new WaitForSeconds(delay);
		} else {
			yield new WaitForSeconds(fireRate);
		}
//		if(clips <= 0){
//			Debug.Log("CANT SHOOT EMPTY");
//		
//		}else	
		Reload();
	
	}

}
function FireShot () {
	if(isPrimaryWeapon){
		if(fireAnim && !autoFire && !burstFire){
			BroadcastMessage("singleFireAnim", fireRate);
		} else {
			BroadcastMessage("FireAnim");
		}
	} else {
		if(fireAnim && !autoFire && !burstFire){
			BroadcastMessage("singleSecFireAnim", fireRate);
		} else {
			BroadcastMessage("SecondaryFireAnim");
		}
	}
	if(shellEjection && !this.GetComponentInChildren(aimmode).inScope)
		ejectShell();
	if(gunType == gunTypes.gun || gunType == gunTypes.melee){
		inDelay = true;
		yield new WaitForSeconds(delay);
		inDelay = false;
		for (var i=0; i<shotCount; i++) {
			FireOneBullet();
			Kickback();
		}
	} else if (gunType == gunTypes.launcher){
		inDelay = true;
		yield new WaitForSeconds(delay);
		inDelay = false;
		for (var p=0; p<projectileCount; p++) {
			FireOneProjectile();
		}
	}	
		m_LastFrameShot = Time.frameCount;
		muzzleFlashOn = true;
		if(shotSpread < maxSpread)
			shotSpread = shotSpread + spreadRate;
		hitBox = false;
}
function FireLaser () {
		var layerMask = 1 << 8;
  		layerMask = ~layerMask;
		var hit : RaycastHit;
		var direction = transform.TransformDirection(Vector3(0,0,1));
		
	// Did we hit anything?
		if (Physics.Raycast (transform.position, direction, hit, laserRange, layerMask)) {
			// Apply a force to the rigidbody we hit information
			var hitRotation = Quaternion.FromToRotation(Vector3.up, hit.normal);
			var hitInfo = new Array(hit.point, hitRotation, hit.transform, hit.normal); 
			if (hit.rigidbody){
				hit.rigidbody.AddForceAtPosition(force * direction, hit.point);
			}
			// Place the particle system for spawing out of place where we hit the surface!
			// And spawn a couple of particles
			if (hitParticles) {
				hitParticles.transform.position = hit.point;
				hitParticles.transform.rotation = Quaternion.FromToRotation(Vector3.up, hit.normal);
				hitParticles.Emit();
			}

			// Send a damage message to the hit object			
			hit.collider.SendMessageUpwards("ApplyDamage", damagePerSecond*Time.deltaTime, SendMessageOptions.DontRequireReceiver);
			hit.collider.SendMessageUpwards("accuracy", SendMessageOptions.DontRequireReceiver);
			//And send a message to the DecalManager
			hit.collider.SendMessageUpwards("ApplyLaserDecal", hitInfo, SendMessageOptions.DontRequireReceiver);
		}
		if(laserGFX != null){
			laserGFX.active = true;
			laserGFX.GetComponent(LineRenderer).enabled = true;
			if (audio && !audio.isPlaying) {
				audio.loop = true;
				audio.Play();
			}
			var laserPoint = Vector3(0,0, Mathf.Abs(Vector3.Distance(laserGFX.transform.position , hit.point) + 1));
			laserGFX.GetComponent(LineRenderer).SetPosition(1 , laserPoint);
		}
			Kickback();
			//networkView.RPC("Kickback",RPCMode.Others);
}
	
function FireOneProjectile () {
	//if(isPrimaryWeapon){
	//	BroadcastMessage("FireAnim");
	//} else {
	//	BroadcastMessage("SecondaryFireAnim");

	//}

	var direction = SprayDirection();

	if(launchPosition != null){
		var instantiatedProjectile1 : Rigidbody = Instantiate (projectile, launchPosition.transform.position, mainCam.transform.rotation);
	} else {
		var instantiatedProjectile : Rigidbody = Instantiate (projectile, transform.position, mainCam.transform.rotation);
	}
	
	if(launchPosition != null){
		instantiatedProjectile1.velocity = transform.TransformDirection(Vector3 (0, 0, initialSpeed));
		Physics.IgnoreCollision(instantiatedProjectile1.collider, transform.root.collider);
		Physics.IgnoreCollision(instantiatedProjectile1.collider, gameObject.FindWithTag("Player").transform.root.collider);

	} else {
		instantiatedProjectile.velocity = transform.TransformDirection(Vector3 (0, 0, initialSpeed));
		Physics.IgnoreCollision(instantiatedProjectile.collider, transform.root.collider);
		Physics.IgnoreCollision(instantiatedProjectile.collider, gameObject.FindWithTag("Player").transform.collider);

	}
	
	Kickback();
	//networkView.RPC("Kickback",RPCMode.Others);
}

function FireOneBullet () {  
	var penetrate : boolean = true;
	var pVal : int = penetrateVal;
	var layerMask = 1<<8 + 1<<2;
  	layerMask = ~layerMask;
  	var hits : RaycastHit[];
	var direction = SprayDirection();
  	hits = Physics.RaycastAll (transform.position, direction, range, layerMask);	
	System.Array.Sort(hits, Comparison);  	
//	 Did we hit anything?
	for (var i=0;i<hits.length;i++){
		if (i==1) break;
        var hit : RaycastHit = hits[i];
        var BP : BulletPenetration = hit.transform.GetComponent("BulletPenetration");
        if(penetrate){
       		if(BP == null){
        		penetrate = false;
       		} else {
       			if(pVal < BP.penetrateValue){
       				penetrate = false;
       			} else {
       				pVal -= BP.penetrateValue;
       			}	
       		}
		}
			//The DecalManager needs two bits of information
			var hitRotation = Quaternion.FromToRotation(Vector3.up, hit.normal);
			var hitInfo = new Array(hit.point, hitRotation, hit.transform, hit.normal); 
			// Apply a force to the rigidbody we hit
//			if (hit.rigidbody){
//				hit.transform.gameObject.networkView.RPC("applyforce",RPCMode.Server,force,direction,hit.point);
//				hit.rigidbody.AddForceAtPosition(force * direction, hit.point);
//			}
			
			// Place the particle system for spawing out of place where we hit the surface!
			// And spawn a couple of particles
			if (hit.collider.gameObject.tag=="Player"){
					//if (bloodParticles1) {
					bloodParticles1.transform.position = hit.point;
					bloodParticles1.transform.rotation = Quaternion.FromToRotation(Vector3.up, hit.normal);
					bloodParticles2.transform.position = hit.point;
					bloodParticles2.transform.rotation = Quaternion.FromToRotation(Vector3.up, hit.normal);
					bloodParticles1.Emit();	
					bloodParticles2.Emit();
					networkView.RPC("ShootParticles",RPCMode.Others,bloodParticles1.transform.position,bloodParticles1.transform.rotation,"bloodSparks");
					//}

			}
			else if (hit.collider.gameObject.tag=="ground"){
				if (dirtParticles) {
					dirtParticles.transform.position = hit.point;
					dirtParticles.transform.rotation = Quaternion.FromToRotation(Vector3.up, hit.normal);
					dirtParticles.Emit();
					networkView.RPC("ShootParticles",RPCMode.Others, hit.point,Quaternion.FromToRotation(Vector3.up, hit.normal),"dirtSparks");
				}
			}
			else if (hit.collider.gameObject.tag=="water"){
				if (waterSparks) {
					var waterScript:waterScript=waterSparks.GetComponent("waterScript");
					waterScript.Shoot(hit.point,Quaternion.FromToRotation(Vector3.up,hit.normal));
					networkView.RPC("ShootParticles",RPCMode.Others,hit.point,Quaternion.FromToRotation(Vector3.up,hit.normal),"waterSparks");
				}
			} else {
			
				if (baseParticles) {
					baseParticles.transform.position = hit.point;
					baseParticles.transform.rotation = Quaternion.FromToRotation(Vector3.up, hit.normal);
					baseParticles.Emit();
					networkView.RPC("ShootParticles",RPCMode.Others,baseParticles.transform.position,baseParticles.transform.rotation,"Sparks");
				}
			}

			// Send a damage message to the hit object	

		    Debug.Log(hit.collider.gameObject.name);
			
			
			if (hit.collider.gameObject.tag=="Player") {
				//HEAD SHOT - DOUBLE DAMAGE
				if (hit.collider.gameObject.name=="NeckHead"){				
					hit.transform.root.gameObject.networkView.RPC("ApplyDamage",RPCMode.Others,damage*2,localPlayerName,Network.player,1);
				}else
				{//BODY SHOT - NORMAL DAMAGE
					hit.transform.root.gameObject.networkView.RPC("ApplyDamage",RPCMode.Others,damage,localPlayerName,Network.player,0);
				}
				hit.transform.root.gameObject.networkView.RPC("showred",RPCMode.Others,Network.player);

			}
			hit.collider.SendMessageUpwards("ApplyDecal", hitInfo, SendMessageOptions.DontRequireReceiver);

		}
	}


function Comparison(x : RaycastHit, y : RaycastHit) : int { 
   var xDistance = x.distance; 
   var yDistance = y.distance; 
   return xDistance - yDistance; 
}
function SprayDirection() {
	var vx = (1 - 2 * Random.value) * actualSpread;
	var vy = (1 - 2 * Random.value) * actualSpread;
	var vz = 1.0;
	return mainCam.transform.TransformDirection(Vector3(vx,vy,vz));

}
function Reload () {
	if(ammoLeft >= ammoPerClip  ||clips <= 0|| !gunActive){
		return;
	}
//	if(clips <= 0){
//		Debug.Log("BB");
//		return;
//		}
	if(progressiveReload){
		ProgReload();
		return;
	}
	if(!reloading){
		//if ((ammoType == ammoTypes.byClip && ammoLeft < ammoPerClip && clips > 0 && gunActive) || (ammoType == ammoTypes.byBullet && ammoLeft < ammoPerClip && clips > 0 && gunActive)){
			aim1.canSwitchWeaponAim = false;
			if(aim1.aim){
				aim1.aim = false;
				aim = true;
				}
			reloading=true;
			if(secondaryWeapon != null){
				secondaryWeapon.reloading = true;
			} else if(!isPrimaryWeapon){
				primaryWeapon.reloading = true;
			}
			yield WaitForSeconds(waitforReload);
					if(isPrimaryWeapon){
						BroadcastMessage("ReloadAnim", reloadTime);
						gunAudio.PlayOneShot(reloadSound);
					} else {
						BroadcastMessage("SecondaryReloadAnim", reloadTime);
					}	
		
		// Wait for reload time first - then add more bullets!
		yield WaitForSeconds(reloadTime);
		reloading = false;
		if(secondaryWeapon != null){
			secondaryWeapon.reloading = false;
		} else if(!isPrimaryWeapon){
			primaryWeapon.reloading = false;
		}
		// We have a clip left reload
		if(ammoType == ammoTypes.byClip){
			if (clips > 0) {
				if(!infiniteAmmo)
					clips--;
				ammoLeft = ammoPerClip;
			}
		} else if (ammoType == ammoTypes.byBullet){
			if(clips > 0){
					if(clips > ammoPerClip){
						if(!infiniteAmmo) clips -= ammoPerClip - ammoLeft;
						ammoLeft = ammoPerClip;
				 	} else {
						ammoVal = Mathf.Clamp(ammoPerClip, clips, ammoLeft+clips);
						clips -= (ammoVal - ammoLeft);
						ammoLeft = ammoVal;
					}
				}	
			}
		if(aim)
			aim1.aim = true;
		aim1.canSwitchWeaponAim = true;
		SendMessage("updateAmmo", ammoLeft, SendMessageOptions.DontRequireReceiver);
		SendMessage("updateClips", clips, SendMessageOptions.DontRequireReceiver);
		//}
		ApplyToSharedAmmo();

	}
}
function ProgReload (){
	if(reloading)
		return;
	aim1.canSwitchWeaponAim = false;
	if(aim1.aim){
		aim1.aim = false;
		aim = true;
	}

	BroadcastMessage("ReloadIn", reloadInTime);
	yield WaitForSeconds(reloadInTime);
	progressiveReloading = true;
	reloading=true;
	if(secondaryWeapon != null && secondaryWeapon.secondaryFire && !secondaryWeapon.secondaryInterrupt){
		secondaryWeapon.reloading = true;
	} else if(secondaryFire && !secondaryInterrupt && !isPrimaryWeapon){
		primaryWeapon.reloading = false;
	}
	BroadcastMessage("singleFireAnim", fireRate);
}
function GetBulletsLeft () {
	return ammoLeft;
}
function selectWeapon () {	
	AlignToSharedAmmo();

	var aim1 : aimmode = GetComponentInChildren(aimmode);
	
	if(!isPrimaryWeapon)
			return;
			
//	var gos = GetComponentsInChildren(Renderer);
//	for( var go : Renderer in gos){
//		if (go.name != "muzzle_flash")
//		go.enabled=true;
//	}
	if(secondaryWeapon != null){
		secondaryWeapon.gunActive = false;
		secondaryWeapon.secondaryActive = false;
		BroadcastMessage("aimPrimary", SendMessageOptions.DontRequireReceiver);
	}
	if(!takingOut && !gunActive){
		aim1.canSwitchWeaponAim = false;
		
		BroadcastMessage("TakeOutAnim");
		takingOut = true;
	//	gunActive=false;
		yield WaitForSeconds(.6);
		gunActive=true;
		takingOut = false;
		aim1.canSwitchWeaponAim = true;
	}


}
function deselectWeapon () {
	gunActive=false;
	var gos = GetComponentsInChildren(Renderer);
	for( var go : Renderer in gos){
		go.enabled=false;

	}

}function walkSway () {
		if (!Screen.lockCursor||chatScript.usingChat) return;
		if(swayTarget == 1){	
			 if (Vector3.Distance(transform.localPosition, walkSway1) >= .01){
				curVect= walkSway1 - transform.localPosition;
				transform.Translate(curVect*Time.deltaTime*swayRate*player.GetComponent("FPSWalkerDB").speed,Space.Self);
			} else {
				swayTarget = 2;
			}
		} else if(swayTarget == 2) {
			if (Vector3.Distance(transform.localPosition, walkSway2) >= .01){
				curVect= walkSway2 - transform.localPosition;
				transform.Translate(curVect*Time.deltaTime*swayRate*player.GetComponent("FPSWalkerDB").speed,Space.Self);
			} else {
				swayTarget = 1;
			}
		}
}

function defineSwayPoints () {
	walkSway1 = transform.localPosition + swayFactor;
	walkSway2 = transform.localPosition - swayFactor;
}

function resetPosition () {
		 if (transform.localPosition != startPosition){
			curVect= startPosition - transform.localPosition;
			transform.Translate(curVect*Time.deltaTime*2,Space.Self);
		 }
}

function sprinting () {
	areSprinting = true;
}
function normalSpeed () {
	areSprinting = false;
	if(secondaryWeapon != null){
		if(isPrimaryWeapon && secondaryWeapon.secondaryActive)
			return;
	}
	if(!isPrimaryWeapon && !secondaryActive)
		return;

	gunActive = true;
}

//@RPC
function Kickback () {
	mainCam.GetComponent("MouseLookA").offsetY = kickbackAngle;
	weaponCam.GetComponent("MouseLookB").offsetY = kickbackAngle;
}
function KickbackZ () {
	startKickback = true;
	walkSway1 = Vector3( walkSway1.x, walkSway1.y, (walkSway1.z - kickbackZ));
	walkSway2 = Vector3( walkSway2.x, walkSway2.y, (walkSway2.z - kickbackZ));
	startPosition = Vector3( startPosition.x, startPosition.y, (startPosition.z - kickbackZ));

}

function ceaseFiring () {
	walkSway1 = Vector3( walkSway1.x, walkSway1.y, (walkSway1.z + kickbackZ));
	walkSway2 = Vector3( walkSway2.x, walkSway2.y, (walkSway2.z + kickbackZ));
	startPosition = Vector3( startPosition.x, startPosition.y, (startPosition.z + kickbackZ));
	startKickback = false;
}
function activateSecondary () {
	if(secondaryWeapon == null || secondaryWeapon.secondaryFire)
		return;
	AlignToSharedAmmo();
	
	if(gunActive){
		gunActive = false;
		secondaryWeapon.gunActive = true;
		secondaryWeapon.secondaryActive = true;
		SendMessage("updateAmmo", secondaryWeapon.ammoLeft, SendMessageOptions.DontRequireReceiver);
		SendMessage("updateClips", secondaryWeapon.clips, SendMessageOptions.DontRequireReceiver);
		BroadcastMessage("aimSecondary", SendMessageOptions.DontRequireReceiver);

	}
}
function activatePrimary () {
	AlignToSharedAmmo();
	if(!gunActive){
		gunActive = true;
		secondaryWeapon.gunActive = false;
		secondaryWeapon.secondaryActive = false;
		SendMessage("updateAmmo", ammoLeft, SendMessageOptions.DontRequireReceiver);
		SendMessage("updateClips", clips, SendMessageOptions.DontRequireReceiver);
		BroadcastMessage("aimPrimary", SendMessageOptions.DontRequireReceiver);

	}
}
function ejectShell () {
		var instantiatedProjectile1 = Instantiate (shell, ejectorPosition.transform.position, ejectorPosition.transform.rotation);
		instantiatedProjectile1.transform.parent = ejectorPosition.transform;
}
@RPC
function ShootParticles(pos:Vector3,rot:Quaternion,typeofSpark:String){
			if (typeofSpark=="bloodSparks"){
				bloodParticles1.transform.position=pos;
				bloodParticles1.transform.rotation=rot;		
				bloodParticles1.Emit();			
				bloodParticles2.transform.position=pos;
				bloodParticles2.transform.rotation=rot;
				bloodParticles2.Emit();			
			}else if(typeofSpark=="waterSparks"){
				var waterScript1:waterScript=waterSparks.GetComponent("waterScript");
				waterScript1.Shoot(pos,rot);			
			}else if(typeofSpark=="dirtSparks"){
				dirtParticles.transform.position = pos;
				dirtParticles.transform.rotation = rot;
				dirtParticles.Emit();
//				var particlesh:Transform=transform.Find("dirtSparks");
//				var particle:ParticleEmitter=particlesh.gameObject.GetComponent(ParticleEmitter);
//				particlesh.transform.position=pos;
//				particlesh.transform.rotation=rot;
//				particle.Emit();
			}else if(typeofSpark=="Sparks"){
				baseParticles.transform.position=pos;
				baseParticles.transform.rotation=rot;
				baseParticles.Emit();		
	
			
			}
}

@RPC
function sendMuzzle(isEnabled:boolean){
	muzzleFlashNetwork.enabled=isEnabled;
	if (audio&&isEnabled) {
		audio.Play();
		audio.loop = true;
	} else{
		audio.loop = false;
	}
}
@RPC
function applyforce(force : float ,direction:Vector3,point:Vector3){
	rigidbody.AddForceAtPosition(force * direction, point);

}
@RPC
function showred(){
	var red_screen:GameObject = gameObject.Find("redscreen");
	var redscript:red_screen_hit=red_screen.GetComponent("red_screen_hit");
	redscript.FlashWhenHit();

}
