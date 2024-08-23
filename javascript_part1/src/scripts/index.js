const person = {
  name: "Lutmira",
  balance: 999999,
};

const updateBalanceDisplay = () => {
  document.getElementById("balance").textContent = person.balance;
};

const withdraw = ({ balance }, amount) => {
  amount > balance
    ? alert("Withdrawal cannot be processed due to insufficient funds.")
    : ((person.balance -= amount), updateBalanceDisplay());
};

const performWithdrawal = () => {
  const amountInput = document.getElementById("amount");
  const amount = parseFloat(amountInput.value);

  !isNaN(amount) && amount > 0
    ? (withdraw(person, amount), (amountInput.value = ""))
    : alert("Please enter a valid amount.");
};

updateBalanceDisplay();
