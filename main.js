$(document).ready(function(){

    $("#win").hide();
     var bestScore = 0;
     var array = [
        "/Images/cute viego.jfif",
        "/Images/cute viego.jfif",
        "Images/kitty.jpg",
        "Images/kitty.jpg",
        "/Images/mad kitty.jpg",
        "/Images/mad kitty.jpg"];
    
    var chaklebElArray = function(){ 
        //  change the array items soo the carts dont have the same position everytime
        var newArr =  array.slice();
        var acc = [];
        while(newArr.length>0 ){
            x = Math.floor(Math.random() *newArr.length)
            acc.push(newArr[x])
            newArr.splice(x,1)
        }
        return acc
    }

    var Reset = function(){
        $("img").attr("src", "/Images/YUGiOH.jfif");
        clicks =  0 ;
    }


                                                     $(".btn").click(function(){
        
        var i = 30 ; // timer
        var orderedArray = chaklebElArray()
        var clicks = 0;
        var srcClicked = [];
        storedIds = []
        var pair = 0 ; // howw many time the user selected pair  carts


        $("#first").click(function(){
            if(clicks < 2) {
            $("#first").attr("src", orderedArray[0]);
            clicks++
            srcClicked.push(orderedArray[0])
            storedIds.push("#first")
            check()}
        })
        $("#second").click(function(){
            if(clicks < 2) {
            $("#second").attr("src", orderedArray[1]);
            clicks++
            srcClicked.push(orderedArray[1])
            storedIds.push("#second")
            check()}
        })
        $("#third").click(function(){
            if(clicks < 2) {
            $("#third").attr("src", orderedArray[2]);
            clicks++
            srcClicked.push(orderedArray[2])
            storedIds.push("#third")
            check()}
        })
        $("#fourth").click(function(){
            if(clicks < 2) {
            $("#fourth").attr("src", orderedArray[3]);
            clicks++
            srcClicked.push(orderedArray[3])
            storedIds.push("#fourth")
            check()}
        })
        $("#fifth").click(function(){
            if(clicks < 2) {
            $("#fifth").attr("src", orderedArray[4]);
            clicks++
            srcClicked.push(orderedArray[4])
            storedIds.push("#fifth")
            check()}
        })
        $("#sixth").click(function(){
            if(clicks < 2) {
            $("#sixth").attr("src", orderedArray[5]);
            clicks++
            srcClicked.push(orderedArray[5])
            storedIds.push("#sixth")
            check()}
        })
        function check() {
            

        if (clicks === 2) {
          if (srcClicked[0] !== srcClicked[1]) {
        setTimeout(function() {
            $(storedIds[0]).attr("src", "/Images/YUGiOH.jfif");
            $(storedIds[1]).attr("src", "/Images/YUGiOH.jfif");
            clicks = 0;
             srcClicked = [];
             storedIds = [];
             
            
        }, 1000); 
           } else {
                 clicks = 0;
                srcClicked = [];
                storedIds = [];
                pair++
                if(pair === array.length/2 ){
                    clearInterval(timer)
                    win()
                }
                }
            }
}

var win = function() {
    $("#win").show();
    setTimeout(function() {
        $("#win").hide();
        clearInterval(timer)
        return Reset() 
    }, 5000); 


    if (i > bestScore) {
        bestScore = i +1;
   
    $("#bscore").text(bestScore) }
}


    var timer = setInterval(function(){
            $("#time").text(i)
            i--
            if(i<0 ){
                clearInterval(timer)
                return Reset()
            }
        },1000)
    })
})

