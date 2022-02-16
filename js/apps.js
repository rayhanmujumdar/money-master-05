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
        savingAmountValue("total-cost","total-balance");
    }else{
        // Total expenses
        const totalExpenses = foodCost + rentCost + ClothesCost;
        if(totalExpenses <= incomeValue){
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
//if any error attack,total all value is zero;
function savingAmountValue(){
    for(const errorelements of arguments){
        htmlId(errorelements).innerText = 0;    
    }
}
// calculate button click event;
const expensesCalButton = htmlId("expenses-cal-button")
expensesCalButton.addEventListener("click",()=>{
    costCalculation()
});

// savinvg button click event;
const savingButton = htmlId("saving-button");
savingButton.addEventListener("click",()=>{
    // saving amount;
    const incomeValue = costInputValue("income-value");
    const PercentageValue = costInputValue("Percentage-input");
    const savingAmount = incomeValue * (PercentageValue / 100);
    // total balance value;
    const totalBalance = htmlId("total-balance").innerText;
    const errorMsgSaving = htmlId("error-msg-saving");
    // condition of error;
    if(isNaN(incomeValue)){
        savingAmountValue("your-saving-amount","remaining-Balance");
    }
    else if(isNaN(PercentageValue)){
        errorMsgSaving.style.display = "block"
        errorMsgSaving.innerText = "Type percentage Value"
        savingAmountValue("your-saving-amount","remaining-Balance")
    }else if(savingAmount > totalBalance ){
        errorMsgSaving.style.display = 'block';
        errorMsgSaving.innerText = "Your Saving is over then your Balance!!"
        // empty all input if any error;
        empty("income-value","food-cost-input","rent-cost-input","clothes-cost-input","Percentage-input");
        savingAmountValue("your-saving-amount","remaining-Balance");
    }else{
        // saving amount output;
        const yourSaving = htmlId("your-saving-amount");
        yourSaving.innerText = savingAmount;
        // remaining balance;
        const totalRemainingBalance = totalBalance - savingAmount;
        const remainingBalance = htmlId("remaining-Balance");
        remainingBalance.innerHTML = totalRemainingBalance;
        errorMsgSaving.style.display = 'none'
    }
})
