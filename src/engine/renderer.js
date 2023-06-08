/**
 * RENDERER | module
 * handler: STRING | ID
 * class contains all the render fns
 * rendering behaviour should be
 * implemented here
 */

class RENDERER {
    handler;
    world;
    canvas; /* : HTML element */
    context; /* 2D Canvas Context */
    ready;/* returns a promise | when DOM contents ready it's set to true */
    color; /* ctx.fillStyle */ 
    scene; 
    isGLEnabled;

    constructor(handler) {
        this.handler = handler;
        this.world = []; this.scene = []; this.isGLEnabled = false;
        
        this.ready = new Promise(resolve => {
            document.addEventListener('DOMContentLoaded', () => { resolve(true) });
        });
    }

    /**
     * INIT | method
     * sets up the canvas to be ready to use
     * no parameters accepted
     */
    init() {
        this.canvas = document.querySelector(this.handler);
        if (this.canvas) {
            this.context = this.canvas.getContext('2d');
            this.context.fillStyle = 'blue';
            this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
            this.context.fillStyle = 'black';
            console.log("%cRENDERER INIT SUCCESSFUL!", "color:green");
        } else console.log("%cRENDERER INIT FAILED", "color:red");
    }

    /**
     * COLOR | method
     * sets the draw tool color
     * native cty.fillStyle
     */
    set color(color){ this.color = color; }

    get scene(){ return this.scene; }
    overwriteScene(_newScene) { this.scene = _newScene; }
    addObject(_newObject) { this.scene.push(_newObject); }

    /**
     * GAMELOOP | method
     * starts the readup of scenes
     * loops through sceneObjects and renders them on the screen
     */
    gameLoop(){
        if (!this.isGLEnabled) this.isGLEnabled = true;
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        for(let sceneObjects = 0; sceneObjects = this.scene.length; sceneObjects++){

        }
       setInterval(() => {
        if(this.isGLEnabled) this.gameLoop();
       }, 0);
       console.log('a');
    }

}

module.exports = {
    RENDERER
}