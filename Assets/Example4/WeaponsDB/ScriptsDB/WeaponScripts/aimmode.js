//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.

var switched=false;
var scopeTexture : Texture;
var zoomFactor : float = 1;
var scopeDelay : float;
private var player : GameObject;
private var scopeTime : float;
var scoped : boolean = false;
var sightsZoom : boolean = false;
var inScope : boolean = false;
var aim : boolean = true;
static var aiming : boolean;
private var sprinting : boolean;
var sprintDuration = 15;
var sprintAdd = 1;
var sprintLoss = 1;
var sprintMin = 30;
var canSprint : boolean;
private var deltaAngle : Vector3;
private var selected : boolean = false;
var sprintNum : int;
var aimRate : float = 5;
private var cmra : GameObject;
private var wcmra : GameObject;
private var wasAiming:boolean;
var zoomFactor2 : float = 1;
var scoped2 : boolean = false;
var sightsZoom2 : boolean = false;

var zoomFactor1 : float = 1;
var scoped1 : boolean = false;
var sightsZoom1 : boolean = false;

 var aimPosition : Vector3;
 var aimRotation : Vector3;
 var hipPosition : Vector3;
 var hipRotation : Vector3;
 var sprintPosition : Vector3;
 var sprintRotation : Vector3;

 var aimPosition1 : Vector3;
 var aimRotation1 : Vector3;
 var hipPosition1 : Vector3;
 var hipRotation1 : Vector3;
 var sprintPosition1 : Vector3;
 var sprintRotation1 : Vector3;

var aimPosition2 : Vector3;
var aimRotation2 : Vector3;
var hipPosition2 : Vector3;
var hipRotation2 : Vector3;
var sprintPosition2 : Vector3;
var sprintRotation2 : Vector3;

var controller : CharacterController;
private var zoomed : boolean = false;
static var canSwitchWeaponAim : boolean = true;
var hasSecondary : boolean = true;
private var gunscript1 : gunscript;
//private var gunscripts : gunscript[];
private var curVect : Vector3;
var scoreBoard:scoreBoard;
var chatScript:FPSChat4;
private var zoomIn:AudioClip;
private var zoomOut:AudioClip;
private var heartbeat:AudioClip;
var audioS:AudioSource;
function Start () {
	audioS=GetComponent(AudioSource);
	scoreBoard=GameObject.Find("Generalscripts").GetComponent("scoreBoard");
	chatScript = GameObject.Find("Generalscripts").GetComponent(FPSChat4) as FPSChat4;
	aimPrimary();
	cmra = transform.parent.parent.parent.Find("Main Camera").gameObject;
	wcmra = transform.parent.parent.gameObject;
	player = transform.parent.parent.parent.gameObject;
	controller = player.GetComponent(CharacterController);	
	sprintNum = sprintDuration;
	sprintStartTime = 0;
	canSprint=true;
	aiming = false;
	canaim = true;
	sprinting = false;
	if( zoomFactor == 0){
		zoomFactor = 1;
	}
	zoomIn=transform.parent.GetComponent(ammodisplay).zoomIn;
	zoomOut=transform.parent.GetComponent(ammodisplay).zoomOut;
	heartbeat=transform.parent.GetComponent(ammodisplay).heartbeat;

}
function MouseAim(aiming:int){

wcmra.GetComponent(MouseLookB);
cmra.GetComponent(MouseLookA);
player.GetComponent(MouseLookPlayer).sensitivityX=aiming;
cmra.GetComponent(MouseLookA).sensitivityY=aiming;
wcmra.GetComponent(MouseLookB).sensitivityY=aiming;

}



function Update () {

	if(!gunscript1.gunActive){
		forceNormalize();
		return;
	}
	if (scoreBoard.inBetweenGames||!Screen.lockCursor||scoreBoard.showingBox||chatScript.usingChat){
		return;	
	}
	

//Replenish Sprint time

	if(sprintNum < sprintDuration  && !sprinting)
		sprintNum = sprintNum + sprintAdd;
	if(sprintNum > sprintMin){
		audioS.loop=false;
		canSprint = true;
	}
	if ((inScope && !aiming) || (zoomed && !aiming)){
		audioS.PlayOneShot(zoomOut);
		inScope = false;
		zoomed = false;
			var gos = GetComponentsInChildren(Renderer);
			for( var go : Renderer in gos){
				if (go.name != "muzzle_flash")
					go.enabled=true;
			}
		}
	if(!aiming && cmra.camera.fieldOfView != 60){
		cmra.camera.fieldOfView = 60;
		wcmra.camera.fieldOfView = 60;
	}


//aiming
	if (Input.GetButton("Fire2") && !(Input.GetButton("Fire3")) && aim && selected && !sprinting){	
		if (!aiming){
			scopeTime = Time.time + aimRate;
			aiming = true;
			canSprint=false;
			MouseAim(2);
			canSwitchWeaponAim = true;
			curVect= aimPosition-transform.localPosition;
			audioS.PlayOneShot(zoomIn);
			SendMessageUpwards("aiming", SendMessageOptions.DontRequireReceiver);
			BroadcastMessage("aiming", SendMessageOptions.DontRequireReceiver);
			player.BroadcastMessage("aiming", SendMessageOptions.DontRequireReceiver);

		}
		canSprint=false;
		sprinting=false;
		
		if (transform.localEulerAngles != aimRotation){
			transform.localEulerAngles = aimRotation;
		}
		
		if ( transform.localPosition!=aimPosition && aiming){
			if(Mathf.Abs(Vector3.Distance(transform.localPosition , aimPosition)) < curVect.magnitude/aimRate*Time.deltaTime){
				transform.localPosition=aimPosition;
			} else {
				transform.localPosition += curVect/aimRate*Time.deltaTime;
			}
		}
		if (scoped && selected && Time.time >= scopeTime && !inScope){
			inScope = true;
			
			var go = GetComponentsInChildren(Renderer);
			for( var g : Renderer in go){
				if (g.gameObject.name != "Sparks")
					g.enabled=false;
			}
			cmra.camera.fieldOfView = cmra.camera.fieldOfView/zoomFactor;
			wcmra.camera.fieldOfView = cmra.camera.fieldOfView;
		}
		if (sightsZoom && selected && !zoomed){
			if(cmra.camera.fieldOfView > (60/zoomFactor)){
				if(cmra.camera.fieldOfView - (60/zoomFactor)/aimRate*Time.deltaTime/2 < 60/zoomFactor){
					cmra.camera.fieldOfView = (60/zoomFactor);
				} else {
					cmra.camera.fieldOfView -= (60/zoomFactor)/aimRate*Time.deltaTime/2;
				}
			} else {
				
				zoomed = true;
		//		cmra.camera.fieldOfView = (60/zoomFactor);
			}
			if(wcmra.camera.fieldOfView > (60/zoomFactor)){
				if(wcmra.camera.fieldOfView - (60/zoomFactor)/aimRate*Time.deltaTime/2 < 60/zoomFactor){
					wcmra.camera.fieldOfView = (60/zoomFactor);
				} else {
					wcmra.camera.fieldOfView -= (60/zoomFactor)/aimRate*Time.deltaTime/2;
				}
			}
		}

		//sprinting
	}else if(Input.GetButton("Sprint")&& !(Input.GetButton("Fire2")) && canSprint && selected && !aiming){
		if(Input.GetButton("Fire1")){
			//switched=true;
			sprinting = false;
			canSwitchWeaponAim = true;
			curVect= hipPosition-transform.localPosition;

			SendMessageUpwards("normalSpeed", SendMessageOptions.DontRequireReceiver);
			BroadcastMessage("stopAiming", SendMessageOptions.DontRequireReceiver);
			player.BroadcastMessage("stopAiming", SendMessageOptions.DontRequireReceiver);
			//if(Mathf.Abs(Vector3.Distance(transform.localPosition , hipPosition)) < curVect.magnitude/aimRate*Time.deltaTime){
				transform.localPosition=hipPosition;
			//} else {
			//	transform.localPosition += curVect/aimRate*Time.deltaTime;
			//}
			if (transform.localEulerAngles != hipRotation){
				transform.localEulerAngles = hipRotation;
			}
			return;
		}
		if (transform.parent.parent.parent.GetComponent("FPSWalkerDB").isMoving) sprintNum = sprintNum - sprintLoss;
		aiming = false;
		MouseAim(11);
		if (!sprinting){
			curVect= sprintPosition-transform.localPosition;
			sprinting = true;
			aiming=false;
			MouseAim(11);
			sprintEndTime = Time.time + sprintDuration;			
			SendMessageUpwards("sprinting", SendMessageOptions.DontRequireReceiver);
			canSwitchWeaponAim = false;
		
		}
		
		if(Mathf.Abs(Vector3.Distance(transform.localPosition , sprintPosition)) < curVect.magnitude/aimRate*Time.deltaTime){
			transform.localPosition=sprintPosition;
		} else {
			transform.localPosition += curVect/aimRate*Time.deltaTime;
		}
		
		if (transform.localEulerAngles != sprintRotation){
			transform.localEulerAngles = sprintRotation;

		}
		if(sprintNum <= 0){
			canSprint = false;
			audio.clip=heartbeat;
			audioS.Play();
			audioS.loop=true;
		}

//returning to normal		
	} else {
					
		if ((aiming || sprinting)){
			
			aiming = false;
			MouseAim(11);
			sprinting = false;
			canSwitchWeaponAim = false;
			curVect= hipPosition-transform.localPosition;

			SendMessageUpwards("normalSpeed", SendMessageOptions.DontRequireReceiver);
			BroadcastMessage("stopAiming", SendMessageOptions.DontRequireReceiver);
			player.BroadcastMessage("stopAiming", SendMessageOptions.DontRequireReceiver);


		}

		if(Mathf.Abs(Vector3.Distance(transform.localPosition , hipPosition)) < curVect.magnitude/aimRate*Time.deltaTime){
			transform.localPosition=hipPosition;
		} else {
			transform.localPosition += curVect/aimRate*Time.deltaTime;
		}
		
		if (transform.localEulerAngles != hipRotation){
			transform.localEulerAngles = hipRotation;
		}
	}
	//if (!aiming&&!sprinting)forceNormalize();
	
}

function OnGUI () {
	
	if(scopeTexture != null && inScope){
		if (!scoreBoard.inBetweenGames)
			GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), scopeTexture, ScaleMode.StretchToFill);
	}
	//GUI.Label(Rect(Screen.width/2,Screen.height/2,100,25),"Sprint Energy: "+sprintNum);

}

function deselectWeapon () {
	selected = false;
	inScope = false;
	aiming = false;
	//cmra.camera.fieldOfView = 60;
	//wcmra.camera.fieldOfView = 60;
}

function selectWeapon () {
	selected = true;
	aiming = false;
	forceNormalize();
}

function aimPrimary () {
	aimPosition = aimPosition1;
	aimRotation = aimRotation1;
	hipPosition = hipPosition1;
	hipRotation = hipRotation1;
	sprintPosition = sprintPosition1;
	sprintRotation = sprintRotation1;
	aiming = true;
	sprinting = true;
	curVect= hipPosition-transform.localPosition;
	getGunScript(0);
	zoomFactor = zoomFactor1;
	scoped = scoped1;
	sightsZoom = sightsZoom1;
}

function aimSecondary () {
	aimPosition = aimPosition2;
	aimRotation = aimRotation2;
	hipPosition = hipPosition2;
	hipRotation = hipRotation2;
	sprintPosition = sprintPosition2;
	sprintRotation = sprintRotation2;
	aiming = true;
	sprinting = true;
	curVect= hipPosition-transform.localPosition;
	getGunScript(1);
	zoomFactor = zoomFactor2;
	scoped = scoped2;
	sightsZoom = sightsZoom2;
}
function getGunScript (n : int){
	gunscripts = transform.parent.GetComponents(gunscript);
	for (var gs : gunscript in gunscripts){
		if(n == 0 && gs.isPrimaryWeapon){
			gunscript1 = gs;
		} else if(n == 1 && !gs.isPrimaryWeapon){
			gunscript1 = gs;
		}

	}
}
function forceNormalize () {
	if(Mathf.Abs(Vector3.Distance(transform.localPosition , hipPosition)) < curVect.magnitude/aimRate*Time.deltaTime){
		transform.localPosition=hipPosition;
	} else {
		transform.localPosition += curVect/aimRate*Time.deltaTime;
	}
	if (transform.localEulerAngles != hipRotation){
		transform.localEulerAngles = hipRotation;
	}

}
function OnApplicationFocus(focus : boolean){
	if (focus==false&&aiming)
		wasAiming=true;
	else if (focus&&wasAiming){
		aiming = false;
		MouseAim(11);
		canSwitchWeaponAim = false;
		SendMessageUpwards("normalSpeed1", SendMessageOptions.DontRequireReceiver);
		BroadcastMessage("stopAiming", SendMessageOptions.DontRequireReceiver);
		player.BroadcastMessage("stopAiming", SendMessageOptions.DontRequireReceiver);

		curVect= hipPosition-transform.localPosition;
		if(Mathf.Abs(Vector3.Distance(transform.localPosition , hipPosition)) < curVect.magnitude/aimRate*Time.deltaTime){
			transform.localPosition=hipPosition;
		} else {
			transform.localPosition += curVect/aimRate*Time.deltaTime;
		}
		
		if (transform.localEulerAngles != hipRotation){
			transform.localEulerAngles = hipRotation;
		}

		wasAiming=false;
	}	
}
function returnToNormal(){
			
		aiming = false;
		MouseAim(11);
		sprinting = false;
		inScope = false;
		zoomed = false;	
		curVect= hipPosition-transform.localPosition;
		SendMessageUpwards("normalSpeed", SendMessageOptions.DontRequireReceiver);
		BroadcastMessage("stopAiming", SendMessageOptions.DontRequireReceiver);
		player.BroadcastMessage("stopAiming", SendMessageOptions.DontRequireReceiver);
		forceNormalize();
		transform.localPosition = hipPosition;
		transform.localEulerAngles = hipRotation;
}