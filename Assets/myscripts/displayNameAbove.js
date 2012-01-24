var parentPrefab:GameObject;
var text:TextMesh;
var target:Transform;
var localPlayer:boolean=false;
var gameSetupScript:GameSetup;
function Awake(){
text=GetComponent(TextMesh);
target=transform.parent;
}
function Update () {
if (GameSettings.playMode==0){
	var myLabel:GameObject=GameObject.FindGameObjectWithTag("me").transform.Find("nameLabel").gameObject;
	myLabel.renderer.enabled=false;
	return;
}
parentPrefab=transform.parent.gameObject;
gameSetupScript = GameObject.Find("Generalscripts").GetComponent(GameSetup) as GameSetup;
var playerScript:PlayerScript=parentPrefab.GetComponent("PlayerScript");
var name:String=playerScript.thisName;
text.text=name;
if (!localPlayer)return;

target=transform.parent;

var otherLabels:GameObject[]=GameObject.FindGameObjectsWithTag("nameLabels");
	for (var label:GameObject in otherLabels){
		
		if (label.transform.parent.GetComponent("PlayerScript").thisPlayerID!=playerScript.thisPlayerID)
			var hisMode:int=label.transform.parent.GetComponent(PlayerScript).thisMode;
			if (playerScript.thisMode!=hisMode){
				label.renderer.enabled=false;
			}else{
				label.renderer.enabled=true;
				LookAwayFrom(target.position,label);
			}
	}
}

function LookAwayFrom(point:Vector3,label:GameObject)
{
    point = 2.0f * label.transform.position - point;
    label.transform.LookAt(point);
}
