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
    // Total expenses
    const totalCost = foodCost + rentCost + ClothesCost;
    const totalExpenses = htmlId("total-cost");
    totalExpenses.innerHTML = totalCost;
}
// calculate button click;
const expensesCalButton = htmlId("expenses-cal-button")
expensesCalButton.addEventListener("click",()=>{
    console.log(costCalculation())
})