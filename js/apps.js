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
    // html elements id;`
    const errorMsg = htmlId("error-msg");
    const totalCost = htmlId("total-cost");
    const balanceId = htmlId("total-balance");
    // error condition;
    if(isNaN(incomeValue) || isNaN(foodCost) || isNaN(rentCost) || isNaN(ClothesCost)){
        errorMsg.style.display = "block"
        errorMsg.innerText = "Set the proper value and fill input all cost!!"
    }else{
        // Total expenses
        const totalExpenses = foodCost + rentCost + ClothesCost;
        if(totalExpenses <= incomeValue){
            // const totalCost = foodCost + rentCost + ClothesCost;
            totalCost.innerHTML = totalExpenses;
            const totalBalance = incomeValue - totalExpenses;
            balanceId.innerText = totalBalance;
            errorMsg.style.display = "none";
        }else{
            errorMsg.style.display = "block";
            errorMsg.innerText = "Expenses outweigh your income";
            empty("income-value","food-cost-input","rent-cost-input","clothes-cost-input");
        }
    }
}
//empty function make;
function empty(){
    for(const empty of arguments){
        htmlId(empty).value = ""
    }
}
// calculate button click;
const expensesCalButton = htmlId("expenses-cal-button")
expensesCalButton.addEventListener("click",()=>{
    costCalculation()
});