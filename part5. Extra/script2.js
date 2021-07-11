var sum = 0

for (var i=1;i<=50; i++){
    sum += i
}

(function(){
    for (var i=1; i<=5; i++){
        console.log(i)
    }
})(); // 익명함수 바로실행

for(;i<=100;i++){
    sum+=i;
}

console.log(sum)
setTimeout(
    function(){
        console.log("timeout")
    },
    3000);

// 아래와 같은 표현임

function callback(){
    console.log("timeout")
}

setTimeout(callback, 3000)
