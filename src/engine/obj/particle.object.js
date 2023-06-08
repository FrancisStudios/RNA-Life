const { COORDINATE } = require('../math/math');

/**
 * PARTICLE | OBJECT | TYPE
 * x: integer || float
 * y: integer || float
 * force:(optional) float: only use as a multiplier.
 * the size of the vector should determine the force
 */
class PARTICLE {
    coords;
    constructor(x, y){
        this.coords = new COORDINATE(x, y);
    }
    get get(){return this.coords};
    set setX(x){this.coords.x = x};
    set setY(x){this.coords.y = y};
}

module.exports = {
    PARTICLE
}