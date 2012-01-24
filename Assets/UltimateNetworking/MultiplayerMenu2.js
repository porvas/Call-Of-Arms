
    //GUI vars
    private  var hostPlayers : int= 10;
    private  var hostSettingTitle : String= "";

    private  var currentSubMenu : String= "";
    private  var levelNrToLoad : int= -1;
    static   var myPlayerName : String = "Enter name";
var rightMulti:Rect;
var centerMulti:Rect;
var nowMulti:Rect;

var moveLeft:boolean=false;
var moveRight:boolean=false;
var playMode:int;
var skin:GUISkin;
var levels_string:String[];
var types_string:String[];
var levelToLoad:int;
var audioS:AudioSource;
var buttonOver:AudioClip;
function Awake () : void {
	audioS=GameObject.Find("Main Camera").GetComponent(AudioSource);
	buttonOver=GetComponent(mainMenuGui).buttonOver;
    GameSettings.Clear(); 
   	myPlayerName = PlayerPrefs.GetString("playerName");
   	centerMulti=Rect(Screen.width/2-380, Screen.height/3-Screen.height*0.75/3, 760, Screen.height*0.75);
	nowMulti=rightMulti=Rect(Screen.width+Screen.width/2-380, Screen.height/3-Screen.height*0.75/3, 760, Screen.height*0.75);
	types_string=["DeathMatch","Team Mode"];
	levels_string=["The Yard","DownTown"];
}

    function Start ()  {

        //Default join values
        joinPort = MultiplayerFunctions.SP.defaultServerPort;
        joinIP = joinPW = "";

        //Default host values
        hostTitle = PlayerPrefs.GetString("hostTitle", "Unnamed Server");
        hostDescription = PlayerPrefs.GetString("hostDescription", "Servers description");
        hostMOTD = PlayerPrefs.GetString("hostMOTD", "Servers message of the day");
        hostPW = PlayerPrefs.GetString("hostPassword", "");
        hostMaxPlayers = PlayerPrefs.GetInt("hostPlayers" , 10);
        hostLevel = PlayerPrefs.GetInt("hostLevel" , 0);
        hostDuration = PlayerPrefs.GetInt("hostDuration" , 300);
        playMode=PlayerPrefs.GetInt("playMode" , 0);
        hostPort = PlayerPrefs.GetInt("hostPort", MultiplayerFunctions.SP.defaultServerPort);

        hostDataList = new List.<MyHostData>();
        MultiplayerFunctions.SP.SetHostListDelegate(FullHostListReceived);

    }



    function EnableMenu () : void {
        ReloadSettings();
    }
    function DisableMenu () : void {
        AbortRandomConnect();
        if (MultiplayerFunctions.SP.IsConnecting()) MultiplayerFunctions.SP.CancelConnection();
    }


    function ReloadSettings () : void {
        MultiplayerFunctions.SP.FetchHostList();
    }

    function OpenSubMenu ( newMenu : String  ) : void {
        currentSubMenu = newMenu;
    }


    function OnConnectedToServer () : void {
        GameSettings.Clear();
        
        //Network.isMessageQueueRunning = false;
    }

    function OnServerInitialized () : void {
        //Load game
        networkView.RPC("loadLevel", RPCMode.AllBuffered, hostLevel);
        Application.LoadLevel(Application.loadedLevel+hostLevel+1); 
    }
    @RPC
    function loadLevel(level:int){
    	//Stop communication until in the game  
        Network.isMessageQueueRunning = false;
        Application.LoadLevel(Application.loadedLevel+level+1);      
    
    
    }

    function OnGUI () : void {
    	GUI.skin=skin;
		
        GUILayout.Window(3, nowMulti, WindowGUI, "","multiWindow");
    }

  	function moveMulti(side:String){
  		if(side=="Left") moveLeft=true;
  		else if(side=="Right") moveRight=true;
  	
  	}
	function Multi(size : Rect){
	    nowMulti = size;
	}


    private var currentGUIMethod = "join";

	

    function WindowGUI (windowID : int) {
    	GUI.skin=skin;
		if (moveLeft==true){
			iTween.ValueTo(gameObject, {"from":rightMulti, "to":centerMulti,"onupdate":"Multi","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
			moveLeft=false;
		}
		else if (moveRight==true){
			iTween.ValueTo(gameObject, {"from":centerMulti, "to":rightMulti,"onupdate":"Multi","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
			moveRight=false;
		}
        GUILayout.BeginHorizontal();
        GUILayout.Label("Multiplayer menu","multiTitle",GUILayout.Width(740));
        GUILayout.FlexibleSpace();        
        GUILayout.EndHorizontal();
        GUILayout.Space(5);
		GUILayout.BeginHorizontal();
		GUILayout.Label("Pls enter player name: ");
		myPlayerName = GUILayout.TextField(myPlayerName,GUILayout.Width(130));	
		if(GUI.changed){
			//Save the name changes
			PlayerPrefs.SetString("playerName", myPlayerName);
		}
		if(myPlayerName==""){
			GUILayout.Label ("After entering your name you can start playing!");
			GUILayout.FlexibleSpace();  
			GUILayout.EndHorizontal();
			return;
		}
		GUILayout.FlexibleSpace();        
        GUILayout.EndHorizontal();
        GUILayout.Space(5);
        GUILayout.BeginHorizontal();
        GUILayout.Label("Select an option:");
        GUILayout.Space(5);
        if (currentGUIMethod == "join")
        {
            GUILayout.Button("Join","multiButtonsPressed", GUILayout.Width(75));
        }else{
            if (GUILayout.Button("Join","multiButtons", GUILayout.Width(75)))
            {
            	audioS.PlayOneShot(buttonOver);
                currentGUIMethod = "join";
            }
        }
        if (currentGUIMethod == "host"){
            GUILayout.Button("Host","multiButtonsPressed", GUILayout.Width(75));
        }else{
            if (GUILayout.Button("Host","multiButtons", GUILayout.Width(75)))
            {
            	audioS.PlayOneShot(buttonOver);
                currentGUIMethod = "host";
            }
        }

        GUILayout.FlexibleSpace();
        GUILayout.EndHorizontal();
        GUILayout.Space(25);
          
        if (currentGUIMethod == "join") 
            JoinMenu();      
        else        
            HostMenu();
            
      
                 
    }

    private var JoinScrollPosition : Vector2;
    private var hostDataList :  List.<MyHostData> = new List.<MyHostData>();

    private  var joinPort : int;
    private  var joinIP : String= "";
    private  var joinPW : String= "";
    private  var joinUsePW : boolean= false;

    private  var failConnectMesage : String= "";

    function JoinMenu () : void {
    GUI.skin=skin;
        if (MultiplayerFunctions.SP.IsConnecting())
        {
             var timeSince : float= Mathf.Round(MultiplayerFunctions.SP.TimeSinceLastConnect() * 10) / 10;
             var status : String= "Trying to connect to [" + MultiplayerFunctions.SP.ConnectingToAddress() + "]";
            if (joinPW != "")
            {
                status += " using password.";
            }
            GUILayout.Label(status);
            GUILayout.Label("Waiting: " + timeSince);
            if (timeSince >= 2 && GUILayout.Button("Cancel","multiButtons"))
            {
            	audioS.PlayOneShot(buttonOver);
                MultiplayerFunctions.SP.CancelConnection();
            }
        }
        else if (failConnectMesage != "")
        {
            GUILayout.Label("The game failed to connect:\n" + failConnectMesage);
            if (lastConnectError == NetworkConnectionError.InvalidPassword)
            {
                GUILayout.Label("You entered a wrong password, try again here:");
                joinIP = MultiplayerFunctions.SP.LastIP()[0];
                joinPort = MultiplayerFunctions.SP.LastPort();
                GUILayout.BeginHorizontal();
                GUILayout.Space(5);
                GUILayout.Label("IP");
                GUILayout.Label(joinIP, GUILayout.Width(100));
                GUILayout.Label("Port");
                GUILayout.Label(joinPort + "", GUILayout.Width(50));
                GUILayout.Label("Password");
                joinPW = GUILayout.TextField(joinPW, GUILayout.Width(100));
                if (GUILayout.Button("Connect","multiButtons"))
                {
                	audioS.PlayOneShot(buttonOver);
                    MultiplayerFunctions.SP.DirectConnect(joinIP, joinPort, joinPW, true, OnFinalFailedToConnect);
                }
                GUILayout.FlexibleSpace();
                GUILayout.EndHorizontal();

            }
            GUILayout.Space(10);
            if (GUILayout.Button("Cancel","multiButtons"))
            {
            	audioS.PlayOneShot(buttonOver);
                failConnectMesage = "";
            }
        }
        else
        {
            if (joiningRandomGame)
            {
                GUILayout.Label("Trying to connect to first possible game...");
                if (GUILayout.Button("Cancel","multiButtons"))
                {
                	audioS.PlayOneShot(buttonOver);
                    joiningRandomGame = false;
                    MultiplayerFunctions.SP.CancelConnection();
                }
            }
            else
            {     
                //Masterlist
                GUILayout.BeginHorizontal();
                GUILayout.Label("Game list:");

                GUILayout.FlexibleSpace();
                if (hostDataList != null && hostDataList.Count > 0 && GUILayout.Button("Join random game","multiButtons"))
                {
                	audioS.PlayOneShot(buttonOver);
                    StartCoroutine(StartJoinRandom());
                }
                if (GUILayout.Button("Refresh list","multiButtons"))
                {
                	audioS.PlayOneShot(buttonOver);
                    MultiplayerFunctions.SP.FetchHostList();
                }
                GUILayout.EndHorizontal();

                GUILayout.Space(5);
                GUILayout.BeginHorizontal();
                GUILayout.Label("", "multiTitles",GUILayout.Width(30));

                GUILayout.Label("Server Title","multiTitles", GUILayout.Width(200));
                GUILayout.Label("Players","multiTitles", GUILayout.Width(60));
                GUILayout.Label("Duration","multiTitles", GUILayout.Width(60));
                GUILayout.Label("Level","multiTitles", GUILayout.Width(70));
				GUILayout.Label("Type","multiTitles", GUILayout.Width(80));
                GUILayout.Label("IP Adress","multiTitles", GUILayout.Width(130));
                GUILayout.Label("", GUILayout.Width(75));;
                //GUILayout.Label("Dedicated", GUILayout.Width(75));
                GUILayout.EndHorizontal();
				GUILayout.Space(4);

                JoinScrollPosition = GUILayout.BeginScrollView(JoinScrollPosition);

                for(var  hData : MyHostData  in hostDataList )
                {
                   GUILayout.BeginHorizontal();

                    if (hData.passwordProtected)
                        GUILayout.Label("PW", GUILayout.Width(30));
                    else
                        GUILayout.Label("", GUILayout.Width(30));

                    GUILayout.Label("" + hData.title, GUILayout.Width(200));

                    GUILayout.Label(hData.connectedPlayers + "/" + hData.maxPlayers, GUILayout.Width(60));
                    GUILayout.Label(hData.hostDuration.ToString(), GUILayout.Width(60));
                    GUILayout.Label(levels_string[hData.hostLevel], GUILayout.Width(70));
                    GUILayout.Label(types_string[hData.playMode], GUILayout.Width(80));
                    GUILayout.Label(hData.IP[0], GUILayout.Width(130));

                    //Options
                    //GUILayout.Space(35 - 8);
                    //if (hData.isDedicated)
                    if (GUILayout.Button("Join","multiButtons", GUILayout.Width(75))){  
                   		audioS.PlayOneShot(buttonOver);  
                        MultiplayerFunctions.SP.HostDataConnect(hData.realHostData, "", true, OnFinalFailedToConnect);
                        
                    }
                    //else
                    //    GUILayout.Space(70);



                    GUILayout.EndHorizontal();
                    GUILayout.Space(3);
                }
                if(hostDataList.Count==0){
                    GUILayout.Label("No servers running right now");
                }
                GUILayout.EndScrollView();

                 var text : String= hostDataList.Count + " total servers";
                GUILayout.Label(text);

                //DIRECT JOIN

                GUILayout.BeginHorizontal();
                GUILayout.Label("Direct join:");
                GUILayout.Space(5);
                GUILayout.Label("IP");
                joinIP = GUILayout.TextField(joinIP, GUILayout.Width(100));
                GUILayout.Label("Port");
                joinPort = int.Parse(GUILayout.TextField(joinPort + "", GUILayout.Width(50)) + "");
                GUILayout.Label("Password");
                joinUsePW = GUILayout.Toggle(joinUsePW, "", GUILayout.MaxWidth(22));
                if (joinUsePW)
                {
                    joinPW = GUILayout.TextField(joinPW, GUILayout.Width(100));
                }
                if (GUILayout.Button("Connect","multiButtons"))
                {
                	audioS.PlayOneShot(buttonOver);
                    MultiplayerFunctions.SP.DirectConnect(joinIP, joinPort, joinPW, true, OnFinalFailedToConnect);
                }
                GUILayout.FlexibleSpace();
                GUILayout.EndHorizontal();
                GUILayout.Space(4);
            }
        }
    }

 
    private  var joiningRandomGame : boolean= false;
    private  var randConnectNr : int= 0;


    function StartJoinRandom ( ) : IEnumerator {
        if (joiningRandomGame) return;
        joiningRandomGame = true;

        while (joiningRandomGame && (!hasParsedHostListOnce || !MultiplayerFunctions.SP.ReadyLoading() || !MultiplayerFunctions.SP.HasReceivedHostList()))
        {
            yield 0;
        }
        if (joiningRandomGame)
        {
            randConnectNr = 1;
            for( var hData : MyHostData  in  hostDataList)
            {
                MultiplayerFunctions.SP.HostDataConnect(hData.realHostData, "", true, OnFinalFailedToConnect);
                yield new WaitForSeconds(2);
                if (Network.isClient || !joiningRandomGame) break;
                randConnectNr++;
            }
        }
        joiningRandomGame = false;
    }

    function AbortRandomConnect () : void {
        joiningRandomGame = false;
    }
    function IsDoingRandomConnect () : boolean {
         return joiningRandomGame;
    }
    function RandConnectNr () : String {
        return randConnectNr + "/" + hostDataList.Count;
    }


     private var lastConnectError : NetworkConnectionError;

    function OnFinalFailedToConnect () : void {
        lastConnectError = MultiplayerFunctions.SP.LastConnectionError();
        failConnectMesage = failConnectMesage + "Attempting to connect to [" + MultiplayerFunctions.SP.LastIP()[0] + ":" + MultiplayerFunctions.SP.LastPort() + "]: " + lastConnectError + "\n";
        Debug.Log("OnFinalFailedToConnect=" + failConnectMesage);
    }



    private var hostTitle : String;
    private var hostMOTD : String;
    private var hostDescription : String;
    private var hostPW : String;
    private var hostMaxPlayers : int;
    private var hostPort : int;
    private var hostUsePassword : boolean= false;
    private var hostLevel : int;
    private var hostDuration : int;
	private var players:float=5;
    function HostMenu () : void {


        GUILayout.BeginHorizontal();
        GUILayout.Label("Host a new game:");
        GUILayout.EndHorizontal();

        //GUILayout.Toggle(true, "Construction gamemode");

        GUILayout.BeginHorizontal();
        GUILayout.Label("Title:");
        GUILayout.FlexibleSpace();
        hostTitle = GUILayout.TextField(hostTitle, GUILayout.Width(200));
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label("Server description");
        GUILayout.FlexibleSpace();
        hostDescription = GUILayout.TextField(hostDescription, GUILayout.Width(200));
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label("Server password ", GUILayout.Width(200), GUILayout.Height(23));
        GUILayout.FlexibleSpace();
        hostUsePassword = GUILayout.Toggle(hostUsePassword, "", GUILayout.MaxWidth(40));
        if (hostUsePassword)
        {
            hostPW = GUILayout.TextField(hostPW, GUILayout.Width(200));

        }
        else
        {
            GUILayout.Label("", GUILayout.Height(23), GUILayout.Width(200));
        }
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label("Max players (1-10)");
        GUILayout.FlexibleSpace();
        GUILayout.Label(hostMaxPlayers+"");
        hostMaxPlayers=GUILayout.HorizontalSlider(hostMaxPlayers,1,10,GUILayout.Width(200));
        GUILayout.EndHorizontal();
        GUILayout.Space(5);
        GUILayout.BeginHorizontal();
        GUILayout.Label("Rounds Duration(Seconds):");
        GUILayout.FlexibleSpace();
        hostDuration = int.Parse(GUILayout.TextField(hostDuration.ToString(), GUILayout.Width(200)));
        
        GUILayout.EndHorizontal();

        GUILayout.Space(5);
        GUILayout.BeginHorizontal();
        GUILayout.Label("Choose Level:");
        GUILayout.FlexibleSpace();
        hostLevel=GUILayout.Toolbar(hostLevel,levels_string,"choices");
        GUILayout.EndHorizontal();
        GUILayout.Space(5);
        GUILayout.BeginHorizontal();
        GUILayout.Label("Choose Game Type:");
        GUILayout.FlexibleSpace();
        playMode=GUILayout.Toolbar(playMode,types_string,"choices");
        GUILayout.EndHorizontal();        
        CheckHostVars();

		GUILayout.Space(24);
		GUILayout.FlexibleSpace();
		 
        GUILayout.BeginHorizontal();
        GUILayout.FlexibleSpace();
        if (GUILayout.Button(" Start Server ","multiButtons"))
        {
            audioS.PlayOneShot(buttonOver);
            StartHostingGame(hostTitle,hostMaxPlayers, hostPort,"Welcome to the game!", hostDescription, hostPW,hostLevel,hostDuration,playMode);
        }
        GUILayout.EndHorizontal();
        
    }

    function CheckHostVars () : void {
        //hostMaxPlayers = Mathf.Clamp(hostMaxPlayers, 0, 10);
        hostPort = Mathf.Clamp(hostPort, 10000, 100000);
        //hostTitle = (hostTitle);
        //hostMOTD = (hostMOTD);
        //hostDescription = (hostDescription);
        //hostPW = (hostPW);
    }


    function StartHostingGame ( hostSettingTitle : String ,   hostPlayers : int ,   hostPort : int ,  motd : String ,   description : String ,   password : String , hostLevel:int,hostDuration:int,playMode:int ) : void {
        if (Network.isServer)
        {
            Network.Disconnect();

        }
        if (hostSettingTitle == "")
        {
            hostSettingTitle = "NoTitle";
        }
        
        hostPlayers = Mathf.Clamp(hostPlayers, 1, 64);
        hostPort = Mathf.Clamp(hostPort, 10000, 100000);
        //hostSettingTitle = (hostSettingTitle);
        //description = (description);
        //password = (password);
        
        GameSettings.Clear();
        GameSettings.motd = motd;
        GameSettings.description = description;
        GameSettings.serverTitle = hostSettingTitle;
        GameSettings.port = hostPort;
        GameSettings.IP = "localhost";
        GameSettings.players = hostPlayers;
        GameSettings.password = password;
		GameSettings.hostLevel=hostLevel;
		GameSettings.hostDuration=hostDuration;
		GameSettings.playMode=playMode;
        //maxplayers =2 should open only 1 more connection.
        //if (!isDedicated)
        //{
            hostPlayers -= 1;
        //}

        MultiplayerFunctions.SP.StartServer(password, hostPort, hostPlayers, true);
        
    }


    function FullHostListReceived () : void {
        StartCoroutine(ReloadHosts());
    }

     private var hasParsedHostListOnce : boolean= false;
     private var parsingHostList : boolean= false;

    function ReloadHosts () : IEnumerator {
        if (parsingHostList) return;
        parsingHostList = true;
         var newData : HostData[]= MultiplayerFunctions.SP.GetHostData();
         var hostLenght : int= -1;
        while (hostLenght != newData.Length)
        {
            yield new WaitForSeconds(0.5f);
            newData = MultiplayerFunctions.SP.GetHostData();
            hostLenght = newData.Length;
        }

        hostDataList.Clear();
        for(var hData  : HostData    in newData )
        {
             var cHost : MyHostData= new MyHostData();
            cHost.realHostData = hData;
            cHost.connectedPlayers = hData.connectedPlayers;
            cHost.IP = hData.ip;
            cHost.port = hData.port;
            cHost.maxPlayers = hData.playerLimit;

            cHost.passwordProtected = hData.passwordProtected;
            cHost.title = hData.gameName;
            cHost.useNAT = hData.useNat;
            var level:String[]=hData.comment.Split("#"[0]);
            //Debug.Log(level[0].ToString());
            //Debug.Log(level[1].ToString());
            for (var l:String in level) Debug.Log(l);
            if (level.Length!=1){
            cHost.hostLevel = int.Parse(level[0]);
            cHost.hostDuration = int.Parse(level[1]);
            cHost.playMode=int.Parse(level[2]);
            }
            
            /*//EXAMPLE CUSTOM FIELDS
            var comments : String[]= hData.comment.Split("#"[0]);
            cHost.gameVersion = int.Parse(comments[2]);

            //cHost.isDedicated = comments[1] == "1";         
            if (cHost.isDedicated)
            {
                cHost.connectedPlayers -= 1;
                cHost.maxPlayers -= 1;
            }*/
		
            hostDataList.Add(cHost);
            
            if (hostDataList.Count % 3 == 0)
            {
                yield 0;
            }
        }
        parsingHostList = false;
        hasParsedHostListOnce = true;
    }



class MyHostData
{
     var realHostData : HostData;
     var title : String;
     var useNAT : boolean;
     var connectedPlayers : int;
     var maxPlayers : int;
     var IP : String[];
     var port : int;
     var passwordProtected : boolean;
     var hostDuration:int;
     var hostLevel:int;
     var playMode:int;
     //Example custom fields
     var isDedicated : boolean= false;
     var gameVersion : int;
}

