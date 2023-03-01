


document.getElementById('btn-calculate').addEventListener('click',function(){
    const foodFieldValue=document.getElementById('food-field');
    const foodFieldValueString =foodFieldValue.value;
    const foodFieldValueTotal =parseInt(foodFieldValueString);

    const rentFieldValue =document.getElementById('rent-field');
    const rentFieldValueString =rentFieldValue.value;
    const rentFieldValueTotal = parseInt(rentFieldValueString);


    const totalAmount =foodFieldValueTotal+rentFieldValueTotal;
    

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesString = totalExpenses.innerText;
    const totalExpensesAmount=parseInt(totalExpensesString);

    totalExpenses.innerText =totalAmount;
    

})