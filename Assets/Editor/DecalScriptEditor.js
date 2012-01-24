//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.

@CustomEditor (DecalManager)
class DecalScriptEditor extends Editor {
	
	var _decalSet = decalSets.a;
	var decalObjects = new Array();
	

	function OnInspectorGUI () {
		EditorGUIUtility.LookLikeInspector();
		EditorGUILayout.BeginVertical();
		
		target.decalSet = EditorGUILayout.EnumPopup("  Decal Set: ", target.decalSet);
		_decalSet = target.decalSet;
		
		if(_decalSet == decalSets.a){
			target.bulletDecal0 = EditorGUILayout.ObjectField("  Bullet Decal: ", target.bulletDecal0, GameObject);
			target.launcherDecal0 = EditorGUILayout.ObjectField("  Launcher Decal: ", target.launcherDecal0, GameObject);
			target.laserDecal0 = EditorGUILayout.ObjectField("  Laser Decal: ", target.laserDecal0, GameObject);
		}
		
		if(_decalSet == decalSets.b){
			target.bulletDecal1 = EditorGUILayout.ObjectField("  Bullet Decal: ", target.bulletDecal1, GameObject);
			target.launcherDecal1 = EditorGUILayout.ObjectField("  Launcher Decal: ", target.launcherDecal1, GameObject);
			target.laserDecal1 = EditorGUILayout.ObjectField("  Laser Decal: ", target.laserDecal1, GameObject);
		}
		
		if(_decalSet == decalSets.c){
			target.bulletDecal2 = EditorGUILayout.ObjectField("  Bullet Decal: ", target.bulletDecal2, GameObject);
			target.launcherDecal2 = EditorGUILayout.ObjectField("  Launcher Decal: ", target.launcherDecal2, GameObject);
			target.laserDecal2 = EditorGUILayout.ObjectField("  Laser Decal: ", target.laserDecal2, GameObject);
		}
		
		if(_decalSet == decalSets.d){
			target.bulletDecal3 = EditorGUILayout.ObjectField("  Bullet Decal: ", target.bulletDecal3, GameObject);
			target.launcherDecal3 = EditorGUILayout.ObjectField("  Launcher Decal: ", target.launcherDecal3, GameObject);
			target.laserDecal3 = EditorGUILayout.ObjectField("  Laser Decal: ", target.laserDecal3, GameObject);
		}
		
		if(_decalSet == decalSets.e){
			target.bulletDecal4 = EditorGUILayout.ObjectField("  Bullet Decal: ", target.bulletDecal4, GameObject);
			target.launcherDecal4 = EditorGUILayout.ObjectField("  Launcher Decal: ", target.launcherDecal4, GameObject);
			target.laserDecal4 = EditorGUILayout.ObjectField("  Laser Decal: ", target.laserDecal4, GameObject);
		}
		
		EditorGUILayout.Separator();
		target.localMax = EditorGUILayout.IntField("  Maximum Decals: ", target.localMax);
		
		EditorGUILayout.EndVertical();
		EditorGUILayout.Separator();	
		
		EditorGUILayout.Separator();
		
	}
}