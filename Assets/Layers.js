static var ignoreRaycast = 2;
//any other layers you would like to access can go here
static var Default = 0;
static var Weapon = 8;

static function CreateInclusiveMask(layers : int[]) : LayerMask{
    var m : int = 0;
    for (l=0;l<layers.length;l++) {
        m |= (1<<layers[l]);
    }
    return m;
}

static function CreateExclusiveMask(layers : int[]) : LayerMask{
    var m : int = 0;
    for (l=0;l<layers.length;l++) {
        m |= (1<<layers[l]);
    }
    return ~m;
}