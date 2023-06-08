const {ParticleEngine} = require('./engine/main');

let vec2d = new ParticleEngine.math.vector2d(3, 4);
console.log(vec2d);

let renderer = new ParticleEngine.renderer('#renderer');

renderer.ready.then(()=>{
    renderer.init();
    //renderer.overwriteScene([{},{},{}]);
    renderer.gameLoop();
});

