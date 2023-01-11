// let user={
//     name:"Bhavya",
//     age:21
// };

// let key = prompt("What do you want to know about the user?","name");
// alert(user[key]);

// let user={
//     name:"Bhavya",
//     age:21
// };
// let key="name";
// alert(user.key)

// let fruit=prompt("Which fruit to buy?","apple");
// let bag={
//     [fruit]:5,
// };
// alert(bag.apple);

// let user={
//     name:"Bhavya",
//     age:21,
//     isadmin:true
// };
// for(let key in user)
// {
//     alert(key);
//     alert(user[key]);
// }

// alert(String(Math.trunc(Number("49"))));
// alert(String(Math.trunc(Number("+49"))));
// alert(String(Math.trunc(Number("1.2"))));

let user ={
    name:"ABC"
};
let admin= user;
admin.name="Bhavya"
alert(user.name);