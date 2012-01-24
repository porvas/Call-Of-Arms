#pragma strict
#pragma implicit
#pragma downcast

private var lastPosition : Vector3;
function Update () {
//Save some network bandwidth; only send an rpc when the position has moved more than X
	if(Vector3.Distance(transform.position, lastPosition)>=0.05){
				lastPosition=transform.position;			
				//Send the position Vector3 over to the others; in this case all clients
				networkView.RPC("SetPosition", RPCMode.Others, transform.position,transform.rotation);

	}
}


@RPC
function SetPosition(newPos : Vector3,newRot : Quaternion){
	//This RPC is in this case always called by the server,
	// but executed on all clients
	transform.position=newPos;	
	transform.rotation=newRot;
}