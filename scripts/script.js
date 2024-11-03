localStorage.clear()
const saveTransaction = () => {
    let transactions = JSON.parse(localStorage.getItem("Transactions")) || []
    

    const newTransaction = {
        id: Date.now().toString(),
        price: document.getElementById("price").value,
        type: document.getElementById("type").value,
        date: document.getElementById("date").value,
        notes: document.getElementById("notes").value,
    }
    

    transactions.push(newTransaction)

    localStorage.setItem("Transactions", JSON.stringify(transactions))
    document.getElementById("transactionForm").reset()
}

const reloadLocalStorage  = () =>{
    let transaction_info_element=document.getElementById("data-info")
    
    let transactions =JSON.parse(localStorage.getItem("Transactions"))
    transaction_info_element.innerHTML=""
    transactions.forEach(transaction =>{
        transaction_info_element.innerHTML+=
        `<div class="flex row data black-txt" id="${transaction.id}">
            <div class="price">${transaction.price}</div>
            <div class="type">${transaction.type}</div>
            <div class="date">${transaction.date}</div>
            <div class="notes">${transaction.notes}</div>
            <div class="flex row action-btns black-txt">
                <button class="edit-btn">edit</button>
                <button class="delete-btn">delete</button>
            </div>
        </div>`
    } )

}

// event listeners

// read
document.getElementById("transactionForm").addEventListener("submit", (event) => {
    event.preventDefault()    
    saveTransaction()
    reloadLocalStorage()
    console.log(localStorage.getItem("Transactions"))
})

// delete
document.addEventListener("click", (event)=>{
    if(event.target.classList.contains("delete-btn")){
        event.target.parentElement.parentElement.remove()
    }
}
)

// edit
// document.addEventListener("click", (event)=>{
//     if(event.target.classList.contains("edit-btn")){
//         let transaction_id_edit = event.target.parentElement.parentElement.getAttribute("id")
        
//         let transaction_info_element=document.getElementById("transaction-info")
//         transaction_info_element.getElementById("price")


//         // let index = transactions.findIndex(id => id == transactionID)

//     }
// }
// )




