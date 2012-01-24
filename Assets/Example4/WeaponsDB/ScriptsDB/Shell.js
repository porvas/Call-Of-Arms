var xVelocity : float;
private var yVelocity : float;
private var t : float;
function Start (){
	t = Time.time;
}
function Update () {
	yVelocity = (Time.time-t)*Physics.gravity.y;
	transform.Translate(0, 0 , xVelocity *Time.deltaTime);
	transform.Translate(-yVelocity *Time.deltaTime , 0,0);
	
}