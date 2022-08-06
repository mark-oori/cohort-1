// working with functions
function increase(msg){
    let playing_football_outside = false;
    
    // if(playing_football_outside){
    //     return_msg = "Sorry I can't wash plate now, there is a football match outside"
    //     return return_msg;
    // }
    //else{
         let return_msg = "I have washed the plates";
         return return_msg;   
    //}
}

msg = "Go and wash the plates";
// -> increase(); : call function first
ret_msg = increase(msg);
// console.log(ret_msg) // print message

function areaOfCircle(radius){
    const PI = 3.142;
    const calc_area = PI * radius * radius
    return calc_area + " cm2"
}

const rad = 3.2;
// areaOfCircle(radius);
const result = areaOfCircle(rad);
console.log(result)