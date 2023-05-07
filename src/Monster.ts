import Character from './Character';
import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 83;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter | Character): number {
    const damage = this.strength;
    return enemy.receiveDamage(damage);
  }
}

export default Monster;