//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//Licensed under a Creative Commons Attribution-Share Alike 3.0 United States License.
//(http://creativecommons.org/licenses/by-sa/3.0/us/)
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.


//NOTE: Due to the way decals are currently applied, some decals will look better than others
//Larger decals are likely to run into problems on smaller or irregularly shaped targets
//Because of this, launcher decals may look strange in some cases.

enum decalSets {a, b, c, d, e}
var decalSet = decalSets.a;

var bulletDecal0 : GameObject;
var launcherDecal0 : GameObject;
var laserDecal0 : GameObject;

var bulletDecal1 : GameObject;
var launcherDecal1 : GameObject;
var laserDecal1 : GameObject;

var bulletDecal2 : GameObject;
var launcherDecal2 : GameObject;
var laserDecal2 : GameObject;

var bulletDecal3 : GameObject;
var launcherDecal3 : GameObject;
var laserDecal3 : GameObject;

var bulletDecal4 : GameObject;
var launcherDecal4 : GameObject;
var laserDecal4 : GameObject;

var localMax = 30;
static var decalMax = 30;

static var decalArray = new Array();


var laserInterval : float = .07;
var nextTime : float = 0;


function Start(){
	DecalManager.decalMax = localMax;
	DecalManager.decalArray.Clear(); //Is this needed?
}

function Update () {
	if(DecalManager.decalArray.length > decalMax){
		Destroy(DecalManager.decalArray.Shift());
	}
}

//This isn't currently called, but you can call it if you want to
//like in a menu or something when changing graphics settings.
function newMax(){
	DecalManager.decalMax = localMax;
}