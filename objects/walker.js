var OWalker = function(p){

    var x = 0;
    var y = 0;

    function init(width, height) {
        x = width/2;
        y = height/2;
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function display() {
        p.noStroke();
        p.fill(getRandomArbitrary(0,255),getRandomArbitrary(0,255),getRandomArbitrary(0,255));
        p.ellipse(x,y, 16, 16);
    }

    function step() {
        var choice = parseInt(getRandomArbitrary(0,4));
        switch(choice){
            case 0: x = x+5; break;
            case 1: x = x-5; break;
            case 2: y = y+5; break;
            case 3: y = y-5; break;
        }
    }

    p.setup = function(){
        var width = 640; 
        var height = 360;
        p.size(width, height);
        init(width, height);
    }

    p.draw = function(){
        step();
        display();
    }

};
