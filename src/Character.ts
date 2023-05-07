import Fighter from './Fighter';
import Race from './Races';
import Archetype from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';
import Elf from './Races/Elf';
import Mage from './Archetypes/Mage';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  lifePoints: number;
  strength: number;
  defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this.lifePoints = this._maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this._archetype = new Mage(this._name);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this.lifePoints -= damage;
    } else {
      this.lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this.lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = this.strength;
    return enemy.receiveDamage(damage);
  }

  levelUp(): void {
    this.strength += getRandomInt(1, 10);
    this.defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this.lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter) : void {
    const BolaDeFogo = 10;
    const damage = this.strength + BolaDeFogo;
    this._energy.amount -= 5;
    return enemy.receiveDamage(damage);
  }

  get race(): Race {
    return this._race;
  }
}

export default Character;