//FPS Constructor - Weapons
//Copyright© Dastardly Banana Productions 2010
//This script, and all others contained within the Dastardly Banana Weapons Package, may not be shared or redistributed. They can be used in games, either commerical or non-commercial, as long as Dastardly Banana Productions is attributed in the credits.
//Permissions beyond the scope of this license may be available at mailto://info@dastardlybanana.com.

@CustomEditor (UseDecals)
class UseDecalsEditor extends Editor {
	
	var _decalSet = decalSets.a;
	var manager : DecalManager;
	 
	
	function OnInspectorGUI () {
		EditorGUIUtility.LookLikeInspector();
		EditorGUILayout.BeginVertical();
		
		manager = FindObjectOfType(DecalManager);
		target.decalSet = EditorGUILayout.EnumPopup("  Decal Set: ", target.decalSet);
		_decalSet = target.decalSet;
		
		EditorGUILayout.Separator();
		EditorGUILayout.TextField("     Edit decals in the DecalManager Script");
		EditorGUILayout.Separator();
		
		if(_decalSet == decalSets.a){
			manager.bulletDecal0 = EditorGUILayout.ObjectField("  Bullet Decal: ", manager.bulletDecal0, GameObject);
			manager.launcherDecal0 = EditorGUILayout.ObjectField("  Launcher Decal: ", manager.launcherDecal0, GameObject);
			manager.laserDecal0 = EditorGUILayout.ObjectField("  Laser Decal: ", manager.laserDecal0, GameObject);
		}
		
		if(_decalSet == decalSets.b){
			manager.bulletDecal1 = EditorGUILayout.ObjectField("  Bullet Decal: ", manager.bulletDecal1, GameObject);
			manager.launcherDecal1 = EditorGUILayout.ObjectField("  Launcher Decal: ", manager.launcherDecal1, GameObject);
			manager.laserDecal1 = EditorGUILayout.ObjectField("  Laser Decal: ", manager.laserDecal1, GameObject);
		}
		
		if(_decalSet == decalSets.c){
			manager.bulletDecal2 = EditorGUILayout.ObjectField("  Bullet Decal: ", manager.bulletDecal2, GameObject);
			manager.launcherDecal2 = EditorGUILayout.ObjectField("  Launcher Decal: ", manager.launcherDecal2, GameObject);
			manager.laserDecal2 = EditorGUILayout.ObjectField("  Laser Decal: ", manager.laserDecal2, GameObject);
		}
		
		if(_decalSet == decalSets.d){
			manager.bulletDecal3 = EditorGUILayout.ObjectField("  Bullet Decal: ", manager.bulletDecal3, GameObject);
			manager.launcherDecal3 = EditorGUILayout.ObjectField("  Launcher Decal: ", manager.launcherDecal3, GameObject);
			manager.laserDecal3 = EditorGUILayout.ObjectField("  Laser Decal: ", manager.laserDecal3, GameObject);
		}
		
		if(_decalSet == decalSets.e){
			manager.bulletDecal4 = EditorGUILayout.ObjectField("  Bullet Decal: ", manager.bulletDecal4, GameObject);
			manager.launcherDecal4 = EditorGUILayout.ObjectField("  Launcher Decal: ", manager.launcherDecal4, GameObject);
			manager.laserDecal4 = EditorGUILayout.ObjectField("  Laser Decal: ", manager.laserDecal4, GameObject);
		}

		EditorGUILayout.Separator();
		EditorGUILayout.EndVertical();
		
	}
}