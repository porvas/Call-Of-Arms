var splashPrefab : GameObject;
var splashPoint : Vector3;
var waterHeight : float = 2.0; // the height of the water if it doesn't move

    function OnTriggerEnter(other : Collider){
	Debug.Log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
       if(other.gameObject.CompareTag("Player")){
	   Debug.Log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
          splashPoint=other.transform.position;
          splashPoint.y = other.transform.position.y-1;
          Network.Instantiate(splashPrefab,splashPoint,other.transform.rotation,0);
       }
    }
	
	   function OnTriggerStay(other : Collider){
       if(other.gameObject.CompareTag("Player")){
          splashPoint=other.transform.position;
          splashPoint.y = other.transform.position.y-1;
          Network.Instantiate(splashPrefab,splashPoint,other.transform.rotation,0);
       }
    }
