//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.

@CustomEditor(DecalAndPenetrationWizard)
class WizardEditor extends Editor{
	
	var cArray = new Array();
	var NameArrays : Array[];
	var Names = new Array();
	var boolArray : boolean[];
	var script;
	var sScript = wizardScripts.UseDecals;
	function OnInspectorGUI () {
		EditorGUIUtility.LookLikeInspector();
		EditorGUILayout.BeginVertical();
		sScript = target.selectedScript;
		target.selectedScript = EditorGUILayout.EnumPopup("  Script: ", target.selectedScript);
		if(sScript == wizardScripts.UseDecals){
			script = UseDecals;
		}
		if(sScript == wizardScripts.BulletPenetration){
			script = BulletPenetration;
		}
				if (GUILayout.Button(new GUIContent("Sort All Colliders By Name", "Finds all colliders in your scene and sorts them by name so that you can decide which objects should have the script"),"miniButton")){
					cArray.Clear();
					Names.Clear();
					var n : String;
					var nameIsInArray : boolean = false;
					cArray = FindObjectsOfType(Collider);
					for(var i=0; i< cArray.length; i++){
						nameIsInArray = false;
						n = cArray[i].name;
						for(var j=0; j < Names.length; j++){
							if(Names[j] == n){
								nameIsInArray = true;
								j = Names.length;
							}
						}
						if(!nameIsInArray){
							Names.Add(n);
						}
					}
					Names.Sort();		
					NameArrays = new Array(Names.length);
					boolArray = new Array(Names.length);
					for(i=0; i< cArray.length; i++){
						n = cArray[i].name;
						for(j=0; j < Names.length; j++){
							if(Names[j] == n){
								if(NameArrays[j] == null)
									NameArrays[j] = new Array();
								NameArrays[j].Add(cArray[i]);
								if(cArray[i].GetComponent(script) != null)
									boolArray[j] = true;
							}
						}
					}
				}
				if(Names.length > 0){
					EditorGUILayout.Separator();
					EditorGUILayout.BeginHorizontal();
					EditorGUILayout.TextField("    Collider Name");
					EditorGUILayout.TextField("Attach Sript");
					EditorGUILayout.EndHorizontal();
					EditorGUILayout.Separator();
				}
				for(var k=0; k < Names.length; k++){
					EditorGUILayout.BeginHorizontal();
					EditorGUILayout.TextField("    "+Names[k]);
					boolArray[k] = EditorGUILayout.Toggle("", boolArray[k]);		
					EditorGUILayout.EndHorizontal();

				}

		
		EditorGUILayout.EndVertical();
		
		if (GUILayout.Button(new GUIContent("Add/Remove Script", "Adds the selected script script to all Coliders selected, removes it from those that are unselected"), "miniButton")){
			for(i=0; i < Names.length; i++){
				if(boolArray[i]){
					for(j=0; j < NameArrays[i].length; j++){
						if(NameArrays[i][j].GetComponent(script) == null)
							NameArrays[i][j].gameObject.AddComponent(script);
					}
				} else {
					for(j=0; j < NameArrays[i].length; j++){
						if(NameArrays[i][j].GetComponent(script) != null)
							DestroyImmediate(NameArrays[i][j].gameObject.GetComponent(script));
					}
				}
			}

		}
	}
}