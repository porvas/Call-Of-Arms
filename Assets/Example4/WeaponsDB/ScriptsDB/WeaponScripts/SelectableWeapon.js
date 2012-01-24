//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.


private var selected : boolean = false;
var highlightEffects : GameObject;
var weapon : GameObject;
private var weaponInfo : weaponInfo;
var isEquipped : boolean = false;

function Start (){
	weaponInfo = weapon.GetComponent("weaponInfo");
}
function select(a : boolean) {
	if(highlightEffects){
		highlightEffects.SetActiveRecursively(true);
	}
	selected = true;
	isEquipped = a;
}

function unSelect() {
	if(highlightEffects){
		highlightEffects.SetActiveRecursively(false);
	}
	selected = false;
}

function OnGUI () {
	GUI.skin.box.wordWrap = true;
	if(selected){
		var s : String = "(Tab) to Select";
		if(isEquipped){
			s = "(Already Equipped)";
		}
			
		GUI.BeginGroup(Rect(135, 90,160, 110));
			GUI.Box(Rect(0, 0,155, 105), weaponInfo.gunName + "\n \n" + weaponInfo.gunDescription + "\n" + s);
			
		GUI.EndGroup();
	}
}