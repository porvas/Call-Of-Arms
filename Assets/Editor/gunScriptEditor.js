//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.


@CustomEditor (gunscript)
class gunScriptEditor extends Editor {

var displayGun : boolean = false;
var gunDisplayed : boolean = false;
var gunTipo = gunTypes.launcher;



	function OnInspectorGUI () {
		EditorGUIUtility.LookLikeInspector();
		EditorGUILayout.BeginVertical();
		target.localPlayer = EditorGUILayout.Toggle("  LocalPlayer", target.localPlayer);
		target.gunType = EditorGUILayout.EnumPopup("  Gun Type: ", target.gunType);
		gunTipo = target.gunType;
		
//		Gun-Specific Variables
		if(gunTipo == gunTypes.melee){
			target.shotCount = 0;
			target.fireRate = EditorGUILayout.FloatField("  Attack Rate:  ", target.fireRate);
			target.delay = EditorGUILayout.FloatField("  Attack Length:  ", target.delay);
			target.reloadTime = EditorGUILayout.FloatField("  Recovery Time:  ", target.reloadTime);
			target.isPrimaryWeapon = EditorGUILayout.Toggle("  Primary Weapon:  ", target.isPrimaryWeapon);
			if(target.isPrimaryWeapon){
				target.secondaryWeapon = EditorGUILayout.ObjectField("  Secondary Weapon: ", target.secondaryWeapon,  gunscript);
			}else{
				target.secondaryInterrupt = EditorGUILayout.Toggle("  Secondary Interrupt: ", target.secondaryInterrupt);
				target.secondaryFire = EditorGUILayout.Toggle("  Is Alternate Fire: ", target.secondaryFire);
		}
			target.ammoPerClip = 1;
			target.infiniteAmmo = true;
			target.swayRate = EditorGUILayout.FloatField("  Sway Rate:  ", target.swayRate);
			target.swayFactor = EditorGUILayout.Vector3Field("  Sway Factor: ", target.swayFactor);
			target.sharesAmmo = false; 
			target.damage = 0;
			target.force = 0;
		
	}

		if(gunTipo == gunTypes.gun){
			EditorGUILayout.Separator();

			target.range = EditorGUILayout.FloatField("  Range: ", target.range);
			target.force = EditorGUILayout.FloatField("  Force: ", target.force);
			target.damage = EditorGUILayout.FloatField("  Damage: ", target.damage);
			target.shotCount = EditorGUILayout.IntField("  Shot Count: ", target.shotCount);
			target.burstFire = EditorGUILayout.Toggle("  Burst Fire: ", target.burstFire);		
			if(target.burstFire){	
				target.burstCount = EditorGUILayout.IntField("  Burst Count: ", target.burstCount);
				target.burstTime = EditorGUILayout.FloatField("  Burst Time: ", target.burstTime);
			}
			target.autoFire = EditorGUILayout.Toggle("  Full Auto: ", target.autoFire);
			if(!target.autoFire && !target.burstFire){
				target.fireAnim = EditorGUILayout.Toggle("  Morph Fire Anim to Fit: ", target.fireAnim);
			}
			target.fireRate = EditorGUILayout.FloatField("  Fire Rate: ", target.fireRate);
			target.delay = EditorGUILayout.FloatField("  Delay: ", target.delay);
			target.penetrateVal = EditorGUILayout.FloatField("  Penetration Level: ", target.penetrateVal);
			target.shellEjection = EditorGUILayout.Toggle("  Shell Ejection: ", target.shellEjection);		
			if(target.shellEjection){
				target.shell = EditorGUILayout.ObjectField("  Shell: ", target.shell, GameObject);
				target.ejectorPosition = EditorGUILayout.ObjectField("  Ejector Position: ", target.ejectorPosition,  GameObject);
			}

			EditorGUILayout.Separator();

			target.standardSpread = EditorGUILayout.FloatField("  Standard Spread: ", target.standardSpread);
			target.standardSpreadRate = EditorGUILayout.FloatField("  Spread Rate: ", target.standardSpreadRate);
			target.aimSpread = EditorGUILayout.FloatField("  Aim Spread: ", target.aimSpread);
			target.aimSpreadRate = EditorGUILayout.FloatField("  Aim Spread Rate: ", target.aimSpreadRate);
			target.crouchSpreadModifier = EditorGUILayout.FloatField("  Crouch Spread Modifier: ", target.crouchSpreadModifier);
			target.moveSpreadModifier = EditorGUILayout.FloatField("  Move Spread Modifier: ", target.moveSpreadModifier);
			target.maxSpread = EditorGUILayout.FloatField("  Maximum Spread: ", target.maxSpread);
			target.spDecRate = EditorGUILayout.FloatField("  Spread Decrease Rate: ", target.spDecRate);


			EditorGUILayout.Separator();
		
		} else if(gunTipo == gunTypes.launcher){

			EditorGUILayout.Separator();
			target.shellEjection = false;
			target.projectile = EditorGUILayout.ObjectField("  Projectile: ", target.projectile,  Rigidbody);
			target.launchPosition = EditorGUILayout.ObjectField("  Launch Position: ", target.launchPosition,  GameObject);
			target.burstFire = EditorGUILayout.Toggle("  Burst Fire: ", target.burstFire);		
			if(target.burstFire){	
				target.burstCount = EditorGUILayout.IntField("  Burst Count: ", target.burstCount);
				target.burstTime = EditorGUILayout.FloatField("  Burst Time: ", target.burstTime);
			}
			if(!target.autoFire && !target.burstFire){
				target.fireAnim = EditorGUILayout.Toggle("  Morph Fire Anim to Fit: ", target.fireAnim);
			}


			target.projectileCount = EditorGUILayout.FloatField("  Projectile Count: ", target.projectileCount);
			target.initialSpeed = EditorGUILayout.FloatField("  Initial Speed: ", target.initialSpeed);
			target.autoFire = EditorGUILayout.Toggle("  Full Auto: ", target.autoFire);
			target.fireRate = EditorGUILayout.FloatField("  Fire Rate: ", target.fireRate);
			target.delay = EditorGUILayout.FloatField("  Delay: ", target.delay);

			
			EditorGUILayout.Separator();

		} else if(gunTipo == gunTypes.sustained){
			target.autoFire = true;
			target.standardSpread = 0;
			target.shellEjection = false;

			EditorGUILayout.Separator();

			target.force = EditorGUILayout.FloatField("  Force: ", target.force);
			target.damagePerSecond = EditorGUILayout.FloatField("  Damage Per Second: ", target.damagePerSecond);
			target.ammoPerSecond = EditorGUILayout.FloatField("  Ammo Per Second: ", target.ammoPerSecond);
			target.laserRange = EditorGUILayout.FloatField("  Range: ", target.laserRange);
			target.laserGFX = EditorGUILayout.ObjectField("  Laser GFX: ", target.laserGFX, GameObject);
			target.kickbackZ = EditorGUILayout.FloatField("  Kickback (Z-axis): ", target.kickbackZ);

			EditorGUILayout.Separator();
			
		}
		if(gunTipo != gunTypes.melee){
		var swayFactor : Vector3;
			target.isPrimaryWeapon = EditorGUILayout.Toggle("  Is Primary Weapon: ", target.isPrimaryWeapon);
		if(target.isPrimaryWeapon){
			target.secondaryWeapon = EditorGUILayout.ObjectField("  Secondary Weapon: ", target.secondaryWeapon,  gunscript);
		} else {
			target.secondaryInterrupt = EditorGUILayout.Toggle("  Secondary Interrupt: ", target.secondaryInterrupt);
			target.secondaryFire = EditorGUILayout.Toggle("  Is Alternate Fire: ", target.secondaryFire);
		}
			
		target.muzzleFlash = EditorGUILayout.ObjectField("  Muzzle Flash: ", target.muzzleFlash,  Renderer);
		target.muzzleFlashNetwork = EditorGUILayout.ObjectField("  Muzzle Flash Net: ", target.muzzleFlashNetwork,  Renderer);
		target.progressiveReload = EditorGUILayout.Toggle("  Progressive Reloading: ", target.progressiveReload);
		if(!target.progressiveReload){
			target.ammoType = EditorGUILayout.EnumPopup("  Ammo Type: ", target.ammoType);
		}
		target.ammoPerClip = EditorGUILayout.IntField("  Ammo Per Clip: ", target.ammoPerClip);
		target.sharesAmmo = EditorGUILayout.Toggle("  Shares Ammo:  ", target.sharesAmmo);
		if(target.sharesAmmo){
			EditorGUILayout.Separator();
			//var ammoManager : AmmoManager = target.managerObject.GetComponent(AmmoManager);
			//Not sure why the above causes errors...
			target.managerObject = GameObject.FindWithTag("Manager");
		//	var managerObject = GameObject.FindWithTag("Manager");
			target.ammoSetUsed = EditorGUILayout.Popup("  Ammo Set Used:  ", target.ammoSetUsed, target.managerObject.GetComponent(AmmoManager).namesArray);
			
target.managerObject.GetComponent(AmmoManager).namesArray[target.ammoSetUsed] = EditorGUILayout.TextField("  Rename Ammo Set:", target.managerObject.GetComponent(AmmoManager).namesArray[target.ammoSetUsed]);

			
		target.managerObject.GetComponent(AmmoManager).clipsArray[target.ammoSetUsed] = EditorGUILayout.IntField("  Clips: ", target.managerObject.GetComponent(AmmoManager).clipsArray[target.ammoSetUsed]);
		
		target.managerObject.GetComponent(AmmoManager).maxClipsArray[target.ammoSetUsed] = EditorGUILayout.IntField("  Max Clips: ", target.managerObject.GetComponent(AmmoManager).maxClipsArray[target.ammoSetUsed]);
		
		target.managerObject.GetComponent(AmmoManager).infiniteArray[target.ammoSetUsed] = EditorGUILayout.Toggle("  Infinite Ammo: ", target.managerObject.GetComponent(AmmoManager).infiniteArray[target.ammoSetUsed]);
		EditorGUILayout.Separator();

		}else{
			target.clips = EditorGUILayout.IntField("  Clips: ", target.clips);
			target.maxClips = EditorGUILayout.IntField("  Max Clips: ", target.maxClips);
			target.infiniteAmmo = EditorGUILayout.Toggle("  Infinite Ammo: ", target.infiniteAmmo);
		}
		if(target.progressiveReload){
			target.reloadInTime = EditorGUILayout.FloatField("  Enter Reload Time: ", target.reloadInTime);
			target.reloadOutTime = EditorGUILayout.FloatField("  Exit Reload Time: ", target.reloadOutTime);
		}
		target.reloadTime = EditorGUILayout.FloatField("  Reload Time: ", target.reloadTime);
		target.waitforReload = EditorGUILayout.FloatField("  Wait For Reload: ", target.waitforReload);
		target.gunActive = EditorGUILayout.Toggle("  Gun Active: ", target.gunActive);
		target.kickbackAngle = EditorGUILayout.FloatField("  Kickback (Angle): ", target.kickbackAngle);
		target.kickbackZ = EditorGUILayout.FloatField("  Kickback (Z-axis): ", target.kickbackZ);
		target.swayRate = EditorGUILayout.FloatField("  Sway Rate: ", target.swayRate);
		target.swayFactor = EditorGUILayout.Vector3Field("  Sway Factor: ", target.swayFactor);
	
		}

			
		EditorGUILayout.EndVertical();
		EditorGUILayout.Separator();	
		if (GUILayout.Button(new GUIContent("Toggle Active", "Toggle whether or not the gun is active"),"miniButton")){
			if(!gunDisplayed){
				gunDisplayed = true;
				target.selectWeapon();
			} else if (gunDisplayed){
				gunDisplayed = false;
				target.deselectWeapon();
			}
		}
		EditorGUILayout.Separator();
	}
}