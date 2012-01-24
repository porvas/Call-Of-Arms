var health =100.0;
var explosion:Transform;


function ApplyDamage(info : String[]){
		var damage:int=5;
		health-=damage;
		Debug.Log(health);
		if (health<=0){
			Detonate();
			networkView.RPC("Detonate",RPCMode.Others);
			Destroy(this.gameObject);
		}
	}
	
@RPC
function applyforce(force : float ,direction:Vector3,point:Vector3){
	Debug.Log('applying force');
	rigidbody.AddForceAtPosition(force * direction, point);

}
@RPC
function Detonate(){
	//Instantiate (explosion, transform.position, transform.rotation);
	Network.Instantiate(explosion,transform.position,transform.rotation,0);
}