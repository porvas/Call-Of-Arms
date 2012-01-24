/*  This file is part of the "Ultimate Unity networking project" by M2H (http://www.M2H.nl)
 *  This project is available on the Unity Store. You are only allowed to use these
 *  resources if you've bought them from the Unity Assets Store.
 */

var usingChat : boolean = false;	//Can be used to determine if we need to stop player movement since we're chatting
var skin : GUISkin;						//Skin
var showChat : boolean= false;			//Show/Hide the chat
var gameSetupScript:GameSetup;
var chatSound:AudioClip;
//Private vars used by the script
private var inputField : String= "";
private var scoreBoard:scoreBoard;
private var scrollPosition : Vector2;
private var width : int= Screen.width/2.5;
private var height : int= 180;
private var playerName : String;
private var lastUnfocus : float =0;
private var window : Rect;
static var inBetweenGames:boolean=false;	
private var chatEntries = new List.<FPSChatEntry>();
class FPSChatEntry
{
	var name : String= "";
	var text : String= "";	
	var mode : int=0;
	var killer:String;
	var victim:String;
	var killer_team:int;
	var team:int;
	var headshot:int;
}


function Awake(){
	usingChat=false;
	scoreBoard=gameObject.GetComponent("scoreBoard");
	gameSetupScript = GameObject.Find("Generalscripts").GetComponent(GameSetup) as GameSetup;
	window = Rect(10, Screen.height-height+5, width, height);
}

function CloseChatWindow ()
{
	showChat = false;
	inputField = "";
	chatEntries = new List.<FPSChatEntry>();
}

function ShowChatWindow ()
{
	playerName = PlayerPrefs.GetString("playerName", "");
	if(!playerName || playerName==""){
		playerName = "RandomName"+Random.Range(1,999);
	}	
	
	showChat = true;
	inputField = "";
	chatEntries = new List.<FPSChatEntry>();
}

function OnGUI ()
{
	if(!showChat||inBetweenGames){
		return;
	}
	GUI.skin = skin;
	
	window = Rect(10, Screen.height-height+5, width, height);
			
			
	if (Event.current.type == EventType.keyDown && Event.current.character == "\n" && inputField.Length <= 0)
	{
		
		if(lastUnfocus+0.25<Time.time){
			usingChat=true;
			GUI.backgroundColor.a=200;
			GUI.FocusWindow(5);
			GUI.FocusControl("Chat input field");
		}
	}
	GUI.backgroundColor.a=0;
	window = GUI.Window (5, window, GlobalChatWindow, "");
}


function GlobalChatWindow (id : int) {
	
	GUILayout.BeginVertical();
	GUILayout.Space(10);
	GUILayout.EndVertical();
	
	// Begin a scroll view. All rects are calculated automatically - 
    // it will use up any available screen space and make sure contents flow correctly.
    // This is kept small with the last two parameters to force scrollbars to appear.
	scrollPosition = GUILayout.BeginScrollView (scrollPosition);

	for (var entry : FPSChatEntry in chatEntries as List.<FPSChatEntry>)
	{
		GUILayout.BeginHorizontal();
		if (entry.mode==0){
			if(entry.name==""){//Game message
				GUILayout.Label (entry.text);
			}else{
				if (entry.team==1 || entry.team==0){
					GUILayout.Label (entry.name+": ","red");
					GUILayout.Label (entry.text);
				}else if (entry.team==2){
					GUILayout.Label (entry.name+": ","blue");
					GUILayout.Label (entry.text);
				}

				
			}
		}else if(entry.mode==1){
			
			if (entry.killer_team==1){
				GUILayout.Label (entry.killer,"red");
				if (entry.headshot==1) GUILayout.Label (" has headshoted ");
				else GUILayout.Label (" has killed ");
				GUILayout.Label (entry.victim,"blue");
			}else if(entry.killer_team==2){
				GUILayout.Label (entry.killer,"blue");
				if (entry.headshot==1) GUILayout.Label (" has headshoted ");
				else GUILayout.Label (" has killed ");
				GUILayout.Label (entry.victim,"red");
			}else if (entry.killer_team==0){
				GUILayout.Label (entry.killer,"red");
				if (entry.headshot==1) GUILayout.Label (" has headshoted ");
				else GUILayout.Label (" has killed ");
				GUILayout.Label (entry.victim,"red");
			}

		}
		GUILayout.EndHorizontal();
		GUILayout.Space(3);
		
	}
	// End the scrollview we began above.
    GUILayout.EndScrollView ();
	
	if (Event.current.type == EventType.keyDown && Event.current.character == "\n" && inputField.Length > 0)
	{
		HitEnter(inputField);
		GUI.backgroundColor.a=100;
	}
	if (Event.current.type == EventType.keyDown && Event.current.character == "\n" && inputField.Length == 0)
	{
		usingChat=false;
		GUI.UnfocusWindow ();//Deselect chat
		lastUnfocus=Time.time;
	}	
	GUI.SetNextControlName("Chat input field");
	inputField = GUILayout.TextField(inputField);
	
	
	if(Input.GetKeyDown("mouse 0")){
		if(usingChat){
			usingChat=false;
			GUI.UnfocusWindow ();//Deselect chat
			lastUnfocus=Time.time;
			inputField = "";
		}
	}
	if(Input.GetKeyDown("mouse 1")||Input.GetKeyDown("mouse 2")||Input.GetButtonDown("Fire2")){
		if(usingChat){
			usingChat=false;
			GUI.UnfocusWindow ();//Deselect chat
			lastUnfocus=Time.time;
			inputField = "";
		}
	}
}
function deselectChat(){
	usingChat=false;
	GUI.UnfocusWindow ();//Deselect chat
	lastUnfocus=Time.time;
}
function HitEnter(msg : String){
	GUI.backgroundColor.a=0;
	msg = msg.Replace("\n", "");
	networkView.RPC("ApplyGlobalChatText", RPCMode.All, Network.player,playerName, msg);
	inputField = ""; //Clear line
	GUI.UnfocusWindow ();//Deselect chat
	lastUnfocus=Time.time;
	usingChat=false;
	var PlayerS:PlayerScript=GameObject.FindGameObjectWithTag("me").GetComponent(PlayerScript);
	if (!PlayerS.dead&&!scoreBoard.showingBox) Screen.lockCursor=true;
}

@RPC
function addMessage(killer : NetworkPlayer, victim : NetworkPlayer,headshot:int)
{
	var entry : FPSChatEntry = new FPSChatEntry();
    for(var playerInstance : FPSPlayerNode in gameSetupScript.playerList as List.<FPSPlayerNode>){
		
		if (playerInstance.networkPlayer==killer){
			entry.killer = playerInstance.playerName;
			entry.killer_team=playerInstance.mode;
		}
		if (playerInstance.networkPlayer==victim){
			entry.victim = playerInstance.playerName;
		}
	}	
	
	//Indicates message mode (DEATH)
	entry.mode=1;
	entry.headshot=headshot;
	
	
	chatEntries.Add(entry);
	playChat();
	//networkView.RPC("playChat",RPCMode.Others);
	//Remove old entries
	if (chatEntries.Count > 4){
		chatEntries.RemoveAt(0);
	}

	scrollPosition.y = 1000000;	
}
@RPC
function playChat(){

var audioSource:AudioSource=GetComponent(AudioSource);
audioSource.PlayOneShot(chatSound);

}
@RPC
function ApplyGlobalChatText (playerID:NetworkPlayer ,name : String, msg : String)
{
	var entry : FPSChatEntry = new FPSChatEntry();
    for(var playerInstance : FPSPlayerNode in gameSetupScript.playerList as List.<FPSPlayerNode>){
		if (playerInstance.networkPlayer==playerID)
			entry.team=playerInstance.mode;
	}
	entry.name = name;
	entry.text = msg;

	chatEntries.Add(entry);
	playChat();
	//networkView.RPC("playChat",RPCMode.All);
	//Remove old entries
	if (chatEntries.Count > 4){
		chatEntries.RemoveAt(0);
	}

	scrollPosition.y = 1000000;	
}

//Add game messages etc
function addGameChatMessage(str : String){
	ApplyGlobalChatText(Network.player,"", str);
	if(Network.connections.length>0){
		networkView.RPC("ApplyGlobalChatText", RPCMode.Others, Network.player,"", str);	
	}	
}
//Add game messages etc
function addDeath(killer : NetworkPlayer, victim : NetworkPlayer,headshot:int){
	addMessage(killer, victim,headshot);
	if(Network.connections.length>0){
		networkView.RPC("addMessage", RPCMode.Others, killer, victim,headshot);	
	}	
}