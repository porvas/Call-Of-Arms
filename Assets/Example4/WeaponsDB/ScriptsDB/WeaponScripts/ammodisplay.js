//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.


var bulletsLeft : int;
var clips : int;
var showClips : boolean = true;
var display : boolean = true;
var clipDisplay : String;
private var gunScripts = new Array();
private var gunScriptSecondary : gunscript;
private var gunScript : gunscript;
private var gun : gunscript;
var skin:GUISkin;
var progressBack:Texture;
var progressFront:Texture;
var barWidth:int;
var sprintNum:int;
var sprintDuration:int;
var reloadSound:AudioClip;
var zoomIn:AudioClip;
var zoomOut:AudioClip;
var heartbeat:AudioClip;
function Start () {
//gun= GetComponent("gunscript");
	gunScripts = this.GetComponents(gunscript);
	for(var i = 0; i < gunScripts.length; i++){
		if(gunScripts[i].isPrimaryWeapon){
			gunScript = gunScripts[i];
		} else {
			gunScriptSecondary = gunScripts[i];
		}
	}
	//progressBack=transform.parent.parent.GetComponent("healthScript").healthBack;
	//progressFront=transform.parent.parent.GetComponent("healthScript").health100;
	sprintDuration=transform.Find("AimObject").GetComponent(aimmode).sprintDuration;
	
}
function OnGUI (){
	GUI.skin=skin;
	sprintNum=transform.Find("AimObject").GetComponent(aimmode).sprintNum;
	barWidth=sprintNum;
	if (GetComponent("gunscript").localPlayer&&GetComponent("gunscript").gunActive){
		GUI.DrawTexture(Rect(Screen.width-210,Screen.height-44-30,200,24), progressBack);
		GUI.DrawTexture(Rect(Screen.width-202, Screen.height-40-30, barWidth, 16), progressFront);
		GUI.Label(Rect(Screen.width-210,Screen.height-44-30,200,24),"Stamina","staminaBar");	
	}
	if (!gunScript.localPlayer)return;
	if (!gunScript.gunActive) return;
	if(showClips){
		clipDisplay ="/"+gunScript.clips;
		if(gunScriptSecondary != null)
			clipDisplay2 ="/"+gunScriptSecondary.clips;
	}else{
		clipDisplay = "";
		clipDisplay2 = "";
	}
	
	if(display){
		
		if(gunScriptSecondary != null){
			GUI.Box(Rect(Screen.width - 110,Screen.height-44-30-50,100,20),"Ammo: "+Mathf.Round(gunScript.ammoLeft) + clipDisplay);
			GUI.Box(Rect(Screen.width - 80,Screen.height-30-54,70,20),"Alt: "+Mathf.Round(gunScriptSecondary.ammoLeft) + clipDisplay2);
		} else {
			GUI.Box(Rect(Screen.width - 110,Screen.height-44-30-35,100,30),"Ammo: "+Mathf.Round(gunScript.ammoLeft) + clipDisplay);
		}
	}

}
function selectWeapon () {
	display = true;
}
function deselectWeapon () {
	display = false;
}