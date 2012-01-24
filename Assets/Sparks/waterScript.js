var emitter1:ParticleEmitter;
var emitter2:ParticleEmitter;
var emitter3:ParticleEmitter;

function Start(){
emitter1=transform.Find("water_foam").GetComponent(ParticleEmitter);
emitter2=transform.Find("water_splash2").GetComponent(ParticleEmitter);
emitter3=transform.Find("water_splash_cont").GetComponent(ParticleEmitter);
}
//function Update () {
//	var emitters:ParticleEmitter[];
//	if (shouldEmit==true){
//		//for (var child:GameObject in this.GameObject){
//		
//		emitters=this.GetComponentsInChildren(ParticleEmitter);
//		for (var emitter:ParticleEmitter in emitters){
//		
//		emitter.Emit();
//		shouldEmit=false;
//		
//		}
//		//}
//	
//	}
//}

function Shoot( pos:Vector3, rot:Quaternion){
emitter1.transform.position=pos;
emitter1.transform.rotation=rot;
emitter2.transform.position=pos;
emitter2.transform.rotation=rot;
emitter3.transform.position=pos;
emitter3.transform.rotation=rot;
emitter1.Emit();
emitter2.Emit();
emitter3.Emit();
}