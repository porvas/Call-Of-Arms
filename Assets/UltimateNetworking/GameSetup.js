 
var playerPref : Transform;
var chatScript : FPSChat4;
var playerName : String = "";
var selectedWeapon:int=0;
var cantJoin:boolean=false;
var playMode:int;
var hostLevel:int;
//Server-only playerlist
public var playerList = new List.<FPSPlayerNode>();
class FPSPlayerNode {
	var playerName : String;
	var networkPlayer : NetworkPlayer;
	var playerID:int=0;
	var kills : int =0;
	var deaths : int =0;	
	var mode:int=-1;  //Ομάδα 1:RED, 2:BLUE
}

//MY VARIABLES
var sfxMusic:int;
var backMusic:int;
var skin:GUISkin;
var mode:int=0;
var playerNumbers:int[];
var joinWindow:Rect;
var chosenTeam:boolean=false;
private var spCamera:Camera;
var logo:Texture2D;

function OnGUI () {
	//Display PlayerList
	if (Input.GetKey("f8")){
	GUILayout.BeginArea(Rect(Screen.width/2-200,Screen.height/2-200,400,400));
	for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
		GUILayout.Label("PlayerName: "+entry.playerName+"  NP: "+entry.networkPlayer+"  Team: "+entry.mode);		
	}
	GUILayout.EndArea();
	}
	GUI.skin=skin;	
	//Sho join window until user chooses a team
	if (!chosenTeam){
		Screen.lockCursor=false;
		GUI.DrawTexture(Rect(Screen.width/2-250,-30,500,300),logo);
		joinWindow = GUI.Window (0, joinWindow, DoJoinWindow, "","multiWindow");
	}
}
//JOIN WINDOW
function DoJoinWindow(id:int){
	var stringsWeapon:String[]=["Machine Gun","Shotgun","Sniper"];
	var stringsTeam:String[]=["Red","Blue"];
    GUILayout.BeginHorizontal();
    GUILayout.Label("Game Preferences","multiTitle",GUILayout.Width(310));
    GUILayout.FlexibleSpace();        
    GUILayout.EndHorizontal();
    GUILayout.Space(5);
	GUILayout.Label("Choose Your Weapon:");
	selectedWeapon=GUILayout.Toolbar(selectedWeapon,stringsWeapon,"choices");
	if (playMode==1){
		GUILayout.Label("Choose Your Team:");
		mode=GUILayout.Toolbar(mode,stringsTeam,"choices");
		GUILayout.Space(10);
	}else {
		GUILayout.Space(5);
		mode=-1;
	}
	
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	//Join Game
	if (GUILayout.Button("Join Game",GUILayout.Width(110))){
		mode+=1;
		if (canJoinTeam(mode==0?1:mode)){
			cantJoin=false;
			chosenTeam=true;
			SpawnPlayer(mode==0?0:mode,true);
			Screen.lockCursor=true;
		}else{
			cantJoin=true;
		}
	}
	GUILayout.EndHorizontal();
	if (playMode==0){
		if (cantJoin) GUILayout.Label("Cant join the Game(FULL)");
	else
		if (cantJoin) GUILayout.Label("Cant join that team(FULL)");
	}
}

function Awake() 
{
	
	chosenTeam=false;
	playerName = PlayerPrefs.GetString("playerName");
	chatScript = GetComponent(FPSChat4) as FPSChat4;
	Network.isMessageQueueRunning = true;
	Screen.lockCursor=true;	
	
	if(Network.isServer){
		playMode=GameSettings.playMode;
		hostLevel=GameSettings.hostLevel;
		if (GameSettings.playMode==0)	joinWindow=Rect(Screen.width/2-100-350,Screen.height/2.8,330,155);
		else  joinWindow=Rect(Screen.width/2-100-350,Screen.height/2.8,330,255);
		var title:String=GameSettings.serverTitle;
		
		MultiplayerFunctions.SP.RegisterHost(title, GameSettings.hostLevel.ToString()+"#"+GameSettings.hostDuration.ToString()+"#"+playMode.ToString()+"#");
	
		chatScript.ShowChatWindow();
		
		var netPlayer : NetworkPlayer = Network.player;
		if(netPlayer+""=="-1"){
			//This hack is required to fix the local players networkplayer when the RPC is sent to itself.
			netPlayer=Network.player;
		}
		
		var newEntry : FPSPlayerNode = new FPSPlayerNode();
		newEntry.playerName=playerName;
		newEntry.networkPlayer=netPlayer;
		for (var i=0;i<10;i=i+1){
			if (playerNumbers[i]==0){
				playerNumbers[i]=1;
				playerID=i;
				break;
			}
		}
		
		PlayerPrefs.SetInt("playerID",playerID);
		newEntry.playerID=playerID;
		playerList.Add(newEntry);		
		
		// Notify our objects that the level and the network is ready// Notify our objects that the level and the network is ready
		for (var go : GameObject in FindObjectsOfType(GameObject) as GameObject[]){
			go.SendMessage("OnNetworkLoadedLevel", SendMessageOptions.DontRequireReceiver);	
		}		
		
	}else if(Network.isClient){
		
		networkView.RPC ("TellOurName", RPCMode.Server, playerName);
		networkView.RPC ("UpdateMode", RPCMode.Server,Network.player);
		//networkView.RPC ("update_scores", RPCMode.Server);
		//networkView.RPC("update_players",RPCMode.AllBuffered);
		chatScript.ShowChatWindow();
		
		for (var go : GameObject in FindObjectsOfType(GameObject) as GameObject[]){
			go.SendMessage("OnNetworkLoadedLevel", SendMessageOptions.DontRequireReceiver);	
		}	

		
		
		
	}else{
		//How did we even get here without connection?
		Screen.lockCursor=false;	
		Application.LoadLevel((Application.loadedLevel-1));		
	}
}


//Server function
function OnPlayerDisconnected(player: NetworkPlayer) {
	Debug.Log("[Disconnected] Removing Player: "+player.ToString());
	Network.RemoveRPCs(player, 0);
	Network.DestroyPlayerObjects(player);
	networkView.RPC("RemovePlayer",RPCMode.All,player);
}
@RPC
function RemovePlayer(player:NetworkPlayer){
	Debug.Log("[RemovePlayer] Removing Player: "+player.ToString());
	//Remove player from the server list
	for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
		if(entry.networkPlayer==player){
			playerNumbers[entry.playerID]=0;
			chatScript.addGameChatMessage(entry.playerName+" disconnected from: " + player.ipAddress+":" + player.port);
			playerList.Remove(entry);
			break;
		}
	}
}
//Server function
function OnPlayerConnected(player: NetworkPlayer) {
	//networkView.RPC("loadLevel",player,hostLevel);
	chatScript.addGameChatMessage("Player connected from: " + player.ipAddress +":" + player.port);
}
@RPC
function UpdateMode(sender:NetworkPlayer){
	networkView.RPC("setPlayMode",sender,playMode,hostLevel);
}
@RPC
function setPlayMode(playModeTemp:int,hostLevelTemp:int){
	playMode=playModeTemp;
	GameSettings.playMode=playModeTemp;
	hostLevel=hostLevelTemp;
	GameSettings.hostLevel=hostLevelTemp;
	if (GameSettings.playMode==0)	joinWindow=Rect(Screen.width/2-100-350,Screen.height/3,330,155);
	else	joinWindow=Rect(Screen.width/2-100-350,Screen.height/3,330,255);
}
@RPC
//Sent by newly connected clients, recieved by server
function TellOurName(name : String,info : NetworkMessageInfo){
	var netPlayer : NetworkPlayer = info.sender;
	if(netPlayer+""=="-1"){
		//This hack is required to fix the local players networkplayer when the RPC is sent to itself.
		netPlayer=Network.player;
	}
	Debug.Log("NetworkPlayer: "+netPlayer.ToString());
	
	var newEntry : FPSPlayerNode = new FPSPlayerNode();
	newEntry.playerName=name;
	newEntry.networkPlayer=netPlayer;
	for (var i=0;i<10;i=i+1){
		if (playerNumbers[i]==0){
			playerNumbers[i]=1;
			playerID=i;
			break;
		}
	}
	newEntry.playerID=playerID;
	playerList.Add(newEntry);
	
	networkView.RPC("clearLists",RPCMode.Others);
	
	for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
		networkView.RPC("sendList",RPCMode.Others,entry.networkPlayer,entry.playerName,entry.playerID,entry.kills,entry.deaths,entry.mode);
	}	
	
	if(Network.isServer){
		chatScript.addGameChatMessage(name+" joined the game");
	}
}
//@RPC
//function update_scores(info : NetworkMessageInfo){
//	var netPlayer : NetworkPlayer = info.sender;
//	for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
//		networkView.RPC("update_kills",netPlayer,entry.kills,entry.deaths,entry.mode,entry.networkPlayer);
//	}
//}
//@RPC
//function update_kills(kills:int,deaths:int,mode:int,forPlayer:NetworkPlayer){
//	for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
//		if (entry.networkPlayer==forPlayer){
//			entry.kills=kills;
//			entry.deaths=deaths;	
//			entry.mode=mode;	
//		}
//	}
//}
@RPC
function clearLists(){

playerList.Clear();

}

@RPC
function sendList(netPlayer:NetworkPlayer,name:String,playerID:int,kills:int,deaths:int,mode:int){
	
	var newEntry : FPSPlayerNode = new FPSPlayerNode();
	newEntry.playerName=name;
	newEntry.networkPlayer=netPlayer;
	newEntry.playerID=playerID;
	newEntry.kills=kills;
	newEntry.deaths=deaths;
	newEntry.mode=mode;
	playerList.Add(newEntry);	

}
//Called via Awake()
function OnNetworkLoadedLevel()
{
	
		Debug.Log("NETWORK LOADED");



}
@RPC
function update_team(netPlayer:NetworkPlayer,mode:int){

	for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
		if (entry.networkPlayer==netPlayer){
			entry.mode=mode;	
		}
	}

}
function SpawnPlayer(mode:int,newSpawn:boolean){
		for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
			if(entry.networkPlayer==Network.player){
				var name=entry.playerName;
				break;
			}
		}
		
		networkView.RPC("update_team",RPCMode.All,Network.player,mode);
		var menuCam:GameObject=GameObject.Find("menuCam");
		if(menuCam)	menuCam.active=false;
		
		
		var spawnStrings:String[]=["spawnRed","spawnBlue"];
		var spawnString:String;
		if (mode==1) {
			spawnString="spawnRed";
			chatScript.addGameChatMessage(name+" has joined the RED Team");
		}
		else if (mode==2) {
			spawnString="spawnBlue";
			chatScript.addGameChatMessage(name+" has joined the BLUE Team");
		}else if (mode==0){
			spawnString=spawnStrings[Random.Range(0,2)];
			chatScript.addGameChatMessage(name+" has joined the Game");
		}
		
		if (spawnString!=""){
			var spawnpoints : GameObject[] = GameObject.FindGameObjectsWithTag (spawnString);
			var spawnpoint : Transform = spawnpoints[Random.Range(0, spawnpoints.length)].transform;
			if (newSpawn) {
				var newTrans : Transform = Network.Instantiate(playerPref,spawnpoint.position, spawnpoint.rotation, 0) as Transform;
				var weaponCamera:Camera=newTrans.Find("Weapon Camera").GetComponent(Camera);
				var playerWeapons:playerweapons=weaponCamera.gameObject.GetComponent("playerweapons");
				//Enabling Selected Weapon
				playerWeapons.selectedWeapon=selectedWeapon;
				playerWeapons.SelectWeapon(selectedWeapon);
			}else{
				var player:GameObject=GameObject.FindGameObjectWithTag("me");
				player.transform.position=spawnpoint.position;
				player.transform.rotation=spawnpoint.rotation;	
				
				
			}
			networkView.RPC("update_team",RPCMode.All,Network.player,mode);				
			networkView.RPC("update_playerScripts",RPCMode.All,Network.player,mode);	

		}
		
		Screen.lockCursor=true;	
}

function changeTeam(modeNow:int){
		for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
			if(entry.networkPlayer==Network.player){
				var modeBefore:int=entry.mode;
				break;
			}
		}
		if (modeBefore==modeNow){
			//You are already on that team
			return;
		}	
		else{
			SpawnPlayer(modeNow,false);

		}	

		Screen.lockCursor=true;	
}
function canJoinTeam(mode:int){
	var no:int=0;
	for(var entry : FPSPlayerNode in  playerList as List.<FPSPlayerNode>){
		if (entry.mode==mode && entry.networkPlayer!=Network.player){
			no++;
		}
	}
	var maxPlayers:int;
	if (playMode==1)maxPlayers=5;
	else maxPlayers=10;
	
	if (no==maxPlayers) return false;
	else return true;
}

@RPC
function update_playerScripts(player:NetworkPlayer,mode:int){
	Debug.Log("Sending team update");
	var playerScripts:PlayerScript[]=FindObjectsOfType(PlayerScript);
	for (var script:PlayerScript in playerScripts){
	
		if (script.networkView.owner==player){
		
			script.thisMode=mode;
		}
	
	}

}

function OnDisconnectedFromServer () {
	//Load main menu
	Screen.lockCursor=false;
	Application.LoadLevel((Application.loadedLevel-1));
}


//@RPC
//function update_players(playerID:int,name : String,info : NetworkMessageInfo){
//	var netPlayer : NetworkPlayer = info.sender;
//	if(netPlayer+""=="-1"){
//		//This hack is required to fix the local players networkplayer when the RPC is sent to itself.
//		netPlayer=Network.player;
//	}
//	if (netPlayer==Network.player)
//		PlayerPrefs.SetInt("playerID",playerID);
//	var newEntry : FPSPlayerNode = new FPSPlayerNode();
//	newEntry.playerName=name;
//	newEntry.networkPlayer=netPlayer;
//	newEntry.playerID=playerID;
//	playerList.Add(newEntry);
//}

@RPC
function QuitGame(netPlayer:NetworkPlayer){
	
Network.CloseConnection(netPlayer,true);

}
