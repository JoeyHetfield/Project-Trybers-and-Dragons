import Battle from './Battle';
import Monster from '../Monster';
// import SimpleFighter from '../Fighter/SimpleFighter';
import Fighter from '../Fighter';

class PVE extends Battle {
  private _player: Fighter;
  private _monster: Monster[];

  constructor(player: Fighter, monster: Monster[]) {
    super(player);
    this._player = player;
    this._monster = monster;
  }
}

export default PVE;