var OWalker = function(p){

    var x = 0;
    var y = 0;
    var tx = 0;
    var ty = 10000;

    var width = 640; 
    var height = 360;

    function init() {
        x = width/2;
        y = height/2;
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function display() {
        p.fill(200);
        p.ellipse(x,y, 16, 16);
    }

    function step() {
        x = p.map(p.noise(tx), 0, 1, 0, width);
        y = p.map(p.noise(ty), 0, 1, 0, height);

        tx+= 0.01;
        ty+= 0.01;
        
    }

    p.setup = function(){
        p.frameRate(30);
        p.size(width, height);
        init(width, height);
    }

    p.draw = function(){
        step();
        display();
    }

};
