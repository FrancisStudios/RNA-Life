/**
 * PARTICLE | TYPE | RULE
 * class represents basic particle
 */

const { COORDINATE } = require("../../src/engine/math/math");

class PARTICLE {
    id;
    position;
    color;
    radius;

    /**
     * @param {string} id 
     * @param {COORDINATE} pos
     */
    constructor(id, pos={x:0, y:0}){
        this.id = id; this.position = pos; 
    }

    /**@param {string} _color*/
    setParticleColor(_color){ this.color = _color;}

    get where(){ return this.position; }

}

module.exports = {
    PARTICLE
}