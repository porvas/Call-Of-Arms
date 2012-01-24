static var canLock : boolean = true;

function Start ()
{
	// Start out in paused mode in web player
	
//	if (Application.platform == RuntimePlatform.OSXWebPlayer ||
//	    Application.platform == RuntimePlatform.WindowsWebPlayer)
//	{
	//	SetPause(true);
		canLock=true;
//	}
//	else
//	{
//		SetPause(true);
//		Screen.lockCursor = true;
//	}
}

function OnApplicationQuit ()
{
	Time.timeScale = 1;
}

function SetPause (pause : boolean)
{
	var player = GameObject.FindWithTag("Player");

	if(canLock){
		Input.ResetInputAxes();
		var gos : Object[] = FindObjectsOfType(GameObject);
		for (var go : GameObject in gos)
			go.SendMessage("DidPause", pause, SendMessageOptions.DontRequireReceiver);
	
		transform.position = Vector3.zero;
	
		if (pause)
		{
			Time.timeScale = 0;
			transform.position = Vector3 (.5, .5, 0);
			guiText.anchor = TextAnchor.MiddleCenter;
			player.BroadcastMessage("Freeze", SendMessageOptions.DontRequireReceiver);

		}
		else
		{
			guiText.anchor = TextAnchor.UpperCenter;
			transform.position = Vector3(.5, .1, 0);
			Time.timeScale = 1;
			player.BroadcastMessage("UnFreeze", SendMessageOptions.DontRequireReceiver);

		}
	}
}

//function DidPause (pause : boolean){		
//	if (canLock){
//		if (pause){
//		    // Show the button again
//		    guiText.enabled = false;
//			guiText.text = "Click to start playing";
//		} else {
		   	// Disable the button
//		   	guiText.enabled = false;
//		   	guiText.text = "Escape to show the cursor";
//			}
//		} else {
//			guiText.enabled = false;
//		}
function OnMouseDown ()
{
    // Lock the cursor
    if(canLock)
    	Screen.lockCursor = true;
}

private var wasLocked = false;

function Update ()
{
	if (Input.GetMouseButton(0) && canLock)
		Screen.lockCursor = true;
		

    // Did we lose cursor locking?
    // eg. because the user pressed escape
    // or because he switched to another application
    // or because some script set Screen.lockCursor = false;
    if (!Screen.lockCursor && wasLocked)
    {
        wasLocked = false;
        SetPause(true);
    }
    // Did we gain cursor locking?
    else if (Screen.lockCursor && !wasLocked)
    {
        wasLocked = true;
        SetPause(false);
    }
}
function Unlock () {
	    Screen.lockCursor = false;
	    canLock=false;
}
function Lock () {
	    Screen.lockCursor = true;
	    canLock=true;
}
