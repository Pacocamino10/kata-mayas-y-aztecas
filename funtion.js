class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }

  attack() {
    return this.power;
  }

  defend(damage) {
    let vidaRestante = this.life - damage;
    console.log(vidaRestante);
  }
}

//---------------------------------------------------
class Maya extends Warrior {
  constructor(life, power) {
    super(life,power);
  }

  drinkColacao() {
    this.power += 10;
  }

  
}
//---------------------------------------------------
class Aztec extends Warrior {
  constructor(life, power) {
    super(life,power);
  }

  drinkNesquik() {
    return this.power += 10;
    
  }

}

let wa1 =new Warrior(50,50);
let may1 =new Maya(50,50);
let az1 =new Aztec(50,50);

// azteca bebe agua
az1.drinkNesquik();
console.log(az1.power);

//maya bebe colacao
may1.drinkColacao();
console.log(may1.power);

//maya ataca azteca
az1.defend(may1.attack());

//azteca ataca a maya y maya defiende
may1.defend(az1.attack());



