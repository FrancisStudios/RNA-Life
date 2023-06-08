# Particle Engine Documentation
This is a particle simulation engine by FrancisStudios (https://github.com/francisstudios) and was developed in the RNA-Life project. 

## Renderer
The renderer is an instantiated class which contains all the data of a certain scene. Make sure to inject all data necessary for the visuals you want to see on the screen. A scene is an array of objects.

1) Setting up the renderer
- Make sure to instantiate the renderer class and pass the correct handler for the  target canvas
`let  renderer  =  new  ParticleEngine.renderer('#renderer');`
- Before doing anything with the canvas check if it is initialized. `ParticleEngine.renderer.ready()` returns a promise which resolves as soon as the `DomContentLoaded`
`renderer.ready.then(()=>{ renderer.init(); });`
**make sure to initialize the renderer onLoad** as it is seen on the example above

2) Setting up a scene