var gunscript : gunscript;
var damage : float;
var force : float;
private var isActive = false;
function Update () {
	if(gunscript.hitBox){
		isActive = true;
		this.GetComponent(BoxCollider).isTrigger = false;
	} else {
		isActive = false;
		this.GetComponent(BoxCollider).isTrigger = true;
	}
}
function OnCollisionEnter (c : Collision) {
	audio.Play();
	if(isActive){
		c.collider.SendMessageUpwards("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
		c.collider.GetComponent(Rigidbody).AddForce(c.relativeVelocity*force);
		gunscript.hitBox = false;
		isActive = false;
		audio.loop = false;
	}
}