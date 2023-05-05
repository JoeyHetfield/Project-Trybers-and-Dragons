import Race from './Race';

// Cada raça deve possuir um número máximo de pontos de vida (maxLifePoints), que deve ser inicializado em seu construtor:
// A raça Dwarf deve receber 80 pontos de vida;
// Não se esqueça de implementar o(s) método(s) necessário(s) após estender a classe abstrata Race;
// Não se esqueça de fazer a sobrescrita (override) do(s) método(s) necessário(s)
// que será verificado
// dragon_face Para as classe que herdam de Race:
// A classe Dwarf existe;
// A classe Dwarf herda de Race;
// O atributo name da classe Dwarf pode ser lido;
// O atributo dexterity da classe Dwarf pode ser lido;
// O método createdRacesInstances retorna o número correto de instâncias criadas da classe Dwarf;
// O atributo maxLifePoints da classe Dwarf existe e é igual a 80;

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}

export default Dwarf;