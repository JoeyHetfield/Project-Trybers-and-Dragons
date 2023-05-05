// O arquivo foi criado no diretório src/Races/ e chamar Race.ts;
// name e dexterity devem ser recebidos como parâmetros e inicializados no construtor.
// Os atributos da classe Race podem ser lidos, mas não podem ser alterados:
// name deve retornar o tipo string;
// dexterity deve retornar o tipo number.
// A classe Race deve ter um método estático chamado createdRacesInstances, que retorna um number;
// Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race;
// Cada raça terá seu número máximo de instâncias, que será definido dentro de cada classe especializada;
// Na classe Race, o método deve lançar um erro com a mensagem Not implemented.
// A classe Race deve ter um getter abstrato chamado maxLifePoints que retorna um number;
// Esse número corresponde à quantidade máxima de pontos de vida da raça;
// Cada raça terá seu número máximo de pontos, que será definido dentro de cada classe especializada;
// Na classe Race deve estar apenas a assinatura do método.

class Race {
  private name: string;
  private dexterity: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  public get getName(): string {
    return this.name;
  }

  public get getDexterity(): number {
    return this.dexterity;
  }
}

export default Race;