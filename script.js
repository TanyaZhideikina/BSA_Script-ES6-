class Fighter{
    constructor(name, power = 100, health = 100){
        this.name = name;
        this.power = power;
        this.health = health;
    };
    
    setDamage(damage = 10){
        this.health = this.health - damage;
        console.log(`Health: ${this.health}.` );
    } 
    
    hit(enemy, point = 1){
        damage = point * this.power;
        enemy.setDamage(damage);
    }
}

class ImprovedFighter extends Fighter{
    doubleHit(enemy, point){
        super.hit(enemy, point*2);
    }
    
}

let fighter = new Fighter('Elf', 200, 100);
let improvedFighter = new ImprovedFighter('Gnom', 300, 100);

function fight(fighter, improvedFighter, ...point){
    
}