//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//Licensed under a Creative Commons Attribution-Share Alike 3.0 United States License.
//(http://creativecommons.org/licenses/by-sa/3.0/us/)
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.


@CustomEditor (aimmode)
class AimModeEditor extends Editor {
	var foldout : boolean;
	var foldout1 : boolean;

 	
	function OnInspectorGUI () {
		
		EditorGUIUtility.LookLikeInspector();
		EditorGUILayout.BeginVertical();
		
		target.aim = EditorGUILayout.Toggle("  Weapon Aims: ", target.aim);
		
		if(target.aim){
			if(!target.sightsZoom)
				target.scoped = EditorGUILayout.Toggle("  Has Scope: ", target.scoped);
			if(!target.scoped){
				target.sightsZoom = EditorGUILayout.Toggle("  Zoom Down Sights: ", target.sightsZoom);
			} else {
				target.scopeTexture = EditorGUILayout.ObjectField("  Scope Texture: ", target.scopeTexture, Texture);
			}
			if(target.scoped || target.sightsZoom)
				target.zoomFactor = EditorGUILayout.FloatField("  Zoom Factor: ", target.zoomFactor);
			target.aimRate = EditorGUILayout.FloatField("  Aim Rate: ", target.aimRate);
		}

		EditorGUILayout.Separator();  
		
		target.sprintDuration = EditorGUILayout.FloatField("  Sprint Duration: ", target.sprintDuration);
		target.sprintAdd = EditorGUILayout.FloatField("  Sprint Return Rate: ", target.sprintAdd);
		target.sprintLoss = EditorGUILayout.FloatField("  Sprint Loss Rate: ", target.sprintLoss);
		target.sprintMin = EditorGUILayout.FloatField("  Sprint Minimum: ", target.sprintMin);
		target.sprintNum = EditorGUILayout.FloatField("  Sprint Num: ", target.sprintNum);
		target.canSprint = EditorGUILayout.Toggle("  Can Sprint: ", target.canSprint);
		EditorGUILayout.Separator();  
	
		target.hasSecondary = EditorGUILayout.Toggle("  Has Secondary: ", target.hasSecondary);
		
		if(target.aim && target.hasSecondary){
			if(!target.sightsZoom2)
				target.scoped2 = EditorGUILayout.Toggle("  Has Scope: ", target.scoped2);
			if(!target.scoped2)
				target.sightsZoom2 = EditorGUILayout.Toggle("  Zoom Down Sights: ", target.sightsZoom2);
			if(target.scoped2 || target.sightsZoom2)
				target.zoomFactor2 = EditorGUILayout.FloatField("  Zoom Factor: ", target.zoomFactor2);
		}


		EditorGUILayout.EndVertical();

		EditorGUILayout.Separator();  
		foldout = EditorGUILayout.Foldout(foldout, "Configure Primary Weapon Positions");
			if(foldout) {
				EditorGUILayout.BeginVertical();
				EditorGUILayout.BeginHorizontal();
				
					if(GUILayout.Button(new GUIContent("Move to Hip Position", "Move Weapon to Hip Position"),"miniButton")) {
					target.transform.localPosition = target.hipPosition1;
					target.transform.localEulerAngles = target.hipRotation1;
				}
				if(GUILayout.Button(new GUIContent("Configure Hip Position", "Set Hip Position to Current Position"),"miniButton")) {
					target.hipPosition1 = target.transform.localPosition;
					target.hipRotation1 = target.transform.localEulerAngles;
				}
			EditorGUILayout.EndHorizontal();
			
			EditorGUILayout.BeginVertical("textField");
			target.hipPosition1 = EditorGUILayout.Vector3Field("hipPosition", target.hipPosition1);
			target.hipRotation1 = EditorGUILayout.Vector3Field("hipRotation", target.hipRotation1);
			EditorGUILayout.EndVertical();
			
		
			
			EditorGUILayout.Separator();  
		
			
			
			EditorGUILayout.BeginHorizontal();
		
				if(GUILayout.Button(new GUIContent("Move to Aim Position", "Move Weapon to Aim Position"),"miniButton")) {
					target.transform.localPosition = target.aimPosition1;
					target.transform.localEulerAngles = target.aimRotation1;
				}
					if(GUILayout.Button(new GUIContent("Configure Aim Position", "Set Aim Position to Current Position"),"miniButton")) {
					target.aimPosition1 = target.transform.localPosition;
					target.aimRotation1 = target.transform.localEulerAngles;
				}
			EditorGUILayout.EndHorizontal();
		
			EditorGUILayout.BeginVertical("textField");
			target.aimPosition1 = EditorGUILayout.Vector3Field("aimPosition", target.aimPosition1);
			target.aimRotation1 = EditorGUILayout.Vector3Field("aimRotation", target.aimRotation1);
			EditorGUILayout.EndVertical();



			EditorGUILayout.Separator(); 



			EditorGUILayout.BeginHorizontal();
		
				if(GUILayout.Button(new GUIContent("Move to Sprint Position", "Move Weapon to Sprint Position"),"miniButton")) {
					target.transform.localPosition = target.sprintPosition1;
					target.transform.localEulerAngles = target.sprintRotation1;
				}
					if(GUILayout.Button(new GUIContent("Configure Sprint Position", "Set Sprint Position to Position"),"miniButton")) {
					target.sprintPosition1 = target.transform.localPosition;
					target.sprintRotation1 = target.transform.localEulerAngles;
				}
			EditorGUILayout.EndHorizontal();
		
			EditorGUILayout.BeginVertical("textField");
			target.sprintPosition1 = EditorGUILayout.Vector3Field("sprintPosition", target.sprintPosition1);
			target.sprintRotation1 = EditorGUILayout.Vector3Field("sprintRotation", target.sprintRotation1);
			EditorGUILayout.EndVertical();

			EditorGUILayout.EndVertical();
		}
		
		///****************************
		///****************************

		if(target.hasSecondary){
		foldout1 = EditorGUILayout.Foldout(foldout1, "Configure Secondary Weapon Positions");
		if(foldout1) {
			EditorGUILayout.BeginVertical();
			EditorGUILayout.BeginHorizontal();
			
				if(GUILayout.Button(new GUIContent("Move to Hip Position", "Move Weapon to Hip Position"),"miniButton")) {
					target.transform.localPosition = target.hipPosition2;
					target.transform.localEulerAngles = target.hipRotation2;
				}
				if(GUILayout.Button(new GUIContent("Configure Hip Position", "Set Hip Position to Current Position"),"miniButton")) {
					target.hipPosition2 = target.transform.localPosition;
					target.hipRotation2 = target.transform.localEulerAngles;
				}
			EditorGUILayout.EndHorizontal();
			
			EditorGUILayout.BeginVertical("textField");
			target.hipPosition2 = EditorGUILayout.Vector3Field("hipPosition", target.hipPosition2);
			target.hipRotation2 = EditorGUILayout.Vector3Field("hipRotation", target.hipRotation2);
			EditorGUILayout.EndVertical();
			
		
			
			EditorGUILayout.Separator();  
		
			
			
			EditorGUILayout.BeginHorizontal();
		
				if(GUILayout.Button(new GUIContent("Move to Aim Position", "Move Weapon to Aim Position"),"miniButton")) {
					target.transform.localPosition = target.aimPosition2;
					target.transform.localEulerAngles = target.aimRotation2;
				}
					if(GUILayout.Button(new GUIContent("Configure Aim Position", "Set Aim Position to Current Position"),"miniButton")) {
					target.aimPosition2 = target.transform.localPosition;
					target.aimRotation2 = target.transform.localEulerAngles;
				}
			EditorGUILayout.EndHorizontal();
		
			EditorGUILayout.BeginVertical("textField");
			target.aimPosition2 = EditorGUILayout.Vector3Field("aimPosition", target.aimPosition2);
			target.aimRotation2 = EditorGUILayout.Vector3Field("aimRotation", target.aimRotation2);
			EditorGUILayout.EndVertical();



			EditorGUILayout.Separator(); 



			EditorGUILayout.BeginHorizontal();
		
				if(GUILayout.Button(new GUIContent("Move to Sprint Position", "Move Weapon to Sprint Position"),"miniButton")) {
					target.transform.localPosition = target.sprintPosition2;
					target.transform.localEulerAngles = target.sprintRotation2;
				}
					if(GUILayout.Button(new GUIContent("Configure Sprint Position", "Set Sprint Position to Position"),"miniButton")) {
					target.sprintPosition2 = target.transform.localPosition;
					target.sprintRotation2 = target.transform.localEulerAngles;
				}
			EditorGUILayout.EndHorizontal();
		
			EditorGUILayout.BeginVertical("textField");
			target.sprintPosition2 = EditorGUILayout.Vector3Field("sprintPosition", target.sprintPosition2);
			target.sprintRotation2 = EditorGUILayout.Vector3Field("sprintRotation", target.sprintRotation2);
			EditorGUILayout.EndVertical();

			EditorGUILayout.EndVertical();
	if (GUI.changed)
		EditorUtility.SetDirty (target);
}
		}
    }
}

