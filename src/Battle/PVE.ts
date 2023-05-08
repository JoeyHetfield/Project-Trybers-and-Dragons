import Battle from './Battle';
import Monster from '../Monster';
import SimpleFighter from '../Fighter/SimpleFighter';
import Fighter from '../Fighter';
import Character from '../Character';

class PVE extends Battle {
  private _player: Fighter | Character;
  private _monsters: Monster[] | SimpleFighter[] | Fighter[];

  constructor(
    player: Fighter | Character, 
    monsters: Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  playersHaveLife() : boolean {
    return this._player.lifePoints > 0;
  }

  monstersHaveLife() : boolean {
    return this._monsters.some((monster) => monster.lifePoints > 0);
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this.playersHaveLife() && this.monstersHaveLife()) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });
    return super.fight();
  }
}
export default PVE;