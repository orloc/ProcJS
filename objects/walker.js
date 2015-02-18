var OWalker = function(p){

    var x = 0;
    var y = 0;

    function init(width, height) {
        x = width/2;
        y = height/2;
    }

    function display() {
        p.stroke(0);
        p.point(x,y);
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function step() {
        var choice = parseInt(getRandomArbitrary(0,4));
        switch(choice){
            case 0: x = x+3; break;
            case 1: x = x-3; break;
            case 2: y = y+3; break;
            case 3: y = y-3; break;
        }
    }

    p.setup = function(){
        var width = 640; 
        var height = 360;
        p.size(width, height);
        p.background(225);
        init(width, height);
    }

    p.draw = function(){
        step();
        display();
    }

};
