



function main(){
    var p2=document.getElementById('plate2');
    context = p2.getContext('2d');
    main = new Image();
    main.src = 'img/forest.jpg';
    main.onload = function(){
        context.drawImage(main, 0,0);
    }
}

function balls(){
    var p2=document.getElementById('plate2');
    context = p2.getContext('2d');
    ball = new Image();
    ball.src = 'img/balls.png';
    ball.onload = function(){
        context.drawImage(ball, 335, 270);
        context.drawImage(ball, 45, 270);
        context.drawImage(ball, 108, 110);
        context.drawImage(ball, 280, 108);
    }
}

function starr(){
    var p2=document.getElementById('plate2');
    context = p2.getContext('2d');
    star = new Image();
    star.src = 'img/star.png';
    star.onload = function(){
        context.drawImage(star, 171, 1);
    }
}

function gifts(){
    var p2=document.getElementById('plate2');
    context = p2.getContext('2d');
    gift = new Image();
    gift.src = 'img/gifts.png';
    gift.onload = function(){
        context.drawImage(gift, 40, 410);
    }
}

function ssanta(){
    var p2=document.getElementById('plate2');
    context = p2.getContext('2d');
    santa = new Image();
    santa.src = 'img/santa.png';
    santa.onload = function(){
        context.drawImage(santa, 230, 430);
    }
}

function garlannd(){
    var p2=document.getElementById('plate2');
    context = p2.getContext('2d');
    garland = new Image();
    garland.src = 'img/garland.png';
    garland.onload = function(){
        context.drawImage(garland, 230, 220);
        context.drawImage(garland, 100, 330);
    }

    garland2 = new Image();
    garland2.src = 'img/garland2.png';
    garland2.onload = function(){
        context.drawImage(garland2, 100, 220);
        context.drawImage(garland2, 220, 330);
    }
}

function lights(){
    var p2=document.getElementById('plate2');
    context = p2.getContext('2d');
    light = new Image();
    light.src = 'img/lights.png';
    light.onload = function(){
        context.drawImage(light, 230, 220);
        context.drawImage(light, 100, 330);
        context.drawImage(light, 130, 150);
        context.drawImage(light, 150, 40);
    }

}

function decor(){

    balls();
    starr();
    gifts();
    ssanta();
    garlannd();
    lights();

}

function draww(){
    var p2=document.getElementById("plate2").getContext("2d");
    p2.beginPath();
    p2.lineWidth="3";
    p2.strokeStyle="Black";
    p2.fillStyle="#d2691e";
    p2.lineTo(181,494);
    p2.lineTo(241,494);
    p2.lineTo(241,424);
    p2.lineTo(181,424);
    p2.lineTo(181,496);
    p2.fill();
    p2.stroke();
    p2.beginPath();
    p2.lineWidth="3";
    p2.strokeStyle="Black";
    p2.fillStyle="#3cb371";
    p2.lineTo(30,419);
    p2.lineTo(405,424);
    p2.lineTo(270,271);
    p2.lineTo(371,271);
    p2.lineTo(226,109);
    p2.lineTo(296,109);
    p2.lineTo(197,32);
    p2.lineTo(100,109);
    p2.lineTo(170,109);
    p2.lineTo(52,271);
    p2.lineTo(152,271);
    p2.lineTo(31,420);
    p2.fill();
    p2.stroke();
}

function kustuta(){
    var p2=document.getElementById("plate2").getContext("2d");
    p2.clearRect(0, 0, 500, 500);
}

function kustuta2(){
    var p2=document.getElementById("plate2").getContext("2d");
    p2.clearRect(0, 0, 500, 500);
    draww();
}


