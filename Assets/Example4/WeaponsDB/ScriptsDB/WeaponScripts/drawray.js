var needsSelection : boolean = false;

function OnDrawGizmosSelected () {
    if(needsSelection){
  		Gizmos.color = Color.red;
	    direction = transform.TransformDirection (Vector3.forward) *50000;
	    Gizmos.DrawRay (transform.position, direction);
    }
}

function OnDrawGizmos () {
	if(!needsSelection){
		Gizmos.color = Color.red;
    	direction = transform.TransformDirection (Vector3.forward) *50000;
    	Gizmos.DrawRay (transform.position, direction);

	}
}