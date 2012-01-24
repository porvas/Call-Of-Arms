class TagNameWindow extends EditorWindow {

    @MenuItem("GameObject/Mass Set Tags")
    static function Init () {
        // Get existing open window or if none, make a new one:
        var window : TagNameWindow = EditorWindow.GetWindow (TagNameWindow);
        window.Show ();
    }
    
    var tag: String;
    
    function OnGUI () {
        tag = EditorGUILayout.TagField("Tag name", tag);

        if (GUILayout.Button("Apply")) {
        	Undo.RegisterSceneUndo("Mass Set Tags");

		    for (var obj : GameObject in Selection.gameObjects) {
		        obj.tag = tag;
		    }
        }
    }
}