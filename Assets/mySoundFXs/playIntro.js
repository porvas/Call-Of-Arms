var movie:MovieTexture;
var finished:boolean=false;
function Awake () {
	renderer.material.mainTexture=movie;
	audio.clip = movie.audioClip;
	movie.Play();
	audio.Play ();
	
	
	

//	if (Input.GetKeyDown(KeyCode.Space)) {
//		if (renderer.material.mainTexture.isPlaying) {
//			renderer.material.mainTexture.Pause();
//		}
//		else {
//			renderer.material.mainTexture.Play();
//		}
//	}
}
function Update(){

	if (!audio.isPlaying){
		finished=true;
		GameObject.Find("Main Camera").GetComponent(Camera).enabled=true;
		this.transform.parent.gameObject.active=false;
	}



}