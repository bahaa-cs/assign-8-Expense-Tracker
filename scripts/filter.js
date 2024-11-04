document.getElementById("filter").addEventListener("click", () => {
    let minPrice = Number(document.getElementById("min-price-filter").value)
    
    let newTransactions = transactions.filter(transaction => {
       return Number(transaction.price) >= minPrice
    })
    localStorage.setItem("newTransactions", JSON.stringify(newTransactions))
    reloadLocalStorage(newTransactions)
    console.log(transactions)
    console.log(newTransactions)
});