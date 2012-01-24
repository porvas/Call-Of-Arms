//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.


var length1 : float;
var width1 : float;
private var textu : Texture;
private var lineStyle : GUIStyle;
var debug : boolean = false;

var crosshairTexture : Texture2D;
var friendTexture : Texture2D;
var foeTexture : Texture2D;
var otherTexture : Texture2D;
var playerScript:PlayerScript;
var crosshairRange : int = 200;
var hisMode:int;
private var hisPlayerScript:PlayerScript;
private var gameSetupScript : GameSetup;

private var crosshair : boolean = true;

function Start () {
	playerScript=this.transform.parent.gameObject.GetComponent(PlayerScript);
	crosshair = true;
	lineStyle = GUIStyle();
	lineStyle.normal.background = crosshairTexture;
	gameSetupScript = GameObject.Find("Generalscripts").GetComponent(GameSetup) as GameSetup;
}

//Right now this script fires a raycast every frame
//This might impact performance, and is an area to consider when optimizing
function Update(){
	
		var hit : RaycastHit;
		var direction = transform.TransformDirection(Vector3(0,0,1));
		if(Physics.Raycast(transform.position, direction, hit, crosshairRange)){
			if(hit.collider && hit.transform.gameObject.GetComponent(CrosshairColor) != null){
				if (GameSettings.playMode==0)ChangeColor("Foe");
				else{
//					if (hit.transform.gameObject.name=="NeckHead")
//						hisPlayerScript=hit.transform.parent.parent.parent.parent.parent.parent.parent.gameObject.GetComponent(PlayerScript);
//					else 
					hisPlayerScript=hit.transform.root.gameObject.GetComponent(PlayerScript);
						
					var hisPlayerID:int=hisPlayerScript.thisPlayerID;
					//Debug.Log("HIT COLLIDER: "+hit.transform.gameObject.name);
					//Debug.Log("HIS NET PLAYER ID :"+hisPlayerID);
					for(var entry : FPSPlayerNode in  gameSetupScript.playerList as List.<FPSPlayerNode>){
						if (entry.playerID==hisPlayerID){
							hisMode=entry.mode;	
						}
					}
					//Debug.Log("HIS MODE :"+hisMode);
					//Debug.Log("MY MODE :"+playerScript.thisMode);
					if(hisMode == playerScript.thisMode ){
						ChangeColor("Friend");
					}else if(hisMode != playerScript.thisMode){
						ChangeColor("Foe");
					}else {
						ChangeColor("Other");
					}
				}
	
			}else{
				ChangeColor(""); //Any string not recognized by ChangeColor is the default color
			}
		}else{
			ChangeColor("");
		}
		
	
}

function OnGUI () {
	if (playerScript.inBetweenGames||playerScript.dead) return;
	distance1 = gunscript.crosshairSpread;
	if(!(distance1 > (Screen.height/2)) &&(crosshair || debug)){
	
		GUI.Box(Rect((Screen.width - distance1)/2 - length1, (Screen.height - width1)/2, length1, width1), textu, lineStyle);
		GUI.Box(Rect((Screen.width + distance1)/2, (Screen.height- width1)/2, length1, width1), textu, lineStyle);
	
		GUI.Box(Rect((Screen.width - width1)/2, (Screen.height - distance1)/2 - length1, width1, length1), textu, lineStyle);
		GUI.Box(Rect((Screen.width - width1)/2, (Screen.height + distance1)/2, width1, length1), textu, lineStyle);
	}
}

function ChangeColor(targetStatus : String){
	if(targetStatus == "Friend"){
		lineStyle.normal.background = friendTexture;
	}else if(targetStatus == "Foe"){
		lineStyle.normal.background = foeTexture;
	}else if (targetStatus == "Other"){
		lineStyle.normal.background = otherTexture;
	}else{
		lineStyle.normal.background = crosshairTexture;
	}
}

function aiming(){
	crosshair=false;
}
function normalSpeed(){
	crosshair=true;
}
function normalSpeed1(){
	crosshair=true;
}
function sprinting(){
	crosshair=false;
}
