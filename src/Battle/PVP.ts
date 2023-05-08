import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _player: Fighter;
  private _opponent: Fighter;
  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._player = player;
    this._opponent = opponent;
  }

  playersHaveLife() : boolean {
    return this._player.lifePoints > 0 && this._opponent.lifePoints > 0;
  }

  fight(): number {
    while (this.playersHaveLife()) {
      if (this.player.lifePoints > 0) {
        this._player.attack(this._opponent);
      }
      if (this._opponent.lifePoints > 0) {
        this._opponent.attack(this._player);
      }
    } return super.fight();
  }
}

export default PVP;