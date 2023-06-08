const {VECTOR2D, COORDINATE} = require('./math/math');
const { OBJECTS } = require('./obj/main');
const { RENDERER } = require('./renderer');

const ParticleEngine = {
    math: {
        vector2d: VECTOR2D,
        coordinate: COORDINATE
    },
    objects: {
        particle: OBJECTS.particle
    },
    renderer: RENDERER
};

module.exports = {ParticleEngine};