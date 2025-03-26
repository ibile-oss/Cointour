

class Player{
    constructor(game){
        this.game = game;
        this.width = 140;
        this.height = 120;
        this.x = 20;
        this.y = this.game.height * 3;
        this.speed = 5;
        this.lives = 3;
        this.maxLives = 10;
        this.image = document.getElementById('player');
        this.jets_image = document.getElementById('player_jets');
        this.frameX = 0;
        this.jetFrame = 1;
    }
    draw(context){
        // context.fillRect(this.x, this.y, this.width, this.height);
        // handle sprite frame
        if(this.game.keys.indexOf('s') > -1){
            this.frameX = 1;
        }else{
            this.frameX = 0;
        }
        context.drawImage(this.jets_image, this.jetFrame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update(){
        // horizontal movement
        if(this.game.keys.indexOf('ArrowLeft') > -1){
            this.x -= this.speed;
            this.jetFrame = 0;
        }else if(this.game.keys.indexOf('ArrowRight') > -1){
            this.x += this.speed;
            this.jetFrame = 2;
        }else{
           this.jetFrame = 1; 
        }
        // horizontal boundarles
        if(this.x < - this.width * 0.5) this.x = - this.width * 0.5;
        else if(this.x > this.game.width - this.width * 0.5) this.x = this.game.width - this.width * 0.5;
    } 
    shoot(){
        const projectile = this.game.getprojectile();
        if(projectile) projectile.start(this.x + this.width * 0.5, this.y);
    }
    restart(){
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height * 0.5;
        this.lives = 3;
    }
}

class Projectile{
    constructor(){
        this.width = 8;
        this.height = 40;
        this.x = 0;
        this.y = 0;
        this.speed = 20;
        this.free = true;
    }
    draw(context){
        if(!this.free){
            context.save();
            this.fillStyle = 'gold';
            context.fillRect(this.x, this.y, this.width, this.height);
            context.restore();
        }
    }
    update(){
        if(!this.free){
            this.y -= this.speed;
            if(this.y < -this.height) this.reset();
        }
    }
    start(x, y){
        this.x = x - this.width * 0.5;
        this.y = y;
        this.free = false;
    }
    reset(){
        this.free = true;
    }
}

class Enemy{
    constructor(game, positionX, positionY){
        this.game = game;
        this.width = this.game.enemysize;
        this.height = this.game.enemysize;
        this.x = 0;
        this.y = 0;
        this.positionX = positionX;
        this.positionY = positionY;
        this.markedForDeletion = false;
    }
    draw(context){
        // context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height); 
    }
    update(x, y){
        this.x = x + this.positionX;
        this.y = y + this.positionY;
        // check collision enemies - projectiles
        this.game.projectilespools.forEach(projectile =>{
           if(!projectile.free && this.game.checkcollision(this, projectile) && this.lives > 0){
            this.hit(1);
            projectile.reset();
           }
        });
        if(this.lives < 1){
            if(this.game.spriteUpdate)this.frameX++;
            if(this.frameX > this.maxFrame){
                this.markedForDeletion = true;
                if(!this.game.gameover)this.game.score += this.maxLives;
            }
        }
        // check collision enemies - player
        if(this.game.checkcollision(this, this.game.player) && this.lives > 0){
            this.lives = 0;
            this.game.player.lives--;
        }
        // lose condition
        if(this.y + this.height > this.game.height || this.game.player.lives < 1){
            this.game.gameover = true;
        }
    }
    hit(damage){
        this.lives -= damage;
    }
}

class Beetlemorph extends Enemy{
    constructor(game, positionX, positionY){
        super(game, positionX, positionY);
        this.image = document.getElementById('beetlmorph');
        this.frameX = 0;
        this.maxFrame = 2;
        this.frameY = Math.floor(Math.random() * 4);
        this.lives = 1;
        this.maxLives = this.lives;
    }
}

class Rhinomorph extends Enemy{
    constructor(game, positionX, positionY){
        super(game, positionX, positionY);
        this.image = document.getElementById('rhinomorph');
        this.frameX = 0;
        this.maxFrame = 2;
        this.frameY = Math.floor(Math.random() * 4);
        this.lives = 4;
        this.maxLives = this.lives;
    }
    hit(damage){
        this.lives -= damage;
        this.frameX = this.maxLives - Math.floor(this.lives)
    }
}

class Wave {
    constructor(game){
        this.game = game;
        this.width = this.game.columns * this.game.enemysize;
        this.height = this.game.rows * this.game.enemysize;
        this.x = this.width * 0.5 - this.width * 0.5;
        this.y = -this.height;
        this.speedX = Math.random() < 0.5 ? -1 : 1;
        this.speedY = 0;
        this.enemies = [];
        this.nexWaveTriger = false;
        this.create();
    }
    render(context){
        if(this.y < 0) this.y +=5;
        this.speedY = 0;
        if(this.x < 0 || this.x > this.game.width - this.width){
            this.speedX *=  -1;
            this.speedY = this.game.enemysize;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.enemies.forEach(enemy =>{
            enemy.update(this.x, this.y);
            enemy.draw(context);
        })
        this.enemies = this.enemies.filter(object => !object.markedForDeletion);
    }
    create(){
        for(let y = 0; y < this.game.rows; y++){
            for(let x = 0; x < this.game.columns; x++){
                let enemyX = x * this.game.enemysize;
                let enemyY = y * this.game.enemysize;
                if(Math.random() < 0.5){
                    this.enemies.push(new Rhinomorph(this.game, enemyX, enemyY));
                }else{
                    this.enemies.push(new Beetlemorph(this.game, enemyX, enemyY));
                }
            }
        }
    }
}

class Game{
    constructor(canvas){
        // this.ctx = ctx;
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.keys = [];
        this.player = new Player(this);

        this.projectilespools = [];
        this.numbersofprojectiles = 15;
        this.createprojectiles();
        this.fired = false;

        this.columns = 10;
        this.rows = 2;
        this.enemysize = 80;

        this.waves = [];
        this.waves.push(new Wave(this));
        this.waveCount = 1;

        this.spriteUpdate = false;
        this.spriteTimer = 0;
        this.spriteInterval = 120;
        this.restt = document.querySelector('.restart');
        this.lost = document.querySelector('.lostTT');
        

        this.score = 0;
        this.gameover = false;
        this.resize(window.innerWidth, window.innerHeight);
        // event listeners
        window.addEventListener('keydown', e => {
            if(this.keys.indexOf(e.key) === -1) this.keys.push(e.key);
            if(e.key === 's' && !this.fired) this.player.shoot();
            this.fired = true;
            // if(e.key === 'r' && this.gameover){
            //     this.restart();
            // } 
        });
        window.addEventListener('click', e =>{
            this.player.shoot();
        })
        window.addEventListener('keyup', e => {
            this.fired = false;
            const index = this.keys.indexOf(e.key);
            if(index > -1) this.keys.splice(index, 1);
        });

        window.addEventListener('resize', e => {
            this.resize(e.target.innerWidth, e.target.innerHeight)
        })
    }
    render(context, deltaTime){
        // sprite timing
        if(this.spriteTimer > this.spriteInterval){
            this.spriteUpdate = true;
            this.spriteTimer = 0;
        }else{
            this.spriteUpdate = false;
            this.spriteTimer += deltaTime;
        }
        this.drawStatusText(context);
        this.projectilespools.forEach(projectile =>{
            projectile.update();
            projectile.draw(context);
        })
        this.player.draw(context);
        this.player.update();
        this.waves.forEach(wave =>{
            wave.render(context);
            if(wave.enemies.length < 1 && !wave.nexWaveTriger && !this.gameover){
                this.newWave();
                this.waveCount++;
                wave.nexWaveTriger = true;
                if(this.player.lives < this.player.maxLives)this.player.lives++;
            }
        })
    }
    // create projectiles object pool
    createprojectiles(){
        for (let i = 0; i < this.numbersofprojectiles; i++) {
            this.projectilespools.push(new Projectile())
        }
    }
    // get free projectile object from the pool
    getprojectile(){
        for(let i = 0; i < this.projectilespools.length; i++){
            if(this.projectilespools[i].free) return this.projectilespools[i];
        }
    }
    // collision detection between 2 rectangles
    checkcollision(a, b){
        return(
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        )
    }
    drawStatusText(context){
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        // context.shadowColor = 'white';
        context.fillStyle = 'white'
        context.fillText('Score: ' + this.score, 20, 70);
        context.fillText('Wave: ' + this.waveCount, 20, 93); 
        for(let i = 0; i < this.player.maxLives; i++){
            context.strokeRect(20 + 20 *i,100,10,15);
        }
        for(let i = 0; i < this.player.lives; i++){
            context.fillRect(20 + 20 *i,100,10,15);
        }
        if(this.gameover){
            this.restt.style.setProperty('display','flex');
            context.textAlign = 'center';
            context.font = '70px Impact';
            context.fillText('GAME OVER', this.width * 0.5, this.height * 0.5);
            // context.font = '20px Impact';
            // context.fillStyle = 'white'
            // context.fillText('Press R to restart', this.width * 0.5, this.height * 0.6);
        }
        context.restore();
    }
    newWave(){
        if(Math.random() < 0.5 && this.columns * this.enemysize < this.waveCount * 0.5){
            this.columns++;
        }else if(this.rows * this.enemysize < this.height * 0.5){
            this.rows++;
        }
        this.waves.push(new Wave(this));
    }
    restart(){
        this.player.restart();
        this.columns = 10;
        this.rows = 2;
        this.waves = [];
        this.waves.push(new Wave(this));
        this.score = 0;
        this.gameover = false;
    }
    resize(width,height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        // this.ctx.fillStyle = "white";
        // this.ctx.strokeStyle = "transparent";
        // this.ctx.font = '16px Playfair Display';
        // this.ctx.textAlign = 'center';
        // this.ctx.textBaseline = 'middle';
    }
}

window.addEventListener('load', function(){
    const canvas = this.document.getElementById('canva1'); 
    const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'white';
    // ctx.strokeStyle = 'white';
    // ctx.font = '20px Impact';

    const game = new Game(canvas);

    let lastTime = 0;
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render(ctx, deltaTime);
        requestAnimationFrame(animate);
    }
    animate(0);
     
})