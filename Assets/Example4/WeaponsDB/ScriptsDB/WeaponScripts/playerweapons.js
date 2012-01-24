//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.

var localPlayer:boolean=false;
var weapons : GameObject[]; 
static var autoFire : boolean;
private var canKickback : boolean = true;
var selectedWeapon : int;
var canSwitchWeapon:boolean=true;
var chatScript:FPSChat4;
function Start () {
	chatScript = GameObject.Find("Generalscripts").GetComponent(FPSChat4) as FPSChat4;
}

function LateUpdate () {
	if(!localPlayer) return;
	if(Input.GetButtonDown ("Fire1") && canKickback){
		BroadcastMessage("KickbackZ");
		canKickback = false;
	} else if(Input.GetButtonUp("Fire1")){
		BroadcastMessage("ceaseFiring");
		canKickback = true;
	}
	if (!Input.GetButton ("Fire1"))
		BroadcastMessage("Cooldown");


}

function Update () {
    if(!localPlayer) return;
    if(transform.parent.GetComponent("PlayerScript").dead) return;
    if (!Screen.lockCursor|| chatScript.usingChat)return;
    
	// Did the user press fire?
	if (Input.GetButton ("Fire1") && autoFire){
		BroadcastMessage("Fire");
	} else if(Input.GetButtonDown ("Fire1")){
		BroadcastMessage("Fire");
	} 	
	if (Input.GetButton ("Fire2") && autoFire){
		BroadcastMessage("Fire2");
	} else if(Input.GetButtonDown ("Fire2")){
		BroadcastMessage("Fire2");
	} 	

	
	if(!aimmode.canSwitchWeaponAim)
		return;
		
	if (Input.GetKeyDown("1") && weapons.length >= 1&&canSwitchWeapon) {
		if(!weapons[0].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(0);
			selectedWeapon = 0;

		}
	} else if (Input.GetKeyDown("2") && weapons.length >= 2&&canSwitchWeapon) {
		if(!weapons[1].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(1);
			selectedWeapon = 1;			
		}
	} else if (Input.GetKeyDown("3") && weapons.length >= 3&&canSwitchWeapon) {
		if(!weapons[2].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(2);
			selectedWeapon = 2;
		}
	} else if (Input.GetKeyDown("4") && weapons.length >= 4&&canSwitchWeapon) {
		if(!weapons[3].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(3);
			selectedWeapon = 3;
		}
	} else if (Input.GetKeyDown("5") && weapons.length >= 5&&canSwitchWeapon) {
		if(!weapons[4].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(4);
			selectedWeapon = 4;
		}
	} else if (Input.GetKeyDown("6") && weapons.length >= 6&&canSwitchWeapon) {
		if(!weapons[5].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(5);
			selectedWeapon = 5;
		}
	} else if (Input.GetKeyDown("7") && weapons.length >= 7&&canSwitchWeapon) {
		if(!weapons[6].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(6);
			selectedWeapon = 6;
		}
	} else if (Input.GetKeyDown("8") && weapons.length >= 8&&canSwitchWeapon) {
		if(!weapons[7].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(7);
			selectedWeapon = 7;
		}
	} else if (Input.GetKeyDown("9") && weapons.length >= 9&&canSwitchWeapon) {
		if(!weapons[8].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(8);
			selectedWeapon = 8;
		}
	} else if (Input.GetKeyDown("0") && weapons.length >= 10&&canSwitchWeapon) {
		if(!weapons[9].gameObject.GetComponent("weaponlocking").isLocked){
			SelectWeapon(9);
			selectedWeapon = 9;
		}
	}		
	
	
		

		if (Input.GetButtonDown("Reload"))
			BroadcastMessage("Reload");


}

function SelectWeapon (index : int) {
	
	if(gunscript.takingOut)
		return;
	for (var i : int=0 ;i<weapons.length; i++)	{
//			 Activate the selected weapon
		if (i == index){
			weapons[i].gameObject.BroadcastMessage("selectWeapon");
			EnableNetWeapon2(i);
			//networkView.RPC("EnableNetWeapon2",RPCMode.All,i);
			networkView.RPC("EnableNetWeapon",RPCMode.Others,i);

		// Deactivate all other weapons
		}else{
			weapons[i].gameObject.BroadcastMessage("deselectWeapon");
		}
		
	}
}function FullAuto () {
	autoFire = true;
}
function SemiAuto () {
	autoFire = false;
}
function deactivateWeapons(){
	for (var i : int=0 ;i<weapons.length; i++)	{
		weapons[i].gameObject.BroadcastMessage("deselectWeapon");
	}
}
function setWeapon (gun : GameObject, element : int){
	if(gunscript.takingOut)
		return;
	weapons[element] = gun;
}

@RPC
function EnableNetWeapon(i:int){
	if (i==0) gun="MachineGun";
	else if (i==1) gun="Shotgun";
	else if (i==2) gun="Sniper";
	var soldierPelvis:GameObject=transform.parent.Find("Soldier/Pelvis").gameObject;
	var gunsM=soldierPelvis.GetComponentsInChildren(MeshRenderer);
	for (var child:MeshRenderer in gunsM){
	
		if (child.gameObject.name==gun)
			child.enabled=true;
		else
			child.enabled=false;
	
	}




}
@RPC
function EnableNetWeapon2(i:int){

	//if (networkView.isMine){
		var gos = weapons[i].GetComponentsInChildren(Renderer);
		for( var go : Renderer in gos){
			if (go.name != "muzzle_flash")
			go.enabled=true;
		}
	//}
}