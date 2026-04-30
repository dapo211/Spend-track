let expenses = [];

function addExpense() {
  const amount = document.getElementById("amount").value;

  if (!amount) return;

  const expense = {
    amount: amount,
    date: new Date().toLocaleString()
  };

  expenses.push(expense);

  document.getElementById("amount").value = "";

  renderExpenses();
}

function renderExpenses() {
  const history = document.getElementById("history");

  history.innerHTML = "";

  expenses.forEach(exp => {
    const div = document.createElement("div");

    div.style.padding = "10px";
    div.style.marginTop = "10px";
    div.style.background = "#121826";
    div.style.borderRadius = "12px";

    div.innerHTML = `
      <strong>₦${exp.amount}</strong><br>
      <small>${exp.date}</small>
    `;

    history.appendChild(div);
  });
}