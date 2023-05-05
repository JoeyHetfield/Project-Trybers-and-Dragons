import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static _instancesMage = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instancesMage += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypesInstances(): number {
    return Mage._instancesMage;
  }
}

export default Mage;