function addValue(){
    var number1=document.getElementById('input_a').value
    var num1=parseInt(number1,10);
    var number2=document.getElementById('input_b').value
    var num2=parseInt(number2,10);
    var num3=num1+num2

    // parse to integer
    // val1 = parseInt(..., 10);

    // perform operation


    // creating the text output

    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = (num1 + "+" + num2 + "=" + num3);
}


function mulValue(){
    var number1=document.getElementById('input_a').value
    var num1=parseInt(number1,10);
    var number2=document.getElementById('input_b').value
    var num2=parseInt(number2,10);
    var num3=num1*num2
    document.mycalculator.output.value = (num1 + "*" + num2 + "=" + num3);
}

function divValue(){
    var number1=document.getElementById('input_a').value
    var num1=parseInt(number1,10);
    var number2=document.getElementById('input_b').value
    var num2=parseInt(number2,10);
    var num3=num1/num2
    document.mycalculator.output.value =  (num1 + "/" + num2 + "=" + num3);
}

