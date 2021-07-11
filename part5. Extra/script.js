function eventHandler(){
    console.log("event Handler")
    function innerFunction(){
        console.log("innerFunction")
    }
    for (var i=0 ; i<2; i++){
        innerFunction();
    }
}