private var thisScript : MakePersistent;

function Awake () : void {
    //Only allow ONE instance of this script, ever(!)
    if(thisScript!=null && thisScript!=this){
        Destroy(this.gameObject);
        return;
    }
    thisScript= this;
    
    //The actual function..
    DontDestroyOnLoad(this);
}
		

