var aimUp:AnimationState;
var aimDown:AnimationState;
var walkLeft:AnimationState;
var walkRight:AnimationState;
var walkBackAim:AnimationState;
var runBackAim:AnimationState;
var standingJump:AnimationState;
var runLeft:AnimationState;
var runRight:AnimationState;
var inAir:boolean=false;
private var moveDirectiony:float;
private var moveDirection:Vector3;
public var jumpAnimStretch : float = 5;
private var groundedWeight:float=1;
private var motor:CharacterMotor;
//var runBackAim:AnimationState;
//var runBackAim:AnimationState;
//var runBackAim:AnimationState;
//var runBackAim:AnimationState;


var running:boolean=false;
var fpsWalker:FPSWalkerDB;
function Start ()
{

	fpsWalker=transform.parent.gameObject.GetComponent(FPSWalkerDB);
	//motor=GetComponent(CharacterMotor);
   // Set all animations to loop
   animation.wrapMode = WrapMode.Loop;
   //animation["StandingJump"].wrapMode=WrapMode.Once;
   // except shooting
	walkLeft=animation["StrafeWalkLeftAim"];
	walkRight=animation["StrafeWalkRightAim"];
	runLeft=animation["StrafeRunLeftAim"];
	runRight=animation["StrafeRunRightAim"];
	walkBackAim=animation["WalkBackwardsAim"];
	runBackAim=animation["RunBackwardsAim"];
	//standingJump=animation["StandingJump"];
	walkLeft.layer=0;
	walkRight.layer=0;
	runLeft.layer=0;
	runRight.layer=0;
	walkBackAim.layer=0;
	runBackAim.layer=0;
	
	//AIM ANIMATIONS
    aimUp=animation["StandingAimUp"];
    aimDown=animation["StandingAimDown"];
    aimUp.layer = 1;
 	aimDown.layer = 1;
 	aimUp.weight=1;
 	aimUp.speed=0;
 	aimUp.enabled=true;
  	aimDown.weight=1;
 	aimDown.speed=0;
 	aimDown.enabled=true;
	aimUp.blendMode=AnimationBlendMode.Additive;
	aimDown.blendMode=AnimationBlendMode.Additive;

	//JUMP ANIMATIONS
	animation["StandingJump"].layer = 2;
	animation["StandingJump"].weight = 0;
	animation["StandingJump"].speed = 0;
	animation["StandingJump"].enabled = true;
	animation["RunJump"].layer = 2;
	animation["RunJump"].weight = 0;
	animation["RunJump"].speed = 0;
	animation["RunJump"].enabled = true;
	animation.SyncLayer(2);
   // Put idle and walk into lower layers (The default layer is always 0)
   // This will do two things
   // - Since shoot and idle/walk are in different layers they will not affect
   //   each other's playback when calling CrossFade.
   // - Since shoot is in a higher layer, the animation will replace idle/walk
   //   animations when faded in.

   // Stop animations that are already playing
   //(In case user forgot to disable play automatically)
   //animation.Stop();
   //networkView.RPC("playAnim",RPCMode.Others);
  
}



function Update(){
inAir=fpsWalker.inAir;
moveDirectiony=fpsWalker.moveDirection.y;
moveDirection=fpsWalker.moveDirection;


//SPRINTING
if (fpsWalker.runningForwards){
	animation.CrossFade("RunAim",0.2);
} 
else if (fpsWalker.runningBackwards){
	animation.CrossFade("RunBackwardsAim",0.2);
} 
//WALKING
else if(fpsWalker.walkingBackwards){
	animation.CrossFade("WalkBackwardsAim",0.2);	
}
else if(fpsWalker.walkingForwards){
	animation.CrossFade("WalkAim",0.2);
//TURNING LEFT OR RIGHT
}else if(fpsWalker.strafeWL){
	animation.CrossFade("StrafeWalkLeftAim",0.2);
}else if(fpsWalker.strafeWR){
	animation.CrossFade("StrafeWalkRightAim",0.2);
}else if(fpsWalker.strafeRL){
	animation.CrossFade("StrafeRunLeftAim",0.2);
}else if(fpsWalker.strafeRR){
	animation.CrossFade("StrafeRunRightAim",0.2);
//STANDING
}else if(fpsWalker.standingAim){
	animation.CrossFade("StandingAim",0.2);
}

if (inAir)
	groundedWeight = CrossFadeDown(groundedWeight, 0.1);
else
	groundedWeight = CrossFadeUp(groundedWeight, 0.2);
		
var runningJump = Mathf.Clamp01(Vector3.Dot(moveDirection, transform.forward) / 2.0);
animation["StandingJump"].weight = (1 - groundedWeight) * (1 - runningJump);
animation["RunJump"].weight = (1 - groundedWeight) * runningJump;
networkView.RPC("netJumping",RPCMode.Others,groundedWeight,runningJump,0,0.0);
if (inAir) {
	var normalizedTime = Mathf.InverseLerp(jumpAnimStretch, -jumpAnimStretch, moveDirectiony);
	animation["StandingJump"].normalizedTime = normalizedTime/2;
	animation["RunJump"].normalizedTime = normalizedTime/1.5;
	networkView.RPC("netJumping",RPCMode.Others,groundedWeight,runningJump,1,normalizedTime);
}
//AIMING UP OR DOWN
var mouse:MouseLookB=transform.parent.Find("Weapon Camera").GetComponent(MouseLookB);
var angle=mouse.yangle;

if (angle<0){
	//animation.CrossFade("StandingAimUp",0.2);
	aimUp.weight=1;
	aimUp.normalizedTime=-angle/75;
	networkView.RPC("netAiming",RPCMode.Others,"StandingAimUp",angle);
	//animation.Blend("StandingAimUp",-angle/75);
	}
else if (angle>0){
	//animation.CrossFade("StandingAimDown",0.1);
	//animation.Blend("StandingAimDown",angle/75);
	aimDown.weight=1;
	aimDown.normalizedTime=angle/75;
	networkView.RPC("netAiming",RPCMode.Others,"StandingAimDown",angle);
}	

}
function CrossFadeUp (weight : float, fadeTime : float) : float {
	return Mathf.Clamp01(weight + Time.deltaTime / fadeTime);
}

function CrossFadeDown (weight : float, fadeTime : float) : float {
	return Mathf.Clamp01(weight - Time.deltaTime / fadeTime);
}
@RPC
function playAnim(){
animation.wrapMode=WrapMode.Loop;
animation.Play("StandingAim");

}
@RPC
function update_animations(anim:String){
	//animation.Stop("WalkAim");
	//animation.wrapMode=WrapMode.Loop;
	animation.CrossFade(anim,0.2);
	animation.Play("WalkAim");

}
@RPC
function netAiming(aim:String,angle:float){
	var aimAnim:AnimationState=animation[aim];
	aimAnim.weight=1;
	if (angle<0) aimAnim.normalizedTime=-angle/75;
	else aimAnim.normalizedTime=angle/75;
}
@RPC
function netJumping(groundedWeight:float,runningJump:float,inAir:int,normalizedTime:float){
	animation["StandingJump"].layer = 2;
	animation["StandingJump"].weight = 0;
	animation["StandingJump"].speed = 0;
	animation["StandingJump"].enabled = true;
	animation["RunJump"].layer = 2;
	animation["RunJump"].weight = 0;
	animation["RunJump"].speed = 0;
	animation["RunJump"].enabled = true;
	animation.SyncLayer(2);
	if (inAir==0){
		animation["StandingJump"].weight = (1 - groundedWeight) * (1 - runningJump);
		animation["RunJump"].weight = (1 - groundedWeight) * runningJump;
	}else if (inAir==1){
		animation["StandingJump"].normalizedTime = normalizedTime/2;
		animation["RunJump"].normalizedTime = normalizedTime/1.5;
	}
}