//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.


var reloadAnim : String = "Reload";
var fireAnim : String = "Fire";
var takeOutAnim : String = "TakeOut";
var reloadIn : String = "ReloadIn";
var reloadOut : String = "ReloadOut";

var secondaryReloadAnim : String = "";
var secondaryFireAnim : String = "";
public var animations : Array = new Array();
animations[0] = "Reload";
animations[1] = "Fire";

var currentAnimation : String="none";

function ReloadAnim (reloadTime) {
	animation.Stop(reloadAnim);
	animation[reloadAnim].speed = (animation[reloadAnim].clip.length/reloadTime);
	animation.Rewind(reloadAnim);
	animation.Play(reloadAnim);
	setAnimation(reloadAnim,1);
	
}

function FireAnim () {
	setAnimation(fireAnim,0);
}

function SecondaryReloadAnim (reloadTime) {
	animation[secondaryReloadAnim].speed = (animation[secondaryReloadAnim].clip.length/reloadTime);
	animation.Rewind(secondaryReloadAnim);
	animation.Play(secondaryReloadAnim);
}

function SecondaryFireAnim () {
	animation.Rewind(secondaryFireAnim);
	animation.Play(secondaryFireAnim);
}
function TakeOutAnim () {
	if(takeOutAnim == "")
		return;
	animation.Stop(takeOutAnim);
	animation.Rewind(takeOutAnim);
	
	//change the ".6" here to change the Take Out Time
	animation[takeOutAnim].speed = (animation[takeOutAnim].clip.length/.6);
	animation.Play(takeOutAnim);
}
function singleFireAnim (fireRate) {
	animation.Stop(fireAnim);
	animation[fireAnim].speed = (animation[fireAnim].clip.length/fireRate);
	animation.Rewind(fireAnim);
	animation.Play(fireAnim);
}
function singleSecFireAnim (fireRate) {
	animation.Stop(secondaryFireAnim);
	animation[secondaryFireAnim].speed = (animation[secondaryFireAnim].clip.length/fireRate);
	animation.Rewind(secondaryFireAnim);
	animation.Play(secondaryFireAnim);
}
function ReloadIn (reloadTime) {
	animation[reloadIn].speed = (animation[reloadIn].clip.length/reloadTime);
	animation.Rewind(reloadIn);
	animation.Play(reloadIn);
}
function ReloadOut (reloadTime) {
	animation[reloadOut].speed = (animation[reloadOut].clip.length/reloadTime);
	animation.Rewind(reloadOut);
	animation.Play(reloadOut);
}

function setAnimation(aState:String,reloadTime:int) {
	setAnimationState(aState,reloadTime);				
	networkView.RPC("setAnimationState", RPCMode.Others, aState,reloadTime);
}


@RPC
function setAnimationState(aStateIndex : String,reloadTime:int) {
	if (reloadTime==1){
	animation.Stop(aStateIndex);
	animation[aStateIndex].speed = (animation[aStateIndex].clip.length/reloadTime);
	}
	animation.Rewind(aStateIndex);
	animation.Play(aStateIndex);
}


