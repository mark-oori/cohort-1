const car_1 = {name: 'toyota', weight: '750kg', color: 'red'};
const car_1_name = car_1.color; // get car_1 name
//console.log(car_1_name);

const person = {}
person.firstName = "Johnson";
person.lastName = "David";
person.age = 30;
person.fullName = function(){
    const full_name = person.firstName + " " + person.lastName;
    return (full_name);
}

const get_fullName = person.fullName();
//console.log(get_fullName);

console.log(Date())