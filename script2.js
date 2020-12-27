//1
let test;
test=100;
let copyTest = test;
console.log (test, copyTest);
typeof(test);
typeof(copyTest);
//2
let x=prompt('Please, enter somewhat');
if(typeof(x)=='number'){
    if(!isNan(x))
    console.log("True");
}
else{
    console.log("False");
}

//3
function A(limitL, limitH, step){
    
    let resArray = [];
let x=limitL;
    for(x=limitL;x<=limitH;x+=step){
y.push(5*x-3);
    }
    return y;
}

//4

//else 
1
2
3
4
5
6
7
8
9
for(var i =0;i<5;i++){
                switch(i){
                    case 0:document.write('*<br/>');break;
                    case 1:document.write('**<br/>');break;
                    case 2:document.write('***<br/>');break;
                    case 3:document.write('**<br/>');break;
                    case 4:document.write('*<br/>');break;
                }
        }
limit=10;
str='';
while(limit >=0){
    for (i=0; i<limit; i++) {
str+= '*';
}
console.log(str);
limit--;
}
//else2
let month = Number(prompt('Month:'));
switch (month){
    case 1: console.log('Winter'); break;
    case 2: console.log('Winter'); break;
    case 3: console.log('Spring'); break;
    case 4: console.log('Spring'); break;
    case 5: console.log('Spring'); break;
    case 6: console.log('Summer'); break;
    case 7: console.log('Summer'); break;
    case 8: console.log('Summer'); break;
    case 9: console.log('Autumn'); break;
    case 10: console.log('Autumn'); break;
    case 11: console.log('Autumn'); break;
    case 12: console.log('Winter'); break;
    default: console.log("Error"); break;
}
//else3
let value1 = Math.round(Math.random()*100);
let value2 = Math.round(Math.random()*100);
qSum(value1, value2);

function qSum(a,b){
    let res = a+b;
    let userAnswer = Number(prompt(`${a}+${b}=?`));
    if(res==userAnswer){
        //alert(`Yes! It is ${res}`);
        return true;
    } else{
        //alert(`Wrong! It is ${res}`);
        return false;
    }
}
//Array
//indexOf

