document.getElementById("filter").addEventListener("click", () => {
    filter_minPrice()
    filter_maxPrice()

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


