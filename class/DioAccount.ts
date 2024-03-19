export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (valor: number): void => {
   if(this.validateStatus()){
      this.balance += valor;
      return console.log(`Você depositou R$${valor},00 reais.`);
    }

  }

  withdraw = (valor: number): void => {
    if(this.validateStatus() && this.balance > valor){
      this.balance -= valor;
      return console.log(`Você sacou R$${valor},00 reais`);
    }
    console.log('Saldo insuficiente.');
  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
