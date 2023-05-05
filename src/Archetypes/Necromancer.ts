import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static _instancesNecromancer = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instancesNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Necromancer._instancesNecromancer;
  }
}

export default Necromancer;