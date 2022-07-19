document.getElementById("transfer-btn").addEventListener("click",function(){

    const transfervalueText=document.getElementById("transfer-value");

    const transferValue=parseFloat(transfervalueText.value);

    const previousAmountText= document.getElementById("transfer-amount");

    const previousAmount=parseFloat(previousAmountText.innerText);

    const total=transferValue + previousAmount;

    previousAmountText.innerText=total;

    transfervalueText.value=""

    const totalAmountText=document.getElementById("total-amount");

    const Amount=parseFloat(totalAmountText.innerText);

    const totalAmount=Amount-transferValue;
    
    totalAmountText.innerText=totalAmount

})