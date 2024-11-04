document.getElementById("filter").addEventListener("click", () => {
    filter_minPrice()
    filter_maxPrice()
    filter_type()
    filter_date()
    filter_notes()

})
const filter_minPrice = () =>{
    let minPrice = Number(document.getElementById("min-price-filter").value)
    
    let newTransactions = transactions.filter(transaction => {
       return Number(transaction.price) >= minPrice
    })
    localStorage.setItem("newTransactions", JSON.stringify(newTransactions))
    if (minPrice!==0)
    reloadLocalStorage(newTransactions)
}

const filter_maxPrice = () =>{
    let maxPrice = Number(document.getElementById("max-price-filter").value)
    
    let newTransactions = transactions.filter(transaction => {
       return Number(transaction.price) <= maxPrice
    })
    localStorage.setItem("newTransactions", JSON.stringify(newTransactions))
    if(maxPrice!==0)
    reloadLocalStorage(newTransactions)
};

const filter_type = () =>{
    let type = document.getElementById("type-filter").value
    let newTransactions = transactions.filter(transaction => {
        return transaction.type == type
    })
    localStorage.setItem("newTransactions", JSON.stringify(newTransactions))
    if(type=="income" || type=="expense")
    reloadLocalStorage(newTransactions)

}

const filter_date = () =>{
    let date = document.getElementById("date-filter").value

    let newTransactions = transactions.filter(transaction => {
        return transaction.date== date
    })
    localStorage.setItem("newTransactions", JSON.stringify(newTransactions))
    if(date)
    reloadLocalStorage(newTransactions)

}

const filter_notes = () =>{
    let notes = document.getElementById("notes-filter").value

    let newTransactions = transactions.filter(transaction => {
        return transaction.notes.includes(notes)  })
    localStorage.setItem("newTransactions", JSON.stringify(newTransactions))
    if(notes)
    reloadLocalStorage(newTransactions)

}



