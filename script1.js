const expenses = [];

document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;

    if (!description || isNaN(amount) || amount <= 0 || !date) {
        alert("Please enter valid details.");
        return;
    }

    const expense = { description, amount, date };
    expenses.push(expense);
    displayExpenses();
});

function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = "";
    
    let total = 0;
    expenses.forEach(exp => {
        total += exp.amount;
        const li = document.createElement('li');
        li.textContent = `${exp.description} - Rs. ${exp.amount} on ${exp.date}`;
        expenseList.appendChild(li);
    });

    document.getElementById('totalAmount').textContent = total;
}
