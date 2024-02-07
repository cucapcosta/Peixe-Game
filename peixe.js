var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene:{
        preload:preload,
        create:create,
        update:update
    }
}
var game = new Phaser.Game(config);
var baicu;
var otropeixe;
var arrows;

function preload(){
    this.load.image('mar',  'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/baiacu.png');
    this.load.image('otropeixe', 'assets/peixes/peixe_serio.png')
    this.load.image('chao', 'assets/areia.jpg')
}

function create(){
    this.add.image(400,300,'mar');
    this.add.image(400,525,'logo').setScale(0.5);
    baicu = this.add.image(400,300,'peixe').setScale(0.5,0.5)
    baicu.setFlip(true, false);
    otropeixe = this.add.image(700, 100, 'otropeixe')
    this.add.image(400, 900, 'chao')
    
}

function update(){
    baicu.x = this.input.x;
    baicu.y = this.input.y;
   
    
}
