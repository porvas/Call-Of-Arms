
private var speed = 6.0;
var aimSpeed = 2.0;
var sprintSpeed = 10.0;
private var canSprint : boolean = true;
public var animations : Array = new Array();
animations[0] = "walkingForwards";
animations[1] = "walkingBackwards";
animations[2] = "runningForwards";
animations[3] = "runningBackwards";
animations[4] = "StrafeWL";
animations[5] = "StrafeWR";
animations[6] = "StrafeRL";
animations[7] = "StrafeRR";
animations[8] = "StandingAim";

var isMoving:boolean=false;
var sprintJumpSpeed = 8.0;
var normSpeed = 6.0;
var jumpSpeed = 8.0;
var normJumpSpeed = 8.0;
var gravity = 20.0;
var inAir:boolean=false;
var standingAim:boolean=true;
private var mainCamera : GameObject;
private var weaponCamera : GameObject;
private var standardCamHeight : float;
var running:boolean=false;
var moveDirection = Vector3.zero;
private var grounded : boolean = false;
static var walking : boolean = false;
var walkingBackwards:boolean=false;
var walkingForwards:boolean=false;
var runningForwards:boolean=false;
var runningBackwards:boolean=false;
var strafeWL:boolean=false;
var strafeWR:boolean=false;
var strafeRL:boolean=false;
var strafeRR:boolean=false;
private var chatScript:FPSChat4;
private var aimmode:aimmode;
function Start() {
	chatScript = GameObject.Find("Generalscripts").GetComponent(FPSChat4) as FPSChat4;
	speed = normSpeed;
	mainCamera = this.transform.Find("Main Camera").gameObject;
	weaponCamera = this.transform.Find("Weapon Camera").gameObject;
	standardCamHeight = mainCamera.transform.localPosition.y;
}

function Update() {
	if (chatScript.usingChat)return;
	if (GetComponent(PlayerScript).dead) return;
	if (!Screen.lockCursor)return;
	if(mainCamera.transform.localPosition.y > standardCamHeight){
		mainCamera.transform.localPosition.y = standardCamHeight;
	} 
	if(weaponCamera.transform.localPosition.y > standardCamHeight){
		weaponCamera.transform.localPosition.y = standardCamHeight;
	} 

	
	
if (Input.GetButton("Sprint")){
	activeGuns=gameObject.GetComponentsInChildren(gunscript);
	for (var gun:gunscript in activeGuns){
	
		if (gun.gunActive==true){
			Debug.Log("gun found");
			var aimmodeobjT:Transform= gun.GetComponent(Transform);
			var aimmodeobj:GameObject =aimmodeobjT.Find("AimObject").gameObject;
			aimmode=aimmodeobj.GetComponent("aimmode");
			if (!aimmode.canSprint||aimmode.aiming) return;
		}
	
	
	}
	if (Mathf.Abs(Input.GetAxis("Vertical"))>0.1){
	
		if (Input.GetAxis("Vertical")<0.1) {
			setAction(3);
			networkView.RPC("setAction",RPCMode.Others,3);		
		}
		else if (Input.GetAxis("Vertical")>0.1)	{
			setAction(2);
			networkView.RPC("setAction",RPCMode.Others,2);		
		}
	
	}else{
	
		if (Input.GetAxis("Horizontal")>0.3) {
			setAction(7);
			networkView.RPC("setAction",RPCMode.Others,7);		
		}
		else if (Input.GetAxis("Horizontal")<0.3) {
			setAction(6);
			networkView.RPC("setAction",RPCMode.Others,6);		
		}
	}

	running=true;
	sprinting();
} else if (!Input.GetButton("Sprint")){ 
	if (running) running=false;
	normalSpeed();
}
	if (!isMoving){
		setAction(8);
		networkView.RPC("setAction",RPCMode.Others,8);	
	}



}
function FixedUpdate() {
	if (chatScript.usingChat)return;
	if (!Screen.lockCursor)return;
	if (grounded) {
		isMoving=false;
		// We are grounded, so recalculate movedirection directly from axes
		moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
		if (Input.GetAxis("Vertical")<0) {
			setAction(1);
			networkView.RPC("setAction",RPCMode.Others,1);
		}
		else if (Input.GetAxis("Vertical")>0) {
			setAction(0);
			networkView.RPC("setAction",RPCMode.Others,0);		
		}
		else if (Input.GetAxis("Horizontal")>0) {
			setAction(5);
			networkView.RPC("setAction",RPCMode.Others,5);
		}
		else if (Input.GetAxis("Horizontal")<0) {
			setAction(4);
			networkView.RPC("setAction",RPCMode.Others,4);
		}
		if (running){
			if (Input.GetButton ("Jump")) {
			
				moveDirection.y = sprintJumpSpeed;
			}
		} else if(Input.GetButton ("Jump")) {		
				moveDirection.y = jumpSpeed;
		
		}else if (Input.GetAxis("Horizontal")>0) {
				setAction(5);
				networkView.RPC("setAction",RPCMode.Others,5);
		}
		else if (Input.GetAxis("Horizontal")<0) {
				setAction(4);
				networkView.RPC("setAction",RPCMode.Others,4);
		}

	}

	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;
	
	// Move the controller
	var controller : CharacterController = GetComponent(CharacterController);
	var flags = controller.Move(moveDirection * Time.deltaTime);	
	grounded = (flags & CollisionFlags.CollidedBelow) != 0;
	if (!grounded) {
		if (!inAir) {
			setInAir(true);
			networkView.RPC("setInAir",RPCMode.Others,true);
		}
	}
	else {
		if (inAir){
			setInAir(false);
			networkView.RPC("setInAir",RPCMode.Others,false);
		}
	}
	isMoving=!grounded&&!moveDirection.y;

	if((Mathf.Abs(moveDirection.x) > 0) && grounded || (Mathf.Abs(moveDirection.z) > 0 && grounded)){
		isMoving=true;
		if(!walking){
			walking = true;
			if (Input.GetAxis("Vertical")<0) {
				setAction(1);
				networkView.RPC("setAction",RPCMode.Others,1);
			}
			else if (Input.GetAxis("Vertical")>0) {
				setAction(0);	
				networkView.RPC("setAction",RPCMode.Others,0);	
			}
			
			BroadcastMessage("walking", SendMessageOptions.DontRequireReceiver);
			isMoving=true;
		}
	} else if(walking){
		setAction(8);
		networkView.RPC("setAction",RPCMode.Others,8);
		BroadcastMessage("stopWalking", SendMessageOptions.DontRequireReceiver);
		isMoving=false;
		walking=false;
	}
}

@script RequireComponent(CharacterController)
//AIM SPEED
function aiming() {
	speed = aimSpeed;
}
//NORMAL SPEED
function normalSpeed () {
		
		if (Input.GetAxis("Vertical")<0) {
				setAction(1);
				networkView.RPC("setAction",RPCMode.Others,1);
		}
		else if (Input.GetAxis("Vertical")>0) {
				Debug.Log("WALKING NOW");
				setAction(0);
				networkView.RPC("setAction",RPCMode.Others,0);		
		}
		speed = normSpeed;
		jumpSpeed = normJumpSpeed;
}
function sprinting () {

	if(canSprint){
		
		speed = sprintSpeed;
		jumpSpeed = sprintJumpSpeed;
	}
}
@RPC
function setAction(i:int){
	if (i==0) walkingForwards=true;
	else walkingForwards=false;
	if (i==1) walkingBackwards=true;
	else walkingBackwards=false;
	if (i==2) runningForwards=true;
	else runningForwards=false;
	if (i==3) runningBackwards=true;
	else runningBackwards=false;
	if (i==4) strafeWL=true;
	else strafeWL=false;
	if (i==5) strafeWR=true;
	else strafeWR=false;
	if (i==6) strafeRL=true;
	else strafeRL=false;
	if (i==7) strafeRR=true;
	else strafeRR=false;
	if (i==8) standingAim=true;
	else standingAim=false;
}
@RPC
function setInAir(value:boolean){

	inAir=value;

}