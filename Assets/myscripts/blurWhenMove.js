var motion:MotionBlur;
function Awake(){

motion=GetComponent(MotionBlur);


}
function Update () {
	if (Input.GetAxis("HorizontalMouse")>0.6 || Input.GetAxis("HorizontalMouse")<-0.6){
	
		motion.blurAmount=Mathf.Abs(Input.GetAxis("HorizontalMouse")/20);
	
	
	}
}