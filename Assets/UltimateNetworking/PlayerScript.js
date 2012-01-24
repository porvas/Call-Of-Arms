

var thisName : String = "Bugged name";
private var rigidBodyView : NetworkView;
//var netRigid:NetworkRigidbody;
var hp : int = 100;
var theScoreBoard : scoreBoard;
var localPlayer : boolean = false;
var ragdoll:GameObject;
private var coloredUntill : float;
private var invincible : boolean;
var ragdollID:NetworkViewID;
//MY VARIABLES
var skin:GUISkin;
var inBetweenGames:boolean=false;
private var count:int=0;
private var gameDuration:int=150;
private var betweenDuration:int=15;
var timeLeft:int=0;
private var weaponNameInUse:String;

var chatScript : FPSChat4;
var gameSetupScript:GameSetup;
var thisMode:int;
var thisPlayerID:int;
private var playerID:int;
var hit_sound:AudioClip[];
var dead:boolean=false;
var deadCamera:Camera;
var mainCamera:Camera;
var weaponCamera:Camera;
function Awake(){
	deadCamera=transform.Find("deadCamera").GetComponent(Camera);
	mainCamera=transform.Find("Main Camera").GetComponent(Camera);
	weaponCamera=transform.Find("Weapon Camera").GetComponent(Camera);
	theScoreBoard=GameObject.Find("Generalscripts").GetComponent(scoreBoard) as scoreBoard;
	gameSetupScript = GameObject.Find("Generalscripts").GetComponent(GameSetup) as GameSetup;
	chatScript = GameObject.Find("Generalscripts").GetComponent(FPSChat4) as FPSChat4;
	gameDuration=GameSettings.hostDuration;
}

@RPC
function updateTimer(time:int){
	timeLeft=time;
}

function ResetTimer(gameDuration:int){
		timeLeft=gameDuration;
		InvokeRepeating ("game_Countdown", 1.0, 1.0);
		inBetweenGames=false;
}
function game_Countdown () {
	networkView.RPC("updateTimer",RPCMode.Others,timeLeft);
    if (--timeLeft == 0) { 
    	CancelInvoke ("game_Countdown");
    	
   		inBetweenGames=true;
    	networkView.RPC("EndOfMatch",RPCMode.All,true);
    	timeLeft=betweenDuration;
    	InvokeRepeating ("between_Countdown", 1.0, 1.0);
    }
}
function between_Countdown () {
	networkView.RPC("updateTimer",RPCMode.Others,timeLeft);
    if (--timeLeft == 0) { 
    	CancelInvoke ("between_Countdown");
    	inBetweenGames=false;
    	networkView.RPC("EndOfMatch",RPCMode.All,false);
    	ResetTimer(gameDuration);
    	ResetGame();
    }
}
function ResetGame(){
	networkView.RPC("ResetScores",RPCMode.All);
	networkView.RPC("RespawnPlayers",RPCMode.All);
}

@RPC
function ResetScores(){
    for (var playerInstance : FPSPlayerNode in gameSetupScript.playerList as List.<FPSPlayerNode>) {
		playerInstance.kills=0;
		playerInstance.deaths=0;
	}
}
@RPC
function EndOfMatch (end:boolean) {
	if(GameObject.FindGameObjectWithTag("me")) {
		var blurs=GameObject.FindGameObjectWithTag("me").GetComponentsInChildren(BlurEffect);
		var PlayerS:PlayerScript=GameObject.FindGameObjectWithTag("me").GetComponent(PlayerScript);
		PlayerS.inBetweenGames=end;
	}
	for (var effect:BlurEffect in blurs) effect.enabled=end; 
	
	theScoreBoard.inBetweenGames=end;
	chatScript.inBetweenGames=end;
	Screen.lockCursor=!end;
	
}
function OnNetworkInstantiate (msg : NetworkMessageInfo) {
	
	// This is our own player
	if (networkView.isMine)
	{
		if (Network.isServer){
			ResetTimer(gameDuration);
		}
		this.gameObject.tag="me";
		localPlayer=true;
		
	    for(var entry : FPSPlayerNode in gameSetupScript.playerList as List.<FPSPlayerNode>){
			if (entry.networkPlayer==Network.player){
				name+="player"+entry.playerID;
				thisPlayerID=entry.playerID;
				thisMode=entry.mode;
				thisName=entry.playerName;
			}
		}
		networkView.RPC("setName", RPCMode.Others, thisName,thisPlayerID,thisMode);
		//WEAPON CAMERA AND WEAPONS LOCALPLAYERS
		var weaponcam:playerweapons=transform.Find("Weapon Camera").GetComponent("playerweapons");
		weaponcam.localPlayer=true;
		var weaponaudio:AudioSource=transform.Find("Weapon Camera/MachineGun").GetComponent(AudioSource);
		weaponaudio.panLevel=0;
		weaponaudio=transform.Find("Weapon Camera/Sniper").GetComponent(AudioSource);
		weaponaudio.panLevel=0;
		weaponaudio=transform.Find("Weapon Camera/Shotgun").GetComponent(AudioSource);
		weaponaudio.panLevel=0;	
		
		//ENABLE localPlayer VARIABLES ON WEAPONS
		var mg:gunscript=transform.Find("Weapon Camera/MachineGun").GetComponent("gunscript");
		var sh:gunscript=transform.Find("Weapon Camera/Shotgun").GetComponent("gunscript");
		var snip:gunscript=transform.Find("Weapon Camera/Sniper").GetComponent("gunscript");
		mg.localPlayer=true;
		sh.localPlayer=true;
		snip.localPlayer=true;

		var weaponCam:Transform=transform.Find("Weapon Camera");
		for (var child:Transform in weaponCam){
			
			if (child.gameObject.name!="Sparks"){
				var scr:gunscript=child.gameObject.GetComponent("gunscript");
				scr.localPlayer=true;
			}
		}

	    var layerID=thisPlayerID+10;

		SetLayerRecursively(weaponCam.gameObject,layerID);
		var weaponCamMask:Camera=weaponCamera.GetComponent(Camera);
		weaponCamMask.cullingMask=1<<layerID;
		
		var mainCamera:GameObject=transform.Find("Main Camera").gameObject;
		var mainCamMask:Camera=mainCamera.GetComponent(Camera);
		mainCamMask.cullingMask=~(1<<layerID);
		
		//Disable Name Label Renderer
		var nameLabel:MeshRenderer=transform.Find("nameLabel").GetComponent(MeshRenderer);
		nameLabel.enabled=false;
		//Enable Name Label Script
		var showNameScript:displayNameAbove=transform.Find("nameLabel").GetComponent("displayNameAbove");
		showNameScript.localPlayer=true;
		
		//Enable or disable Image Effects
		if (GameObject.FindGameObjectWithTag("me")){
			var mcam:GameObject=GameObject.FindGameObjectWithTag("me").transform.Find("Main Camera").gameObject;
			var dof_comp:DepthOfField=mcam.GetComponent("DepthOfField");
			dof_comp.enabled=PlayerPrefs.GetInt("dof",1)?true:false;
			var ssf_comp:SunShafts=mcam.GetComponent(SunShafts);
			ssf_comp.enabled=PlayerPrefs.GetInt("ssf",1)?true:false;;
		}

		var ShaftIE:SunShafts=mainCamera.GetComponent(SunShafts);
		ShaftIE.sunTransform=GameObject.Find("Sun").transform;
		
		
		//Configure sound effects volume
		var audSources=GameObject.FindObjectsOfType(AudioSource);
		for (var audSource:AudioSource in audSources){
		
			if (audSource.gameObject.name!="Generalscripts")
				audSource.volume=PlayerPrefs.GetFloat("sfxMusic",0.8);
		
		}
		if (GameSettings.playMode==0){
			var myLabel:GameObject=transform.Find("nameLabel").gameObject;
			myLabel.active=false;		
		}
	}
	
	
	// This is just some remote controlled player, don't execute direct
	// user input on this. DO enable multiplayer controll
	else
	{
		
		//Disable crosshair script
		var crosshairScript:SmartCrosshair=transform.Find("Weapon Camera").GetComponent("SmartCrosshair");
		crosshairScript.enabled=false;
		
		//Disable User Input on remote player
		var tmp2 : FPSWalkerDB = GetComponent("FPSWalkerDB");
		tmp2.enabled = false;
		//Disable all MouseLooks Controls
		var tmp5 : MouseLookPlayer = transform.GetComponent(MouseLookPlayer);
		tmp5.enabled = false;		
		var temp : MouseLookA = transform.Find("Main Camera").GetComponent(MouseLookA);
		temp.enabled = false;
		var tmp7 : MouseLookB = transform.Find("Weapon Camera").GetComponent(MouseLookB);
		tmp7.enabled = false;

		//Disable remote player's cameras
		var temp1 : Camera = transform.Find("Main Camera").GetComponent(Camera);
		temp1.enabled = false;
		var temp2 : Camera = transform.Find("Weapon Camera").GetComponent(Camera);
		temp2.enabled = false;
		
		var weaponcamm:playerweapons=transform.Find("Weapon Camera").GetComponent("playerweapons");
		weaponcamm.localPlayer=false;
		
		//Disable Footstep Sounds
		var footsteps:Footsteps=GetComponent("Footsteps");
		footsteps.enabled=false;
		var listener:AudioListener=transform.Find("Weapon Camera").GetComponent("AudioListener");
		listener.enabled=false;
		
		networkView.RPC("askName", RPCMode.Others, Network.player);
		//Set player name written on his prefab		
		name=thisName;
		//Disable Hands with guns
		var soldier:GameObject=transform.Find("Soldier").gameObject;
		var soldierMesh:SkinnedMeshRenderer=soldier.transform.Find("Soldier").GetComponent(SkinnedMeshRenderer);
		soldierMesh.enabled=true;
		//Debug.Log("ENABLED SOLDIER MESH");
		var allChildren = transform.Find("Soldier/Pelvis").gameObject.GetComponentsInChildren(MeshRenderer);
		for (var weapon:MeshRenderer in allChildren){
			if (weapon.gameObject.name=="MachineGun"){
				weapon.enabled=true;
				//Debug.Log("ENABLED WEAPON MESH");
			}
		
		}
		

		for (var meshR:MeshRenderer in transform.Find("Weapon Camera").gameObject.GetComponentsInChildren(MeshRenderer)){
			//Debug.Log("Renderer "+meshR.gameObject.name);
			meshR.enabled=false;
		}	
		for (var meshSR:SkinnedMeshRenderer in transform.Find("Weapon Camera").gameObject.GetComponentsInChildren(SkinnedMeshRenderer)){
			//Debug.Log("Renderer "+meshSR.gameObject.name);
			meshSR.enabled=false;
		}
		if (GameSettings.playMode==0){
			var hisLabel:GameObject=transform.Find("nameLabel").gameObject;
			hisLabel.active=false;		
		}
	}
}



function OnGUI(){
	GUI.skin=skin;
	if(localPlayer){
		if(Network.isClient){
			var playerScripts:PlayerScript[]=FindObjectsOfType(PlayerScript);
			for (var script:PlayerScript in playerScripts){
				if (script.thisPlayerID==0){
					timeLeft=script.timeLeft-1;
				}
			}			
		}	
		if (!theScoreBoard.inBetweenGames){
			mins=timeLeft/60;
			secs=timeLeft-mins*60;
			if (secs<10) GUILayout.Label("Round Ends In: 0"+mins+":0"+secs);
			else GUILayout.Label("Round Ends In: 0"+mins+":"+secs);
		}else{
			GUILayout.Label("Next Round Starts In: "+timeLeft);
		}

		
		if (dead&&!inBetweenGames){
			hp=0;
			if (GUI.Button(Rect(Screen.width/2-100,Screen.height/2-15,200,30),"Click to Respawn")){
				deadCamera.enabled=false;
				if (chatScript.usingChat){
					chatScript.deselectChat();
				}
				networkView.RPC("Respawn",RPCMode.All);
	
			}
	
		}
	}
}

@RPC
function ApplyDamage (damage:float,killerName:String,killerNP:NetworkPlayer,headshot:int){
	if (networkView.isMine){
		if (dead) return;
		var killerTeam:int;
	
	    for(var entry : FPSPlayerNode in gameSetupScript.playerList as List.<FPSPlayerNode>){
			
			if (entry.networkPlayer==killerNP){
				killerTeam=entry.mode;
				break;
			}
		}	
		
		if (GameSettings.playMode==1){
			if(invincible || killerTeam==thisMode){
				return;
			}
		}
		
		hp -= damage;
		var hitAudioSource : AudioSource=GetComponent(AudioSource);
		hitAudioSource.panLevel=0;
		hitAudioSource.PlayOneShot(hit_sound[Random.Range(0, hit_sound.length)],1);
		
		if(hp<0&&!dead){
			dead=true;
			theScoreBoard.LocalPlayerHasKilled(killerNP);
			networkView.RPC("Died",RPCMode.All,killerNP,headshot);
		}else{
			networkView.RPC("setHP",RPCMode.Others, hp); 
		}
	}
}
@RPC
function Died(killerNP:NetworkPlayer,headshot:int){

	if (networkView.isMine){
		
		theScoreBoard.LocalPlayerDied();
		chatScript.addDeath(killerNP,this.networkView.owner,headshot);
		mainCamera.enabled=false;
		weaponCamera.enabled=false;

		allGroups = weaponCamera.gameObject.GetComponentsInChildren(Transform);
		for (var groupMesh:Transform in allGroups){
		
			if (groupMesh.gameObject.name=="Group") {
				var groupsSkinnedMesh=groupMesh.gameObject.GetComponentsInChildren(SkinnedMeshRenderer);
				for (var child:SkinnedMeshRenderer in groupsSkinnedMesh) child.enabled=false;
				var groupsMesh=groupMesh.gameObject.GetComponentsInChildren(MeshRenderer);
				for (var child:MeshRenderer in groupsMesh) child.enabled=false;
				Debug.Log("DISABLED GROUP MESH");
			}

		}
		
		var ragdollnew:GameObject = Network.Instantiate(ragdoll,Vector3(transform.position.x,transform.position.y-0.5,transform.position.z),transform.rotation,0) as GameObject;	

		ragdollID=ragdollnew.networkView.viewID;
		transform.position.y=-50;
		deadCamera.enabled=true;
		deadCamera.transform.position=Vector3(ragdollnew.transform.position.x-4,ragdollnew.transform.position.y+3,ragdollnew.transform.position.z-3);
		deadCamera.transform.LookAt(ragdollnew.transform);
		Screen.lockCursor = false;
		
	}else{	
		var soldier:GameObject=transform.Find("Soldier").gameObject;
		var soldierMesh:SkinnedMeshRenderer=soldier.transform.Find("Soldier").GetComponent(SkinnedMeshRenderer);
		soldierMesh.enabled=false;
		var allChildren = soldier.GetComponentsInChildren(Transform);
		for (var weapon:Transform in allChildren){
		
			if (weapon.gameObject.name=="MachineGun"){
			
				var weaponRend:MeshRenderer=weapon.GetComponent(MeshRenderer);
				weaponRend.enabled=false;
				//Debug.Log("DISABLED WEAPON MESH");
			}
		
		}
		transform.position.y=-50;
	
	}
}

@RPC
function setHP(newHP : int){
	hp=newHP;
}

@RPC
function RespawnPlayers(){
	if (GameObject.FindGameObjectWithTag("me")){
		var myPlayer=GameObject.FindGameObjectWithTag("me");
		var playerS:PlayerScript=myPlayer.GetComponent("PlayerScript");
		myPlayer.networkView.RPC("Respawn",RPCMode.All);
	}
}

@RPC
function Respawn(){
	if (networkView.isMine)
	{
		//Eliminate previous move direction
		var tmpWalker:FPSWalkerDB=GetComponent("FPSWalkerDB");		
		tmpWalker.moveDirection=Vector3.zero;
		// Randomize starting location
		
		var spawnStrings:String[]=["spawnRed","spawnBlue"];
		var spawnString:String;
		if (thisMode==1) {
			spawnString="spawnRed";
			chatScript.addGameChatMessage(thisName+" has respawned");
		}
		else if (thisMode==2) {
			spawnString="spawnBlue";
			chatScript.addGameChatMessage(thisName+" has respawned");
		}else if (thisMode==0){
			spawnString=spawnStrings[Random.Range(0,2)];
			chatScript.addGameChatMessage(thisName+" has respawned");
		}

		var spawnpoints : GameObject[] = GameObject.FindGameObjectsWithTag (spawnString);
		var spawnpoint : Transform = spawnpoints[Random.Range(0, spawnpoints.length)].transform;
		transform.position=spawnpoint.position;
		transform.rotation=spawnpoint.rotation;	
		
		mainCamera.enabled=true;
		weaponCamera.enabled=true;
		deadCamera.enabled=false;
		Screen.lockCursor = true;
		BroadcastMessage("returnToNormal",SendMessageOptions.DontRequireReceiver);
		//Enabling Hands and Selected Weapon
		selectedWeapon=gameSetupScript.selectedWeapon;
		var playerWeapons:playerweapons=weaponCamera.gameObject.GetComponent("playerweapons");
		
		playerWeapons.selectedWeapon=selectedWeapon;
		playerWeapons.SelectWeapon(selectedWeapon);
				
		
		//Destroying Ragdoll
		hp=100;
		if (dead) {
			Network.Destroy(ragdollID);
			Debug.Log("Destroyed");
		}
		dead=false;
		appliedDamage=false;
		
	}else{
		tmpWalker=GetComponent("FPSWalkerDB");		
		tmpWalker.moveDirection=Vector3.zero;
		var soldier:GameObject=transform.Find("Soldier").gameObject;
		var soldierMesh:SkinnedMeshRenderer=soldier.transform.Find("Soldier").GetComponent(SkinnedMeshRenderer);
		soldierMesh.enabled=true;
		var allChildren = transform.Find("Soldier/Pelvis").gameObject.GetComponentsInChildren(MeshRenderer);
		for (var weaponMesh:MeshRenderer in allChildren){
		
			if (weaponMesh.gameObject.name=="MachineGun"){
				weaponMesh.enabled=true;
				Debug.Log("ENABLED WEAPON MESH");
			}
		
		}
		for (var meshR:MeshRenderer in transform.Find("Weapon Camera").gameObject.GetComponentsInChildren(MeshRenderer)){
			Debug.Log("Renderer "+meshR.gameObject.name);
			meshR.enabled=false;
		}	
		for (var meshSR:SkinnedMeshRenderer in transform.Find("Weapon Camera").gameObject.GetComponentsInChildren(SkinnedMeshRenderer)){
			Debug.Log("Renderer "+meshSR.gameObject.name);
			meshSR.enabled=false;
		}	
		
		hp=100;
		//Network.Destroy(ragdollID);
	}
	
	
}

@RPC
function setName(name : String,playerIDD:int,mode:int){
	thisName=name;
	thisPlayerID=playerIDD;
	thisMode=mode;
	gameObject.name="player"+thisPlayerID;
}

@RPC
function askName(asker : NetworkPlayer){
	networkView.RPC("setName", asker, thisName,thisPlayerID,thisMode);
}

@RPC
function showred(killerNP:NetworkPlayer){

	if (networkView.isMine){
	    for(var entry : FPSPlayerNode in gameSetupScript.playerList as List.<FPSPlayerNode>){
			
			if (entry.networkPlayer==killerNP){
				killerTeam=entry.mode;
				break;
			}
		}
		if (GameSettings.playMode==1)
			if (killerTeam==thisMode)return;		
		
		var red_screen:GameObject = gameObject.Find("redscreen");
		var redscript:red_screen_hit=red_screen.GetComponent("red_screen_hit");
		redscript.FlashWhenHit();
	}
}

function SetLayerRecursively( obj : GameObject, newLayer : int  )
{
	obj.layer = newLayer;
	Debug.Log(obj.name);
	for( var child : Transform in obj.transform )
	{
		if (child.gameObject.tag!="sparks")
			SetLayerRecursively( child.gameObject, newLayer );
	}
}