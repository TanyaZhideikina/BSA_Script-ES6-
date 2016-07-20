class Fighter{
    constructor(name, power = 100, health = 100){
        this.name = name;
        this.power = power;
        this.health = health;
    };
    
    setDamage(damage = 10){
        this.health = this.health - damage;
        console.log(`${this.name}'s health: ${this.health}.` );
    } 
    
    hit(enemy, point = 1){
        var damage = point * this.power;
        enemy.setDamage(damage);
        console.log(`${this.name} hit ${enemy.name}.`);
    }
}

class ImprovedFighter extends Fighter{
    doubleHit(enemy, point){
        super.hit(enemy, point*2);
        console.log(`${this.name} hit ${enemy.name}.`);
    }
    
}

class WeakFighter extends ImprovedFighter{
    protect(enemy, point){
         super.hit(enemy ,point/2);
         console.log(`${this.name} hit ${enemy.name}.`);
    }
} 

let fighter = new Fighter('Elf', 2, 1000);
let improvedFighter = new ImprovedFighter('Gnom', 3, 1000);
let weakFighter = new WeakFighter('Magitian', 3, 1000);


function fight(fighter, improvedFighter, weakFighter){
	let point = 10;
    
    do{
        var items = [fighter, improvedFighter, weakFighter];
        var fistFighter = items[Math.floor(Math.random()*items.length)]; 
        var secondFighter = items[Math.floor(Math.random()*items.length)]; 
        
        if(fistFighter != secondFighter){
            if (fistFighter === fighter){
                fistFighter.hit(secondFighter, point);
            }
            if (fistFighter === improvedFighter){
                fistFighter.doubleHit(secondFighter, point);
            }
            if (fistFighter === weakFighter){
                fistFighter.protect(secondFighter, point);
            }
        }
        
        if (fighter.health <= 0 && improvedFighter.health <= 0 && weakFighter.health > 0) {
            console.log("The winner is " + weakFighter.name);
			break;
		} else if (fighter.health <= 0 && weakFighter.health <= 0 && improvedFighter.health > 0) {
            console.log("The winner is " + improvedFighter.name);
			break;
		} else if (weakFighter.health <= 0 && improvedFighter.health <= 0 && fighter.health > 0) {
            console.log("The winner is " + fighter.name);
			break;
		}
	   }
    while(fighter.health >= 0 || improvedFighter.health >= 0 || weakFighter.health >= 0) 
}

fight(fighter, improvedFighter, weakFighter);