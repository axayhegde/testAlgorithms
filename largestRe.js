function largestRe(arr){

    var array = [];
    for(let i = 0; i < arr.length; i++){

        if(arr[i].toString().length == 1){
            array.push(arr[i]);
        }else{
            while (arr[i] > 0) {
                let digit = arr[i] % 10;
                arr[i] = parseInt(arr[i] / 10);
                array.push(digit);
            }
        }

    }
    console.log(array.sort().reverse().join(""));
}

var arr = [3,30,5,999,9];
largestRe(arr);

