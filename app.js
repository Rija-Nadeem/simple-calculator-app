function getNumber(num){
    var exp= document.getElementById('Exp');
    exp.value+=num;
    
}

function clearResult(){
    var exp= document.getElementById('Exp');
    exp.value="";
    var res=document.getElementById('result');
    res.value="";
}

function getResult(){
    var exp= document.getElementById('Exp');
    var res=document.getElementById('result');
    res.value=eval(exp.value)
}