

var scoresSkin : GUISkin;
var menuSkin:GUISkin;
//static var newRecordMessage : String = "";

private var displayingHighscore : boolean = false;
private var highscoreText : GUIText;

private var playerName : String = "";

private var scoreText : String = "Loading scores";

private var hidestats : boolean = true;
private var scoreBoardHeight :int = 60;
private var gameSetupScript : GameSetup;


//MY VARIABLES
var selectedWeapon:int=0;
var toolbarStage:int=0;
var inBetweenGames:boolean=false;
var escWindow:Rect;
var cTeamWindow:Rect;
var cWeaponWindow:Rect;
var optionsWindow:Rect;
var BetweenWindow:Rect;
var showBox:boolean=false;
var showingBox:boolean=false;
var r:int=0;
var b:int=0;
var i:int=0;
var k:int=0;
var textureToDisplay : Texture2D;
private var team:int[];
private var names:String[];
private var kills:int[];
private var deaths:int[];
private var killsA:int=0;
private var killsB:int=0;
private var changingTeam:boolean=false;
private var changingWeapon:boolean=false;
private var options:boolean=false;
private var first:boolean=true;
private var result:String;
private var quality:int;
private var sfxMusic:float;
private var backMusic:float;
var dofb:boolean=true;
var ssfb:boolean=true;
var mode:int;
var serverScores:serverScores;
private var gunChoice:int=0;
private var teamFull:boolean=false;
var forcedEsc:boolean=false;
var inBetweenSound:AudioClip;
private var audioS:AudioSource;
function Awake(){

	BetweenWindow= Rect(Screen.width/2-100-350,Screen.height/2.8,330,270);
	escWindow= Rect(Screen.width/10, Screen.height/6, 200, 220);
	cWeaponWindow= Rect(Screen.width/10+200+10, Screen.height/6+50, 180, 200);
	optionsWindow= Rect(Screen.width/10+200+10, Screen.height/6, 500, 400);
	gameSetupScript = GetComponent(GameSetup) as GameSetup;
	playerName= PlayerPrefs.GetString("playerName");
	audioS=GetComponent(AudioSource);

}

function Start(){	
	var dof=PlayerPrefs.GetInt("dof",1);
	var ssf=PlayerPrefs.GetInt("ssf",1);
	dofb=(dof==1)?true:false;
	ssfb=(ssf==1)?true:false;
	backMusic=PlayerPrefs.GetFloat("backMusic",0.4);
	sfxMusic=PlayerPrefs.GetFloat("sfxMusic",0.8);
	quality=PlayerPrefs.GetInt("quality",2);
	names=new String[10];
	kills=new int[10];
	deaths=new int[10];
	team=new int[10];
	var bMusic:AudioSource=GetComponent("AudioSource");
	bMusic.volume=backMusic;
}

function Update () {

	if(!inBetweenGames){
		if (!showingBox){
			if (Input.GetKeyDown(KeyCode.Escape)||forcedEsc){
				if (GameObject.FindGameObjectWithTag("me")){
					var ps:PlayerScript=GameObject.FindGameObjectWithTag("me").GetComponent("PlayerScript");
					if (ps.dead) return;
				}
				showBox=true;
				showingBox=true;
				teamFull=false;
				changingTeam=false;
		 		changingWeapon=false;
		 		options=false;	
				Screen.lockCursor=false;
				if (!ps.dead){
					if(GameObject.FindGameObjectWithTag("me")) 
						var blurs=GameObject.FindGameObjectWithTag("me").GetComponentsInChildren(BlurEffect);
					for (var effect:BlurEffect in blurs) effect.enabled=true;
				}
			}
		}
		else if(showingBox){
			if (GameObject.FindGameObjectWithTag("me")){
				ps=GameObject.FindGameObjectWithTag("me").GetComponent("PlayerScript");
				if (ps.dead) {
					showBox=false;
					showingBox=false;
					closeMenu();	
				}
			}
			if (Input.GetKeyDown(KeyCode.Escape)){
				if (GameObject.FindGameObjectWithTag("me")){
					ps=GameObject.FindGameObjectWithTag("me").GetComponent("PlayerScript");
					if (ps.dead) return;
					if (!ps.dead){
						closeMenu();			
						Screen.lockCursor=true;
					}
				}
				showBox=false;
				showingBox=false;
				
			}
		}
	}
}

function GetPlayer(networkP : NetworkPlayer) : FPSPlayerNode{
    for (var playerInstance : FPSPlayerNode in gameSetupScript.playerList as List.<FPSPlayerNode>) {
		if (networkP == playerInstance.networkPlayer) {
			return playerInstance;
		}
	}
	Debug.LogError("GetPlayer couldn't find player!");
	return null;
}

function LocalPlayerHasKilled(killerNP:NetworkPlayer){
	
	var pNode : FPSPlayerNode= GetPlayer(killerNP);
	pNode.kills +=1;		
	
	//Overwrite the data of other players with the new correct score
	networkView.RPC("UpdateScore",RPCMode.All, killerNP, pNode.kills, pNode.deaths); 
}

function LocalPlayerDied(){
	var pNode : FPSPlayerNode= GetPlayer(Network.player);
	pNode.deaths +=1;
	
	//Overwrite with new correct score
	networkView.RPC("UpdateScore",RPCMode.All, Network.player, pNode.kills, pNode.deaths); 
}
function closeMenu(){
	var blurs2=GameObject.FindGameObjectWithTag("me").GetComponentsInChildren(BlurEffect);
	for (var effect2:BlurEffect in blurs2) effect2.enabled=false;
}
	
@RPC
function UpdateScore(player : NetworkPlayer, kills : int, deaths : int){
	Debug.Log((Network.player==player)+"=local "+kills+"kills & deaths="+deaths);

	var pNode : FPSPlayerNode= GetPlayer(player);
	if(pNode!=null){
		pNode.kills=kills;
		pNode.deaths=deaths;		
	} else {
		Debug.LogError("Could not find network player "+player+" in the gamesetup playerlist!");
	}	
}

function OnGUI () {
	if (GameObject.FindGameObjectWithTag("me"))
 		var mysoldier:PlayerScript=GameObject.FindGameObjectWithTag("me").GetComponent("PlayerScript");
 	GUI.skin = scoresSkin;

	if (!showBox){
		showingBox=false;
	}
	if (showingBox){

		escWindow = GUI.Window (0, escWindow, DoMyescWindow, "","multiWindow");
	 	if (changingWeapon){
	 		cWeaponWindow = GUI.Window (2, cWeaponWindow, DoChooseWeapon, "","multiWindow");
	 	}
	 	if (options){
	 		optionsWindow = GUI.Window (3, optionsWindow, DoOptionsWindow, "","multiWindow");
	 	}
 	}

 	if (!inBetweenGames)first=true;
 	
 	if ((Input.GetKey("tab")&&!mysoldier.dead) || inBetweenGames|| !gameSetupScript.chosenTeam) {
 	
 	if(inBetweenGames&&gameSetupScript.chosenTeam){
 		showBox=false;
		showingBox=false;
 		GUI.skin=scoresSkin;
 		GUI.DrawTexture(Rect(Screen.width/2-250,-30,500,300),gameSetupScript.logo);
 		BetweenWindow = GUI.Window (0, BetweenWindow, DoBetweenWindow, "","multiWindow");
 	}else{
 		first=true;
 	}

	
	killsA=killsB=r=i=0;
	var maxi=0;
	var maxKills:int=0;
	var playerWon:String="";
	names=new String[10];
	kills=new int[10];
	deaths=new int[10];
	team=new int[10];

	//GUI.skin = scoresSkin;
	for(var entry : FPSPlayerNode in gameSetupScript.playerList){
			names[i]=entry.playerName;
			kills[i]=entry.kills;
			deaths[i]=entry.deaths;
			
			if (GameSettings.playMode==1) {
				team[i]=entry.mode;
				if (entry.mode==1) killsA+=entry.kills;
				if (entry.mode==2) killsB+=entry.kills;	
			}else{
				if (entry.mode!=-1) team[i]=1;
				else team[i]=-1;
				if (entry.kills>maxKills) {
					maxKills=entry.kills;
					
					playerWon=entry.playerName;
				}
			
			
			}
			i++;
	
	}
	//Bubble Sort Only if DeathMatch
	if (GameSettings.playMode==0){
		while(1){
			var check=0;
			for (k=0;k<i-1;k++){
				if (kills[k+1]>kills[k]){
					var temp_name=names[k+1];
					names[k+1]=names[k];
					names[k]=temp_name;			
				
					var temp_kills=kills[k+1];
					kills[k+1]=kills[k];
					kills[k]=temp_kills;
						
					var temp_deaths=deaths[k+1];
					deaths[k+1]=deaths[k];
					deaths[k]=temp_deaths;
								
					check=1;
				}
			}
			if (check==0) break; 
		}
	}

	if(inBetweenGames&&first){
		audioS.PlayOneShot(inBetweenSound,1);
		first=false;
		if (GameSettings.playMode==1){
			if (killsA>killsB)	result="RED TEAM WON!";
			else if (killsA<killsB)	result="BLUE TEAM WON!";
			else if (killsA==killsB)  result="DRAW!";
		}

	}
	if(inBetweenGames){
		GUI.Label(Rect(Screen.width/2-300,Screen.height/2.8-50,600,40),result,"result");
		GUILayout.BeginArea (Rect (Screen.width/2-100,Screen.height/2.8,600,Screen.height/1.5));
	}else if(!gameSetupScript.chosenTeam){
		GUILayout.BeginArea (Rect (Screen.width/2-100,Screen.height/2.8,600,Screen.height/1.5));
	}else{
		GUILayout.BeginArea (Rect (Screen.width/2-Screen.width/2/2,Screen.height/2-Screen.height/2.8,Screen.width/2,Screen.height/1.4));
	}
	GUILayout.BeginVertical("scoresBox");
	GUILayout.Label("ScoreBoard","scoresTitle");	
	GUILayout.Label(textureToDisplay,"line");
	//TEAM RED
	GUILayout.BeginHorizontal();
	if (GameSettings.playMode==1){
		GUILayout.Label("Red Team (Kills:"+killsA+")","redTeam");
	}else{
		if (playerWon==""&&names[0]&&team[0]==1) playerWon=names[0];
		else if (playerWon=="") playerWon="0 Players";
		GUILayout.Label("Players","redTeam");
		GUILayout.FlexibleSpace();
	}
	GUILayout.Label("Kills","statsTitle",GUILayout.Width(Screen.width/3/3));
	GUILayout.Label("Deaths","statsTitle",GUILayout.Width(Screen.width/3/3));
	GUILayout.EndHorizontal();
	
	if (GameSettings.playMode==1){
		for (k=0;k<10;k++){
			if (r==5) break;
			if (names[k]&&team[k]==1){
					GUILayout.BeginHorizontal("playerSpotRed");
					GUILayout.Label(names[k],"statsName");
					GUILayout.Label(kills[k].ToString(),"statsInfo",GUILayout.Width(Screen.width/3/3));
					GUILayout.Label(deaths[k].ToString(),"statsInfo",GUILayout.Width(Screen.width/3/3));
					GUILayout.EndHorizontal();
					GUILayout.Space(2);
					r++;
			}else if (names[k]&&team[k]!=1){
					continue;
			}else if (!names[k]){
				GUILayout.BeginHorizontal("playerSpotRed");
				GUILayout.Label("","statsName");
				GUILayout.Label("","statsInfo");
				GUILayout.Label("","statsInfo");
				GUILayout.EndHorizontal();
				GUILayout.Space(2);
				r++;
			}
		}
		GUILayout.Space(5);
		//TEAM BLUE
		r=0;
		GUILayout.BeginHorizontal();
		GUILayout.Label("Blue Team (Kills:"+killsB+")","redTeam");
		
		GUILayout.Label("Kills","statsTitle",GUILayout.Width(Screen.width/3/3));
		GUILayout.Label("Deaths","statsTitle",GUILayout.Width(Screen.width/3/3));
		GUILayout.EndHorizontal();
		for (k=0;k<10;k++){
			if (r==5) break;
			if (names[k]&&team[k]==2){
					GUILayout.BeginHorizontal("playerSpotBlue");
					GUILayout.Label(names[k],"statsName");
					GUILayout.Label(kills[k].ToString(),"statsInfo",GUILayout.Width(Screen.width/3/3));
					GUILayout.Label(deaths[k].ToString(),"statsInfo",GUILayout.Width(Screen.width/3/3));
					GUILayout.EndHorizontal();
					GUILayout.Space(2);
					r++;
			}else if (names[k]&&team[k]!=2){
					continue;
			}else if (!names[k]){
				GUILayout.BeginHorizontal("playerSpotBlue");
				GUILayout.Label("","statsName");
				GUILayout.Label("","statsInfo");
				GUILayout.Label("","statsInfo");
				GUILayout.EndHorizontal();
				GUILayout.Space(2);
				r++;
			}
		}
	
		GUILayout.Space(5);
	}else{
		for (k=0;k<10;k++){
			
			if (names[k]&&team[k]!=-1){
					if (k==0 && inBetweenGames) {
						GUILayout.BeginHorizontal("playerWon");
						GUILayout.Label(names[k]+ " (Winner)","statsName");
					}
					else {
						GUILayout.BeginHorizontal("playerSpotRed");
						GUILayout.Label(names[k],"statsName");
					}
					GUILayout.Label(kills[k].ToString(),"statsInfo",GUILayout.Width(Screen.width/3/3));
					GUILayout.Label(deaths[k].ToString(),"statsInfo",GUILayout.Width(Screen.width/3/3));
					GUILayout.EndHorizontal();
					GUILayout.Space(2);
			}else {
				GUILayout.BeginHorizontal("playerSpotRed");
				GUILayout.Label("","statsName");
				GUILayout.Label("","statsInfo");
				GUILayout.Label("","statsInfo");
				GUILayout.EndHorizontal();
				GUILayout.Space(2);
			}
		}
		GUILayout.Space(5);	
	
	
	}
	//SPECTATORS
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Spectators:","redTeam");
	GUILayout.EndHorizontal();
	var spectators:String="";
	for(var entry : FPSPlayerNode in gameSetupScript.playerList){
		if (entry.mode==-1&&GameSettings.playMode==1){
			if (entry.networkPlayer.ToString()=="0") spectators += entry.playerName;
			else { spectators += ", "+entry.playerName;}
		}else if (entry.mode==-1&&GameSettings.playMode==0){
			if (entry.networkPlayer.ToString()=="0") spectators += entry.playerName;
			else { spectators += ", "+entry.playerName;}							
		}	
	}	
	GUILayout.Label(spectators);

	GUILayout.EndVertical();
	GUILayout.EndArea();
	
	}
}
function DoBetweenWindow(id:int){
	var PlayerS:PlayerScript=GameObject.FindGameObjectWithTag("me").GetComponent(PlayerScript);
	var PlayerW:playerweapons=PlayerS.transform.Find("Weapon Camera").GetComponent("playerweapons");
	selectedWeapon=gameSetupScript.selectedWeapon;
	mode=PlayerS.thisMode-1;
	var stringsWeapon:String[]=["Machine Gun","Shotgun","Sniper"];
	var stringsTeam:String[]=["Red","Blue"];
    GUILayout.BeginHorizontal();
    GUILayout.Label("Options","multiTitle",GUILayout.Width(310));
    GUILayout.FlexibleSpace();        
    GUILayout.EndHorizontal();
    GUILayout.Space(5);
	GUILayout.Label("Choose Your Weapon:");
	selectedWeapon=GUILayout.Toolbar(selectedWeapon,stringsWeapon,"choices2");
	gameSetupScript.selectedWeapon=selectedWeapon;
	if (GameSettings.playMode==1){
		GUILayout.Label("Choose Your Team:");
		mode=GUILayout.Toolbar(mode,stringsTeam,"choices2");
		mode=mode+1;
		if (gameSetupScript.canJoinTeam(mode)){	
			PlayerS.thisMode=mode;
			//Change team dynamically
			networkView.RPC("update_team",RPCMode.All,Network.player,mode);

		}
	}	
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if (GUILayout.Button("Quit Game",GUILayout.Width(110))){
	 	Disconnect(Network.player);
	}	
	GUILayout.EndHorizontal();

}
function OnApplicationFocus(focus : boolean){

	if (focus==false){
		if (gameSetupScript.chosenTeam && !inBetweenGames) forcedEsc=true;
	}else forcedEsc=false;
}
function DoMyescWindow(windowID : int)
{
	
	if (GameObject.FindGameObjectWithTag("me"))
		var PlayerS:PlayerScript=GameObject.FindGameObjectWithTag("me").GetComponent(PlayerScript);
 	GUILayout.Label("In Game Menu","multiTitle",GUILayout.Width(180));
 	GUILayout.Space(20);
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
 	if (GUILayout.Button("Change Weapon",GUILayout.Width(150))){
	 	changingWeapon=true;
	 	changingTeam=false;
	 	options=false;	
 	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
 	if (GUILayout.Button("Options",GUILayout.Width(150))){
	 	options=true;
	 	changingTeam=false;
	 	changingWeapon=false;	
 	}
 	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();

	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	
 	if (GUILayout.Button("Quit to main menu",GUILayout.Width(150))){
	 	changingTeam=false;
	 	changingWeapon=false;
	 	options=false;	
	 	closeMenu();
	 	Disconnect(Network.player);
 	}	
 	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
 	if (GUILayout.Button("Return to game",GUILayout.Width(150))){
	 	changingTeam=false;
	 	changingWeapon=false;	
	 	options=false;
		showBox=false;
		showingBox=false;
		if (!PlayerS.dead) Screen.lockCursor=true;	
		closeMenu()	;
 	}
 	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.EndVertical();	

}

function DoChooseWeapon(windowID : int)
{
	GUILayout.Label("Choose Weapon","multiTitle",GUILayout.Width(160));
	gunChoice=gameSetupScript.selectedWeapon;
 	GUILayout.BeginVertical();
 	GUILayout.Space(20);
 	GUILayout.BeginHorizontal();
 	GUILayout.FlexibleSpace();
 	gunChoice=GUILayout.SelectionGrid(gunChoice,["Machine Gun","Shotgun","Sniper"],1,"choices");
 	GUILayout.FlexibleSpace();
 	GUILayout.EndHorizontal();
 	gameSetupScript.selectedWeapon=gunChoice;
	GUILayout.FlexibleSpace();
 	GUILayout.EndVertical();
}
function DoOptionsWindow(windowID : int)
{
	
	GUILayout.Label("Options","multiTitle",GUILayout.Width(480));
 	GUILayout.BeginVertical();
 	GUILayout.Space(20);
 	
 	GUILayout.Label("Video Settings");
	GUILayout.Label("","line");
	GUILayout.Space(5);
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Choose Quality Level");
	quality=GUILayout.Toolbar(quality,["Low","Normal","High"],"choices");
	if (quality==0) QualitySettings.currentLevel=QualityLevel.Fast;
	if (quality==1) QualitySettings.currentLevel=QualityLevel.Good;
	if (quality==2) QualitySettings.currentLevel=QualityLevel.Fantastic;
	PlayerPrefs.SetInt("quality",quality);
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Image Effects: ");
	GUILayout.BeginVertical();
	dofb=GUILayout.Toggle(dofb," Depth Of Field");
	ssfb=GUILayout.Toggle(ssfb," Sun Shafts");
	GUILayout.EndVertical();
	GUILayout.EndHorizontal();
	GUILayout.Space(5);
	PlayerPrefs.SetInt("dof",dofb?1:0);
	PlayerPrefs.SetInt("ssf",ssfb?1:0);
	if (GameObject.FindGameObjectWithTag("me")){
		var mcam:GameObject=GameObject.FindGameObjectWithTag("me").transform.Find("Main Camera").gameObject;
		var dof_comp:DepthOfField=mcam.GetComponent("DepthOfField");
		dof_comp.enabled=dofb;
		var ssf_comp:SunShafts=mcam.GetComponent(SunShafts);
		ssf_comp.enabled=ssfb;
	}
	
	GUILayout.Label("Sound Settings");
	GUILayout.Label("","line");
	GUILayout.Space(5);
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Background Music");
	backMusic=GUILayout.HorizontalSlider(backMusic,0,1,GUILayout.Width(200));
	PlayerPrefs.SetFloat("backMusic",backMusic);
	
	var bMusic:AudioSource=GetComponent("AudioSource");
	bMusic.volume=PlayerPrefs.GetFloat("backMusic",0.4);
	GUILayout.EndHorizontal();	
	GUILayout.Space(5);
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Sound Effects");		
	sfxMusic=GUILayout.HorizontalSlider(sfxMusic,0,1,GUILayout.Width(200));
	PlayerPrefs.SetFloat("sfxMusic",sfxMusic);
	var audSources=FindObjectsOfType(AudioSource);
	for (var audSource:AudioSource in audSources){
	
		if (audSource.gameObject.name!="Generalscripts")
			audSource.volume=sfxMusic;
	
	}	
	GUILayout.EndHorizontal();
	GUILayout.Space(10);


		
	GUILayout.FlexibleSpace();
 	GUILayout.EndVertical();
}

function Disconnect(netPlayer:NetworkPlayer){
		var MF:MultiplayerFunctions=GameObject.Find("Persistent").GetComponent(MultiplayerFunctions);
		if (Network.isClient){
		 	Network.CloseConnection(netPlayer,true);
		 	networkView.RPC("QuitGame",RPCMode.Server,netPlayer);
		 	
		 	MF.CancelConnection();
		 }
		if (Network.isServer){
			networkView.RPC("QuitGame",RPCMode.Server,netPlayer);	
			Network.Disconnect();
			MF.UnregisterHost();
			MasterServer.UnregisterHost();
		}

	 	
	 	Application.LoadLevel(0);	
}