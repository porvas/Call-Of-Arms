/* 
*  This file is part of the Unity networking tutorial by M2H (http://www.M2H.nl)
*  The original author of this code is Mike Hergaarden, even though some small parts 
*  are copied from the Unity tutorials/manuals.
*  Feel free to use this code for your own projects, drop us a line if you made something exciting! 
*/
#pragma strict
#pragma implicit
#pragma downcast

/// MouseLook rotates the transform based on the mouse delta.
/// Minimum and Maximum values can be used to constrain the possible rotation

/// To make an FPS style character:
/// - Create a capsule.
/// - Add a rigid body to the capsule
/// - Add the MouseLook script to the capsule.
///   -> Set the mouse look to use LookX. (You want to only turn character but not tilt it)
/// - Add FPSWalker script to the capsule

/// - Create a camera. Make the camera a child of the capsule. Reset it's transform.
/// - Add a MouseLook script to the camera.
///   -> Set the mouse look to use LookY. (You want the camera to tilt up and down like a head. The character already turns.)

enum RotationAxess { MouseXAndY = 0, MouseX = 1, MouseY = 2 }
	
public var axes : RotationAxes = RotationAxes.MouseXAndY;
public var sensitivityX : float= 15;
public var sensitivityY : float= 15;
public var offsetY :float = 0;
public var minimumX : float= -360;
public var maximumX : float= 360;

public var  minimumY : float= -60;
public var maximumY : float= 60;

var rotationX : float= 0;
var rotationY : float = 0;

var originalRotation : Quaternion;
var lastRotation : Quaternion;
public var yangle:float;

function LateUpdate ()
{
	//if (showingBox)return;
	if(!Screen.lockCursor){
		return;
	}
	
	var yQuaternion : Quaternion;
	var xQuaternion : Quaternion;
	
	if (axes == RotationAxes.MouseXAndY)
	{
		// Read the mouse input axis
		rotationX += Input.GetAxis("Mouse X") * sensitivityX;
		rotationY += Input.GetAxis("Mouse Y") * sensitivityY;

		rotationX = ClampAngle (rotationX, minimumX, maximumX);
		rotationY = ClampAngle (rotationY, minimumY, maximumY);
		
		xQuaternion = Quaternion.AngleAxis (rotationX, Vector3.up);
		yQuaternion = Quaternion.AngleAxis (rotationY, Vector3.left);
		
		transform.localRotation = originalRotation * xQuaternion * yQuaternion;
	}
	else if (axes == RotationAxes.MouseX)
	{
		rotationX += Input.GetAxis("Mouse X") * sensitivityX;
		rotationX = ClampAngle (rotationX, minimumX, maximumX);

		xQuaternion  = Quaternion.AngleAxis (rotationX, Vector3.up);
		transform.localRotation = originalRotation * xQuaternion;
	}
	else
	{
		rotationY += Input.GetAxis("Mouse Y") * sensitivityY;
		rotationY = ClampAngle (rotationY, minimumY, maximumY) + offsetY;
		yangle=-rotationY;
		yQuaternion = Quaternion.AngleAxis (rotationY, Vector3.left);
		
		var tempRot : Quaternion = originalRotation * yQuaternion;
		lastRotation = transform.localRotation; // class variable, set this at the top of the script!  We use it to store the delta between frames, and then decide whether to make an RPC call or not
			
		// We only want to send out true updates.  Don't spam network traffic if we don't need to!
		//Debug.Log("Rotation angle difference = " + Quaternion.Angle(lastRotation, tempRot));
		if( Quaternion.Angle(lastRotation, tempRot) == 0 )
			return;
		else {
			transform.localRotation = tempRot;
			lastRotation = transform.localRotation;
			//a=networkView;
			//if (a.enabled==true)	networkView.RPC("SetLocalRotation", RPCMode.Others, tempRot);
		}

	}
	offsetY = 0;
	//if (networkView.enabled==true)	networkView.RPC("SetOffsetY", RPCMode.Others);

}
	
function Start ()
{
	// Make the rigid body not change rotation
	if (rigidbody){
		rigidbody.freezeRotation = true;
	}
	originalRotation = transform.localRotation;
}
	
static function ClampAngle ( angle : float,  min : float, max :  float) : float
{
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}

@RPC
function SetLocalRotation( newRot : Quaternion ) {
	transform.localRotation = newRot;
}
@RPC
function SetOffsetY() {
	var offset:MouseLookB=transform.GetComponent("MouseLookB");
	offset.offsetY = 0;
}
