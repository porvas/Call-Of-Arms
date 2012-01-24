/* 
*  This file is part of the Unity networking tutorial by M2H (http://www.M2H.nl)
*  The original author of this code is Mike Hergaarden, even though some small parts 
*  are copied from the Unity tutorials/manuals.
*  Feel free to use this code for your own projects, drop us a line if you made something exciting! 
*/
#pragma strict
#pragma implicit
#pragma downcast

var ammoGO : GameObject;
var powerupGO : GameObject;
var hpGO : GameObject;

public var powerupText : GUIText;
var respawnTimePickup : int  =30;


private var isActive : boolean = false;
private var powerUps = new Array();
private var currentItem : int =0;
private var currentGO : GameObject;

function Start(){
	powerupText = GameObject.Find("powerupGUIText").GetComponent(GUIText);
	powerupText.text="";
	
	powerUps.Add("Invincible");
	powerUps.Add("hp");
	powerUps.Add("ammo");
	
	hpGO.SetActiveRecursively(false);
	ammoGO.SetActiveRecursively(false);
	powerupGO.SetActiveRecursively(false);
	
	NewPickup(0, Random.Range(0,powerUps.length)); 
}

function OnTriggerEnter (other : Collider) {
	var object =  other.gameObject;
	var playerScript : PlayerScript = object.GetComponent(PlayerScript);
	
	if(isActive){
		Pickup(object, playerScript);
	}
}

function Pickup(object : GameObject, playerScript : PlayerScript){
	if(!playerScript.localPlayer){
		//Only the local player can pickup his own item
		return;
	}

	var pickedUp : String =powerUps[currentItem];
	
	var playersNetworkView : NetworkView = object.GetComponent(NetworkView);
	
	if(pickedUp=="Invincible"){		
		DisplayMessage("INVINCIBLE!", 10);
		playersNetworkView.RPC("StartInvincibility",RPCMode.All); 		
	}else if(pickedUp=="hp"){
		var newHP=playerScript.hp+50;
		if(newHP>100){
			newHP=100;
		}
		playersNetworkView.RPC("setHP",RPCMode.All, newHP);
 		
		DisplayMessage("GOT EXTRA HP!",2);
		
	}else if(pickedUp=="ammo"){
		var gun : Machinegun = object.transform.Find("CrateCamera/Weapon").GetComponent("Machinegun");	
		gun.clips+=3;
		gun.GetBulletsLeft();
		
		DisplayMessage("GOT EXTRA AMMO!",2);
		
	}else{
		Debug.LogError("ERROR: UNKNOWN POWERUP: "+pickedUp);
	}
	
	//deactivates current pickup and will spawn a new one
	networkView.RPC("NewPickup",RPCMode.All, respawnTimePickup,  Random.Range(0,powerUps.length)); 
	
}

@RPC
function NewPickup(seconds: int, newItem: int){
	//Disable the pickup, reactive it after X seconds
	if(currentGO){
		currentGO.SetActiveRecursively(false);
	}
	isActive=false;
	
	yield new WaitForSeconds (seconds);
	
	currentItem=newItem; 
	if(powerUps[currentItem]=="hp"){
		currentGO = hpGO;
	}else if(powerUps[currentItem]=="ammo"){
		currentGO = ammoGO;
	}else{
		currentGO = powerupGO;
	}	
	isActive=true;
	currentGO.SetActiveRecursively(true);
}

function DisplayMessage(message : String, seconds : int){
	powerupText.text=message;
	yield WaitForSeconds(seconds);
	if(powerupText.text==message){
		powerupText.text="";		
	}
}



