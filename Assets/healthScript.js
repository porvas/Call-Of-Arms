var health100:Texture2D;
var health90:Texture2D;
var health80:Texture2D;
var health70:Texture2D;
var health60:Texture2D;
var health50:Texture2D;
var health40:Texture2D;
var health30:Texture2D;
var health20:Texture2D;
var health10:Texture2D;
var health0:Texture2D;
private var hp:int;
var healthBack:Texture2D;
private var healthT:Texture2D;
private var localPlayer:boolean=false;
var skin:GUISkin;
function Start(){
healthT=health100;
hp=GetComponent("PlayerScript").hp;
localPlayer=GetComponent("PlayerScript").localPlayer;
skin=GetComponent("PlayerScript").skin;
}
function OnGUI(){

	if (!localPlayer) return;
	GUI.skin=skin;
	//GUI.DrawTexture(new Rect(Screen.width-210, Screen.height-54, 200, 64), healthBack, ScaleMode.ScaleToFit);
	//GUI.DrawTexture(new Rect(Screen.width-210, Screen.height-54, 200, 64), healthT, ScaleMode.ScaleToFit);
		var width:int=184*hp/100;
		GUI.DrawTexture(Rect(Screen.width-210,Screen.height-44,200,24), healthBack);
		GUI.DrawTexture(Rect(Screen.width-202, Screen.height-40, width, 16), health100);
		GUI.Label(Rect(Screen.width-210,Screen.height-40,200,16),"HP","staminaBar");
}
function Update () {
	if (!localPlayer) return;
	hp=GetComponent("PlayerScript").hp;

	if (hp>90){
		healthT=health100;
	}else if(hp>80){
		healthT=health90;
	}else if(hp>70){
		healthT=health80;
	}else if(hp>60){
		healthT=health70;
	}else if(hp>50){
		healthT=health60;
	}else if(hp>40){
		healthT=health50;
	}else if(hp>30){
		healthT=health40;
	}else if(hp>20){
		healthT=health30;
	}else if(hp>10){
		healthT=health20;
	}else if(hp>0){
		healthT=health10;
	}else{
		healthT=health0;
	}
	
}