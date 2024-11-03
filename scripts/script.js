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

    let transaction_info_element=document.getElementById("transaction-info")
    
    let transactions =JSON.parse(localStorage.getItem("Transactions"))

    let length=transactions.length
    transaction_info_element.innerHTML+=
    
    `<div class="flex row data black-txt" id="${length}">
        <div class="price">${transactions[length-1].price}</div>
        <div class="type">${transactions[length-1].type}</div>
        <div class="date">${transactions[length-1].date}</div>
        <div class="notes">${transactions[length-1].notes}</div>
        <div class="flex row action-btns black-txt">
            <button class="edit-btn">edit</button>
            <button class="delete-btn">delete</button>
        </div>
    </div>`


    console.log(localStorage.getItem("Transactions"))
})

