
	public var footAudioSource : AudioSource;
	private var cTag:String;
	private var delay:int;
	public var woodSteps : AudioClip[];
	public var metalSteps : AudioClip[];
	public var waterSteps : AudioClip[];
	public var concreteSteps : AudioClip[];
	public var sandSteps : AudioClip[];
	private var walker:FPSWalkerDB;
	private var cc : CharacterController;
	private var t : Transform;
	var a:int;
	public var hitLayer : LayerMask;
		
	function Start()
	{
		cc = GetComponent(CharacterController);
		walker=GetComponent(FPSWalkerDB);
		t = transform;
	}
	function Update(){
		if(!Screen.lockCursor) return;
		if (walker.isMoving==true) {
			OnFootStrike();
		}
	}
	function OnFootStrike () 
	{
		if (a==1) return;
		//if(Time.time < 0.5) return;
		a=1;
//		if(cc != null)
//		{
//			volume = Mathf.Clamp01(0.1 + cc.velocity.magnitude * 0.3);
//		}
//		else
//		{
//			volume = 1;
//		}
		
		var stepsAudio:AudioClip=GetAudio();
		//var volumee:int=volume;
		footAudioSource.panLevel=1;
		footAudioSource.PlayOneShot(stepsAudio, 0.4);
		networkView.RPC("playFootsteps",RPCMode.Others,cTag);
		if (walker.walkingBackwards || walker.walkingForwards || walker.strafeWR|| walker.strafeWL) yield WaitForSeconds(0.5);
		else if(walker.runningBackwards || walker.runningForwards|| walker.strafeRR|| walker.strafeRL) yield WaitForSeconds(0.3);
		//yield WaitForSeconds(0.7);
		a=0;
	}
	
	function GetAudio() : AudioClip
	{
		var hit : RaycastHit;
		
		Debug.DrawRay(t.position + new Vector3(0, 0.5, 0), -Vector3.up * 5.0);
		
		if(Physics.Raycast(t.position + new Vector3(0, 0.5, 0), -Vector3.up, hit, Mathf.Infinity, hitLayer))
		{
			cTag = hit.collider.tag.ToLower();
		}
		Debug.Log("TAG= "+cTag);
		if(cTag == "wood")
		{
			return woodSteps[Random.Range(0, woodSteps.length)];
		}
		else if(cTag == "water")
		{
			
			
			return waterSteps[Random.Range(0, waterSteps.length)];
			
		}
		else if(cTag == "concrete")
		{
			
			return concreteSteps[Random.Range(0, concreteSteps.length)];
		}
		else if(cTag == "dirt")
		{
			
			return sandSteps[Random.Range(0, sandSteps.length)];
		}
		else if(cTag == "ground")
		{
			
			return sandSteps[Random.Range(0, sandSteps.length)];
		}
		else
		{
			cTag="empty";
			
			return sandSteps[Random.Range(0, sandSteps.length)];
		}
	}
@RPC
function playFootsteps(cTag:String){
	var stepsAudio : AudioClip;
		if(cTag == "wood")
		{
			stepsAudio= woodSteps[Random.Range(0, woodSteps.length)];
		}
		else if(cTag == "water")
		{
			stepsAudio= waterSteps[Random.Range(0, waterSteps.length)];
			
		}
		else if(cTag == "concrete")
		{
			
			stepsAudio= concreteSteps[Random.Range(0, concreteSteps.length)];
		}
		else if(cTag == "dirt")
		{
			
			stepsAudio= sandSteps[Random.Range(0, sandSteps.length)];
		}
		else if(cTag == "ground")
		{
			
			stepsAudio= sandSteps[Random.Range(0, sandSteps.length)];
		}
		else
		{
			
			stepsAudio= sandSteps[Random.Range(0, sandSteps.length)];
		}
	footAudioSource.panLevel=1;	
	footAudioSource.PlayOneShot(stepsAudio, 0.4);

}

