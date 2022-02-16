// all id selector function
function htmlId(id){
    return document.getElementById(id)
}
// cost input value;
function costInputValue(id){
    const costId = htmlId(id);
    const costValue = parseFloat(costId.value);
    return costValue;
}
// cost calculation
function costCalculation(){
    // input value;
    const incomeValue = costInputValue("income-value");
    const foodCost = costInputValue("food-cost-input")
    const rentCost = costInputValue("rent-cost-input");
    const ClothesCost = costInputValue("clothes-cost-input");
    // html elements id;
    const errorMsg = htmlId("error-msg");
    const totalExpenses = htmlId("total-cost");
    const balanceId = htmlId("total-balance");
    // error condition;
    if(isNaN(incomeValue) || isNaN(foodCost) || isNaN(rentCost) || isNaN(ClothesCost)){
        errorMsg.style.display = "block"
        errorMsg.innerText = "This is a wrong Value!"
    }else{
        // Total expenses
        const totalCost = foodCost + rentCost + ClothesCost;
        if(totalCost < incomeValue){
            // const totalCost = foodCost + rentCost + ClothesCost;
            totalExpenses.innerHTML = totalCost;
            const totalBalance = incomeValue - totalCost;
            balanceId.innerText = totalBalance;
            errorMsg.style.display = "none"
        }else{
            errorMsg.style.display = "block"
            errorMsg.innerText = "Expenses outweigh your income"
            htmlId("income-value").value = "";
            htmlId("food-cost-input").value = "";
            htmlId("rent-cost-input").value = "";
            htmlId("clothes-cost-input").value = "";
        }
    }
}
// calculate button click;
const expensesCalButton = htmlId("expenses-cal-button")
expensesCalButton.addEventListener("click",()=>{
    costCalculation()
})