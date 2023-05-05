import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string, special: number, cost: number) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract energyType(): EnergyType;
}

export default Archetype;