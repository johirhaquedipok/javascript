// --------------------feetToMile---------------

function feetToMile(feet) {
    mile = feet/5280;
    return mile;
}
var result = feetToMile(10120);


// --------------------woodCalculator---------------
function woodCalculator(chair, table, bed) {
    var totalChair = chair *1;
    var totalTable = table *2;
    var totalbed = bed *3;
    var total = totalChair + totalTable + totalbed;
    return total;
}



// --------------------brickCalculator---------------
function brickCalculator(bricks){
        if(bricks >= 38000)
        {
            return(1000 * 15);
        }
        else if( bricks <= 16000)
        {
            return((1000 * 12) + 15000)
        }
        else (bricks == 37000)
        {
            return((1000 * 10) + 15000 + 12000)
        }
    }
    var result = brickCalculator(37000);
    

// --------------------tinyfriend---------------
var shortName = ['michael', 'minhaz', 'mobin', 'shofiqul', 'jalal', 'dpk'];

function tinyFriend(array){

var minEle = array[0];

for(var i=1;i<array.length;i++){
    
    if(array[i].length<minEle.length){
      minEle = array[i];
    }
}

return minEle;
}

///----------------------ends----------





