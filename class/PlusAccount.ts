import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    plusDeposit = (valor: number): void => {
        this.balance += valor + 10;
        console.log('Conta PlusDIO verificada. Acréscimo de R$10,00 reais ao saldo.');
    }
}