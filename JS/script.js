var numBers = [];
var userNumbers = [];
var num=[];

while(numBers.length<5){
    var randomNumber = Math.floor(Math.random()* 100);
    if(!numBers.includes(randomNumber)) {
        numBers.push(randomNumber)
    }
}

alert('Tieni a mente questi cinque numeri' + numBers)

setTimeout(function(){
    while(userNumbers.length<5){
        var usNum = parseInt(prompt('Aggiungi un numero'));
        userNumbers.push(usNum)
        if(numBers.includes(usNum)){
            num.push(usNum)
        }
    }
    console.log('hai azzeccato=' + num.length+ 'numeri, e sono i seguenti:' + num)
},3000)