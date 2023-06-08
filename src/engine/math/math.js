/**
 * VECTOR2D | TYPE
 * x: integer || float
 * y: integer || float
 * force:(optional) float: only use as a multiplier.
 * the size of the vector should determine the force
 */

class VECTOR2D {
    x
    y
    force
    constructor(x, y, force=null){
        this.x = x; this.y = y; force ? this.force = force : null;
    }
    get x(){return this.x}; get y(){return this.y};
    get size(){return Math.sqrt(((this.x*this.x)+(this.y*this.y)))};
    set x(value){this.x = value};
    set y(value){this.y = value};
}

/**
 * COORDINATE | TYPE
 * x: integer
 * y: integer 
 */
class COORDINATE {
    x
    y
    constructor(x, y){
        this.x = x; this.y = y;
    }
    get x(){return this.x}; get y(){return this.y};
    set x(value){this.x = value};
    set y(value){this.y = value};
}


module.exports = {
    VECTOR2D,
    COORDINATE
}