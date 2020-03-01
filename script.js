let bankOpen = true;
let balance = 500;

do {
  const welcome = prompt("Select (Q)uit, (W)ithdraw, (D)eposit, or (B)alance");

  switch(welcome) {
    case "q":
      bankOpen = false;
      alert('Thank you for banking with us!');
      break;
    case "b":
      text = 'Your balance is $' + balance.toString();
      alert(text);
      break;
    case "d":
      const depositAmount = Number(prompt('How much would you like to deposit?'));
      balance = depositAmount + balance;
      if (balance >= 50000) {
        alert('Sorry, please deposit less than $50,000');
      } else if (balance < 50000) {
        alert('Thank you! Your new balance is $' + balance);
      }
      break;
    case "w":
      const withdrawAmount = Number(prompt('How much would you like to withdraw?'));
      balance = balance - withdrawAmount;
      if (balance <= 0) {
        alert('Sorry, your withdraw is greater than your balance.')
      } else if (balance <= 299) {
        alert('Your new balance will be less than $300. Do you want to proceed?');
      } else if (balance >= 1) {
        alert('Thank you! Your new balance is $' + balance);
      }
      break;
    default:
      alert('Enter the appropriate option.');
  }
} while (bankOpen === true);
