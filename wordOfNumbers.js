function wordNumber(number) {

    let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tens = ["zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number > 999) {
        console.log("Number too large");
    } else {
        let length = number.toString().length;

        if (length === 1) {
            console.log(digits[number]);
        } else if (length === 2) {

            if (number > 10 && number < 20) {
                if(number == 11){
                    console.log("Eleven");
                }else if(number == 12){
                    console.log("Twelve");
                }else if(number == 13){
                    console.log("Thirteen");
                }
                else if(number == 14){
                    console.log("Fourteen");
                }else if(number == 15){
                    console.log("Fifteen");
                }else if(number == 16){
                    console.log("Sixteen");
                }else if(number == 17){
                    console.log("Seventeen");
                }else if(number == 18){
                    console.log("Eighteen");
                }else if(number == 19){
                    console.log("Nineteen");
                }
            } else {
                let digit = number % 10;
                let tensD = Math.floor(number / 10);
                console.log(tens[tensD] + " " + digits[digit]);
            }
        } else if (length === 3) {

            let digit = number % 10;
            let tensD = (Math.floor(number / 10)) % 10;
            let hundD = Math.floor(number / 100);
            console.log(digits[hundD] + " hundered " + tens[tensD] + " " + digits[digit]);
        }
    }

}

wordNumber(11);