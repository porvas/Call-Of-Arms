var localPlayer:boolean=false;
function Fade (start : float, end : float, length : float, currentObject : GUITexture) { //define Fade parmeters
	if (currentObject.color.a == start){

		for (i = 0.0; i < 1.0; i += Time.deltaTime*(1/length)) { //for the length of time
			currentObject.color.a = Mathf.Lerp(start, end, i); //lerp the value of the transparency from the start value to the end value in equal increments
			yield;
			currentObject.color.a = end; // ensure the fade is completely finished (because lerp doesn't always end on an exact value)
		} //end for

	} //end if

} //end Fade
@RPC
public function FlashWhenHit (){
	//if (!localPlayer) return;
	//yield WaitForSeconds (2);
	//Debug.Log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
	var guiredd:GameObject=GameObject.Find("redscreen");
	var guired:GUITexture=guiredd.GetComponent("GUITexture");
	//var guired=this.;
    Fade (0.0, 0.2, 0.09, guired);
	//Debug.Log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    yield WaitForSeconds (.09);
    Fade (0.2, 0.0, 0.09, guired);
}
