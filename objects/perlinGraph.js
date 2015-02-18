var PerlinGraph = function(p){
    var tx = 0,  ty = 10000;
    var  x = 0,   y = 0;

    var done = false;

    var width = 640; 
    var height = 360;

    function init() {
        x = 0;
        y = 0;

        p.background(0);

    }

    p.setup = function(){
        p.size(width, height);
        p.frameRate(230);
        init();
    }

    p.draw = function(){
        if (!done){
            p.noStroke();
            var n = p.noise(tx,ty);
            var bright = p.brightness(p.map(n, 0, 1, 0, 255));

            p.fill(p.color(bright));
            p.rect(x,y, 8, 8);

            if (x == width){
                if (y+8 == height){
                    done = true;
                } else {
                    y=y+8;
                }
                x = 0;
            } else { 
               x =x+8;
            }
        }

        tx+=0.01; ty+=0.01;
    }
};
