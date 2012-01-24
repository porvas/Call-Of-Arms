//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.

//enum decalSets {a, b, c, d, e}
var decalSet = decalSets.a;

private var decalManagerScript : DecalManager;

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


function Awake(){
	decalManagerScript = FindObjectOfType(DecalManager);
	
	bulletDecal0 = decalManagerScript.bulletDecal0;
	bulletDecal1 = decalManagerScript.bulletDecal1;
	bulletDecal2 = decalManagerScript.bulletDecal2;
	bulletDecal3 = decalManagerScript.bulletDecal3;
	bulletDecal4 = decalManagerScript.bulletDecal4;
	launcherDecal0 = decalManagerScript.launcherDecal0;
	launcherDecal1 = decalManagerScript.launcherDecal1;
	launcherDecal2 = decalManagerScript.launcherDecal2;
	launcherDecal3 = decalManagerScript.launcherDecal3;
	launcherDecal4 = decalManagerScript.launcherDecal4;
	laserDecal0 = decalManagerScript.laserDecal0;
	laserDecal1 = decalManagerScript.laserDecal1;
	laserDecal2 = decalManagerScript.laserDecal2;
	laserDecal3 = decalManagerScript.laserDecal3;
	laserDecal4 = decalManagerScript.laserDecal4;
}

function ApplyDecal(hitInfo : Array){
	var clone : GameObject;
	if(decalSet == decalSets.a && bulletDecal0 != null){
		clone = Instantiate(bulletDecal0, hitInfo[0], hitInfo[1]);
	}else if(decalSet == decalSets.b && bulletDecal1 != null){
		clone = Network.Instantiate(bulletDecal1, hitInfo[0], hitInfo[1],0);
	}else if(decalSet == decalSets.c && bulletDecal2 != null){
		clone = Instantiate(bulletDecal2, hitInfo[0], hitInfo[1]);
	}else if(decalSet == decalSets.d && bulletDecal3 != null){
		clone = Instantiate(bulletDecal3, hitInfo[0], hitInfo[1]);
	}else if(decalSet == decalSets.e && bulletDecal4 != null){
		clone = Instantiate(bulletDecal4, hitInfo[0], hitInfo[1]);
	}
	if(clone != null){
		clone.transform.localPosition += .05*hitInfo[3];
		clone.transform.parent = hitInfo[2];
	}
	DecalManager.decalArray.Add(clone);
}

function ApplyLauncherDecal(hitInfo : Array){
	var clone : GameObject;
	if(decalSet == decalSets.a && launcherDecal0 != null){
		clone = Instantiate(launcherDecal0, hitInfo[0], hitInfo[1]);
	}else if(decalSet == decalSets.b && launcherDecal1 != null){
		clone = Instantiate(launcherDecal1, hitInfo[0], hitInfo[1]);
	}else if(decalSet == decalSets.c && launcherDecal2 != null){
		clone = Instantiate(launcherDecal2, hitInfo[0], hitInfo[1]);
	}else if(decalSet == decalSets.d && launcherDecal3 != null){
		clone = Instantiate(launcherDecal3, hitInfo[0], hitInfo[1]);
	}else if(decalSet == decalSets.e && launcherDecal4 != null){
		clone = Instantiate(launcherDecal4, hitInfo[0], hitInfo[1]);
	}
	clone.transform.localPosition += .05*hitInfo[3];
	clone.transform.parent = hitInfo[2];
	DecalManager.decalArray.Add(clone);
}

function ApplyLaserDecal(hitInfo : Array){
	var clone : GameObject;
	if(Time.time > decalManagerScript.nextTime){
		if(decalSet == decalSets.a && laserDecal0 != null){
			clone = Instantiate(laserDecal0, hitInfo[0], hitInfo[1]);
		}else if(decalSet == decalSets.b && laserDecal1 != null){
			clone = Instantiate(laserDecal1, hitInfo[0], hitInfo[1]);
		}else if(decalSet == decalSets.c && laserDecal2 != null){
			clone = Instantiate(laserDecal2, hitInfo[0], hitInfo[1]);
		}else if(decalSet == decalSets.d && laserDecal3 != null){
			clone = Instantiate(laserDecal3, hitInfo[0], hitInfo[1]);
		}else if(decalSet == decalSets.e && laserDecal4 != null){
			clone = Instantiate(laserDecal4, hitInfo[0], hitInfo[1]);
		}
		if(clone != null){
			clone.transform.localPosition += .05*hitInfo[3];
			clone.transform.parent = hitInfo[2];
			DecalManager.decalArray.Add(clone);
			nextTime = (Time.time + decalManagerScript.laserInterval);
		}
	}
}