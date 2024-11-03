let transactions = {
    price:"0",
    type: "income",
    date: "2024",
    notes: "test",
}

localStorage.setItem("Transactions",JSON.stringify(transactions))

console.log(localStorage.getItem("Transactions"))