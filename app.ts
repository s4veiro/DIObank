import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount';

const peopleAccount = new PeopleAccount(12, 'Gabriel', 32);
const companyAccount = new CompanyAccount('Gabriel', 32);
const plusAccount = new PlusAccount('Gabriel', 32);

peopleAccount.deposit(34);

companyAccount.getLoan(50);

plusAccount.plusDeposit(100);


//saldo de cada conta
console.log(peopleAccount.balance);
console.log(companyAccount.balance);
console.log(plusAccount.balance);