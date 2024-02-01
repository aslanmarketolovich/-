function pluse(){
    let a = document.getElementsByName("a")[0].value
    console.log(a);
    let b = document.getElementsByName("b")[0].value
    console.log(b);

    let c = Number(a) + Number(b)
    console.log(c);

    document.getElementsByName("result")[0].value = c
}

function minuse(){
    let a = document.getElementsByName("a")[0].value
    console.log(a);
    let b = document.getElementsByName("b")[0].value
    console.log(b);

    let c = Number(a) - Number(b)
    console.log(c);

    document.getElementsByName("result")[0].value = c
}

function multiply(){
    let a = document.getElementsByName("a")[0].value
    console.log(a);
    let b = document.getElementsByName("b")[0].value
    console.log(b);

    let c = Number(a) * Number(b)
    console.log(c);

    document.getElementsByName("result")[0].value = c
}

function devide(){
    let a = document.getElementsByName("a")[0].value
    console.log(a);
    let b = document.getElementsByName("b")[0].value
    console.log(b);

    let c = Number(a) / Number(b)
    console.log(c);

    document.getElementsByName("result")[0].value = c
   
    if(Number(b)!=0){
        console.log(result)
    } else{
        alert("делить на 0 нельзя")
    }
}


function calculate(){
    let usd = document.getElementsByName("usd")[0].value
   
 
    let result = Number(usd) * 12400
    document.getElementsByName("resultpip")[0].value = result
}