let welcome = prompt('Select Quit, Withdraw, Deposit, or Balance');

let bankOption = 'Select Quit, Withdraw, Deposit, or Balance';

switch(welcome) {
  case "Quit":
    text = "Thank you for banking with us. GoodBye!";
    alert(text);
    break;
  case "Balance":
    total = 'Your balance is $500.'
    alert(total);
    prompt(bankOption);
  case "Withdraw":
    text = "How much would you like to withdraw?";
    total = 'Your balance is $500.'
    prompt(text);
    alert(total);
    prompt(bankOption);
  case "Deposit":
    text = 'How much would you like to deposit?';
    total = 'Your balance is $500.'
    prompt(text);
    alert(total);
    prompt(bankOption);
}
