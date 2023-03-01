function ExpensesCalculation(elementId){
    const foodFieldValue=document.getElementById(elementId);
    const foodFieldValueString =foodFieldValue.value;
    const foodFieldValueTotal =parseInt(foodFieldValueString);
    return foodFieldValueTotal;

}

function balanceAndExpensesTextAmount(balance){


    return totalExpensesValue;


}









document.getElementById('btn-calculate').addEventListener('click',function(){
   const food= ExpensesCalculation('food-field');
   const rent= ExpensesCalculation('rent-field');
   const clothes=ExpensesCalculation('clothes-field');
   const income=ExpensesCalculation('income-field');
   const totalExpensesAmount =food+rent+clothes;
   const Balance =income-totalExpensesAmount;




   const totalExpensesValue = document.getElementById('total-expenses');
   totalExpensesValue.innerText=totalExpensesAmount; 
   
   const totalBalanceValue = document.getElementById('total-balance');
   totalBalanceValue.innerText=Balance;


 

})

document.getElementById('btn-save').addEventListener('click',function(){
    const income=ExpensesCalculation('income-field');
    const save=ExpensesCalculation('save-field');
    const savePercentage = save/100;
    const totalSave =savePercentage*income;

    const savigTextAmount =document.getElementById('total-saving');
    savigTextAmount.innerText = totalSave;

    const remainingAmount = document.getElementById('total-remaining');
    
    savigTextAmount.innerText = t;




})