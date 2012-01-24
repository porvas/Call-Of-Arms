//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.


var hit : RaycastHit;
var ray : Ray;
var selectedWeapon: GameObject;
var lastSelectedWeapon : GameObject;
var playerWeapons : playerweapons;
var pickupDistance = 6;

function Start (){
	playerWeapons = this.GetComponent("playerweapons");
}
function Update () {
	ray = transform.camera.ScreenPointToRay (Vector3(Screen.width/2.0,Screen.height/2.0,0));
	var hitWeapon = false;
	if(Physics.Raycast(ray,hit,pickupDistance)) {
		if(hit.collider.gameObject.tag == "pickupAble") {
			hitWeapon = true;
			selectedWeapon = hit.collider.gameObject;
			var isEquipped : boolean = CheckWeapons();
			if(lastSelectedWeapon != selectedWeapon) {
				if(lastSelectedWeapon != null) 
					lastSelectedWeapon.GetComponent("SelectableWeapon").unSelect();
				lastSelectedWeapon = selectedWeapon;
				selectedWeapon.GetComponent("SelectableWeapon").select(isEquipped);
			}
		}
	}
	if(!hitWeapon){
		if(lastSelectedWeapon != null) 
			lastSelectedWeapon.GetComponent("SelectableWeapon").unSelect();
		selectedWeapon = null;
		lastSelectedWeapon = null;
	}

	if(selectedWeapon && Input.GetButtonDown("Pickup")){
		if(gunscript.takingOut)
			return;
		for (var i : int=0 ;i<playerWeapons.weapons.length; i++){
			if(playerWeapons.weapons[i] == selectedWeapon.GetComponent(SelectableWeapon).weapon)
				return;
		}
			
		playerWeapons.weapons[playerWeapons.selectedWeapon].gameObject.BroadcastMessage("deselectWeapon");
		playerWeapons.weapons[playerWeapons.selectedWeapon] = selectedWeapon.GetComponent(SelectableWeapon).weapon;
		playerWeapons.SelectWeapon(playerWeapons.selectedWeapon);
		selectedWeapon.GetComponent("SelectableWeapon").select(true);
	}
}
function CheckWeapons () : boolean {
	for (var i : int=0 ;i<playerWeapons.weapons.length; i++)	{
		if (playerWeapons.weapons[i] == selectedWeapon.GetComponent("SelectableWeapon").weapon)
			return true;
	}
	return false;

}