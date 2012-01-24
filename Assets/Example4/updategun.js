var lastPosition:int=0;
var tempPos:int=0;
function Update () {
	if (transform.position.z!=lastPosition){
		tempPos=transform.position.z;
		networkView.RPC("setposition",RPCMode.Others,tempPos);
		lastPosition=transform.position.z;
	}
}

@RPC
function setposition(tempPos:int){
	transform.position.z=tempPos;
}