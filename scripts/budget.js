let transactions = JSON.parse(localStorage.getItem("Transactions")) || []
let budget= 0
console.log(budget)
const totalBudget = () => {transactions.forEach(transaction => {

        if (transaction.type !== "")
            budget = transaction.type=="income" ? budget+Number(transaction.price) : budget-Number(transaction.price)
        
        })
    document.getElementById("budget-total").innerText = budget
}
totalBudget()
console.log(budget)

