var mainCam:GameObject;
var windowWidth:int;
var leftOptions:Rect;
var centerOptions:Rect;
var nowOptions:Rect;
var leftMain1:Rect;
var centerMain1:Rect;
var rightMain1:Rect;
var leftMain2:Rect;
var rightMulti:Rect;
var centerMulti:Rect;
var centerMultiBack:Rect;
var rightMultiBack:Rect;
var nowMultiBack:Rect;
var nowMain1:Rect;
var nowLogo:Rect;
var leftLogo:Rect;
var centerLogo:Rect;
var rightLogo:Rect;
var skin:GUISkin;
var quality:int;
var sfxMusic:float;
var backMusic:float;
var res:int;
var fullS:boolean;
var fullSint:int;
var buttonOver:AudioClip;
var a:int=0;
var overButton:boolean=false;
var dofb:boolean=true;
var ssfb:boolean=true;
var logo:Texture;
var GameLogo:GameObject;
var res_w:int[]=[1024,1280,1680];
var res_h:int[]=[768,800,1050];
static var over=false;
var audioS:AudioSource;
static var aaaa:int=0;
var ok:boolean;
function Awake(){
	ok=false;
	audioS=GameObject.Find("Main Camera").GetComponent(AudioSource);
	sfxMusic=PlayerPrefs.GetFloat("sfxMusic",0.8);
	backMusic=PlayerPrefs.GetFloat("backMusic",0.2);
	//Set Audio Last Options
	var audSources=FindObjectsOfType(AudioSource);
	audSources[1].volume=PlayerPrefs.GetFloat("sfxMusic",0.8);
	audSources[0].volume=PlayerPrefs.GetFloat("backMusic",0.2);
	//Set Quality and Resolution Options
	quality=PlayerPrefs.GetInt("quality",2);
	res=PlayerPrefs.GetInt("res",0);
	
	if (!Application.isEditor){
		fullSint=PlayerPrefs.GetInt("fullS",1);
		if(fullSint==1)	
			fullS=true;
		else fullS=false;
		
		if (fullS&&!Screen.fullScreen){Screen.fullScreen=!Screen.fullScreen;PlayerPrefs.SetInt("fullS",1);aaaa=2;}
		else if(!fullS&&Screen.fullScreen){Screen.fullScreen=!Screen.fullScreen;PlayerPrefs.SetInt("fullS",0);aaaa=3;}

		for (var i:int=0;i<=2;i++){
			if (res==i&&Screen.width!=res_w[i]){
						
				if (i==2){
					if (Screen.width==1595&&Screen.fullScreen==false)break;
				}
				aaaa=5;
				PlayerPrefs.SetInt("res",res);
				Screen.SetResolution(res_w[i],res_h[i],fullS);
				Application.LoadLevel(0);	
			}
		}
	
	}
	PlayerPrefs.SetInt("res",res);
	var dof=PlayerPrefs.GetInt("dof",1);
	var ssf=PlayerPrefs.GetInt("ssf",1);
	dofb=(dof==1)?true:false;
	ssfb=(ssf==1)?true:false;
	if (quality==0) QualitySettings.currentLevel=QualityLevel.Fast;
	if (quality==1) QualitySettings.currentLevel=QualityLevel.Good;
	if (quality==2) QualitySettings.currentLevel=QualityLevel.Fantastic;



	buttonsWidth=150;
	mainCam=GameObject.Find("Main Camera");
	//Set GameLogo correct position for resolution
	GameLogo=GameObject.Find("GameLogo");
	if (res==2)GameLogo.transform.position.y=1.04;
	else GameLogo.transform.position.y=1;
	Application.runInBackground = true;
	
	
	leftMain1=Rect(-Screen.width/2-windowWidth/2,Screen.height/2-50,windowWidth,200);
	centerMain1=centerMulti=Rect(Screen.width/2-150/2,Screen.height/2-50,150,200);
	rightMain1=rightMulti=Rect(Screen.width+Screen.width/2-windowWidth/2,Screen.height/2-50,windowWidth,200);
	centerLogo=nowLogo=Rect(Screen.width/2-Screen.width/1.2/2,Screen.height/2-Screen.height/3/2-Screen.height/3,Screen.width/1.2,Screen.height/3);
	rightLogo=Rect(Screen.width+Screen.width/2-Screen.width/1.3/2,Screen.height/2-Screen.height/3/2-Screen.height/3,Screen.width/1.3,Screen.height/3);
	leftLogo=Rect(-Screen.width/2-Screen.width/1.3/2,Screen.height/2-Screen.height/3/2-Screen.height/3,Screen.width/1.3,Screen.height/3);
	nowMain1=centerMain1;
	centerMultiBack=Rect(Screen.width/2-380, Screen.height/3-Screen.height*0.75/3+Screen.height*0.75-10,760, 60);
	nowMultiBack=rightMultiBack=Rect(Screen.width+Screen.width/2-380, Screen.height/3-Screen.height*0.75/3+Screen.height*0.75-10, 760, 60);
	nowOptions=leftOptions=Rect(-(Screen.width/2+250),Screen.height/2-250,500,500);
	centerOptions=Rect(Screen.width/2-250,Screen.height/2-250,500,500);
	
	ok=true;

}

function OnGUI() {

GUI.skin=skin;

if (!ok)return;
	
	GUILayout.Window(1,nowOptions,optionsGUI,"","multiWindow");
	GUI.backgroundColor.a=0;
	GUILayout.Window(0,nowMain1,main1GUI,"");
	GUILayout.Window(2,nowMultiBack,multiBack,"");

}

function main1GUI(windowID : int){
	
	GUI.backgroundColor.a=100;
		GUILayout.BeginHorizontal();
		GUILayout.FlexibleSpace();
		GUILayout.BeginVertical();
		if (GUILayout.Button("Find/Host Game","menuButtons",GUILayout.Width(150))){
			audioS.PlayOneShot(buttonOver);
				iTween.MoveBy(GameLogo, iTween.Hash("y", 0.36, "easeType", "easeInOutExpo","time",1, "delay", .0));
			iTween.MoveBy(mainCam, iTween.Hash("x", 20, "easeType", "easeInOutExpo","time",1, "delay", .0));
			var multiCode:MultiplayerMenu2=GetComponent("MultiplayerMenu2");
			iTween.ValueTo(gameObject, {"from":rightMultiBack, "to":centerMultiBack,"onupdate":"multiBack","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
			iTween.ValueTo(gameObject, {"from":centerMain1, "to":leftMain1,"onupdate":"Main1","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
			iTween.ValueTo(gameObject, {"from":centerLogo, "to":leftLogo,"onupdate":"Logo","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
			multiCode.moveMulti("Left");	
			MultiplayerFunctions.SP.FetchHostList();
		}

		if (GUILayout.Button("Options","menuButtons",GUILayout.Width(150))){
			res=PlayerPrefs.GetInt("res",0);
			audioS.PlayOneShot(buttonOver);
			iTween.MoveBy(GameLogo, iTween.Hash("y", 0.36, "easeType", "easeInOutExpo","time",1, "delay", .0));
			iTween.MoveBy(mainCam, iTween.Hash("x", -20, "easeType", "easeInOutExpo","time",1, "delay", .0));	
			iTween.ValueTo(gameObject, {"from":centerMain1, "to":rightMain1,"onupdate":"Main1","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
			iTween.ValueTo(gameObject, {"from":leftOptions, "to":centerOptions,"onupdate":"Options","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});		
			iTween.ValueTo(gameObject, {"from":centerLogo, "to":rightLogo,"onupdate":"Logo","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
		}

		if (GUILayout.Button("Exit","menuButtons",GUILayout.Width(150))){
			audioS.PlayOneShot(buttonOver);
			Application.Quit();
		}

		GUILayout.EndVertical();
		GUILayout.FlexibleSpace();
		GUILayout.EndHorizontal();
		
}

function multiBack(windowID : int){
	
	GUI.backgroundColor.a=100;
	GUILayout.BeginHorizontal();
		if (GUILayout.Button("Back","menuButtons",GUILayout.Width(120),GUILayout.Height(30))){
			audioS.PlayOneShot(buttonOver);
			iTween.MoveBy(GameLogo, iTween.Hash("y", -0.36, "easeType", "easeInOutExpo","time",1, "delay", .0));
			iTween.MoveBy(mainCam, iTween.Hash("x", -20, "easeType", "easeInOutExpo","time",1, "delay", .0));
			var multiCode:MultiplayerMenu2=GetComponent("MultiplayerMenu2");	
			iTween.ValueTo(gameObject, {"from":centerMultiBack, "to":rightMultiBack,"onupdate":"multiBack","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
			multiCode.moveMulti("Right");
			iTween.ValueTo(gameObject, {"from":leftMain1, "to":centerMain1,"onupdate":"Main1","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
			iTween.ValueTo(gameObject, {"from":leftLogo, "to":centerLogo,"onupdate":"Logo","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
		}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
}

function optionsGUI(windowID : int){
	
	GUILayout.BeginVertical();
	GUILayout.Label("Options","multiTitle",GUILayout.Width(480));
	GUILayout.Space(10);
	
	GUILayout.Label("Video Settings");
	GUILayout.Label("","line");
	GUILayout.Space(5);
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Choose Quality Level");
	quality=GUILayout.Toolbar(quality,["Low","Normal","High"],"choices");
	GUILayout.EndHorizontal();
	GUILayout.Space(5);
	
	GUILayout.BeginHorizontal();

	GUILayout.Label("Resolution");
	res=GUILayout.Toolbar(res,["1024x768","1280x800","1680x1050"],"choices");
	GUILayout.EndHorizontal();
	GUILayout.Space(5);
	
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Image Effects: ");
	GUILayout.BeginVertical();
	dofb=GUILayout.Toggle(dofb," Depth Of Field");
	ssfb=GUILayout.Toggle(ssfb," Sun Shafts");
	GUILayout.EndVertical();
	GUILayout.BeginVertical();
	fullS=GUILayout.Toggle(fullS," Full Screen");
	GUILayout.EndVertical();
	GUILayout.EndHorizontal();
	GUILayout.Space(5);

//	GUILayout.BeginHorizontal();
//	GUILayout.Label("Full Screen: ");
//	GUILayout.BeginVertical();
//	fullS=GUILayout.Toggle(fullS,"");
//	GUILayout.EndVertical();
//	
//	GUILayout.EndHorizontal();
//	GUILayout.Space(10);
	
	GUILayout.Label("Sound Settings");
	GUILayout.Label("","line");
	GUILayout.Space(5);
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Background Music");
	backMusic=GUILayout.HorizontalSlider(backMusic,0,1,GUILayout.Width(200));
	GUILayout.EndHorizontal();	
	GUILayout.Space(5);
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Sound Effects");		
	sfxMusic=GUILayout.HorizontalSlider(sfxMusic,0,1,GUILayout.Width(200));
	GUILayout.EndHorizontal();
	GUILayout.Space(10);

//	GUILayout.Label("Game Settings");
//	GUILayout.Label("","line");
//	GUILayout.Space(5);	

	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	if (GUILayout.Button("Apply","menuButtons",GUILayout.Width(120),GUILayout.Height(30))){
		audioS.PlayOneShot(buttonOver);
		if (quality==0) QualitySettings.currentLevel=QualityLevel.Fast;
		if (quality==1) QualitySettings.currentLevel=QualityLevel.Good;
		if (quality==2) QualitySettings.currentLevel=QualityLevel.Fantastic;
		PlayerPrefs.SetInt("dof",dofb?1:0);
		PlayerPrefs.SetInt("ssf",ssfb?1:0);
		PlayerPrefs.SetInt("quality",quality);
		PlayerPrefs.SetFloat("sfxMusic",sfxMusic);
		PlayerPrefs.SetFloat("backMusic",backMusic);
		var audSources=FindObjectsOfType(AudioSource);
		audSources[1].volume=PlayerPrefs.GetFloat("sfxMusic",0.8);
		audSources[0].volume=PlayerPrefs.GetFloat("backMusic",0.2);
	
		if(res!=PlayerPrefs.GetInt("res",1)){
			Screen.SetResolution(res_w[res],res_h[res],fullS);
			PlayerPrefs.SetInt("res",res);
			//Screen.fullScreen=fullS;
			PlayerPrefs.SetInt("fullS",fullS?1:0);
			Application.LoadLevel(0);
		}
		if (fullS!=Screen.fullScreen){
			Screen.fullScreen=fullS;
			PlayerPrefs.SetInt("fullS",fullS?1:0);
			Application.LoadLevel(0);
		}
	}
	GUILayout.FlexibleSpace();
	if (GUILayout.Button("Back","menuButtons",GUILayout.Width(120),GUILayout.Height(30))){
		audioS.PlayOneShot(buttonOver);
		iTween.MoveBy(GameLogo, iTween.Hash("y", -0.36, "easeType", "easeInOutExpo","time",1, "delay", .0));
		iTween.MoveBy(mainCam, iTween.Hash("x", 20, "easeType", "easeInOutExpo","time",1, "delay", .0));	
		iTween.ValueTo(gameObject, {"from":centerOptions, "to":leftOptions,"onupdate":"Options","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
		iTween.ValueTo(gameObject, {"from":rightMain1, "to":centerMain1,"onupdate":"Main1","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
		iTween.ValueTo(gameObject, {"from":rightLogo, "to":centerLogo,"onupdate":"Logo","onupdateparams":"Rect","time":1,"easetype":"easeInOutExpo"});
	}
	GUILayout.EndHorizontal();	

	GUILayout.EndVertical();
}

function Main1(size : Rect){
    nowMain1 = size;
}
function Main2(size : Rect){
    nowMain2 = size;
}
function multiBack(size : Rect){
    nowMultiBack=size;
}
function Options(size : Rect){
    nowOptions = size;
}
function Logo(size : Rect){
    nowLogo = size;
}


