const person = {
  name: "Lutmira",
  balance: 999999,
};

const updateBalanceDisplay = () =>
  (document.getElementById("balance").textContent = person.balance);

const withdraw = (person, amount) => {
  if (amount > person.balance) {
    alert("Withdrawal cannot be processed due to insufficient funds.");
  } else {
    person.balance -= amount;
    updateBalanceDisplay();
  }
};

const performWithdrawal = () => {
  const amountInput = document.getElementById("amount");
  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount) && amount > 0) {
    withdraw(person, amount);
    amountInput.value = "";
  } else {
    alert("Please enter a valid amount.");
  }
};

updateBalanceDisplay();
