import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static _instancesRanger = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instancesRanger += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger._instancesRanger;
  }
}

export default Ranger;