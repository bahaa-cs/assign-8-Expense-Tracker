localStorage.clear()
const saveTransaction = () => {
    let transactions = JSON.parse(localStorage.getItem("Transactions")) || []
    
    const newTransaction = {
        price: document.getElementById("price").value,
        type: document.getElementById("type").value,
        date: document.getElementById("date").value,
        notes: document.getElementById("notes").value,
    }

    transactions.push(newTransaction)

    localStorage.setItem("Transactions", JSON.stringify(transactions))
    document.getElementById("transactionForm").reset()
}

document.getElementById("transactionForm").addEventListener("submit", (event) => {
    event.preventDefault()
    
    saveTransaction()
    console.log(localStorage.getItem("Transactions"))
})

