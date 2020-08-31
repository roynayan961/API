const normalPerson = {                      //normalPerson is an object variable
    firstName: 'Rahim',                     //firstName is property and 'Rahim' is value
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){              // when we use function as a value or key of a property this is called method

console.log(this.firstName, this.lastName) //object er vitor kono method thakle jokhon oi object er kono ekta property ke amra access korte chai tokhon this.object use korte hobe
},
chargeBill: function(amount){

    this.salary = this.salary-amount  //ei salary er value = ei salary er value - defined amount.
    return this.salary
}
}
                                    //if we console.log(normalPerson) it will show only the full object
console.log(normalPerson.firstName)  //when we are wanting to use a property inside object=> object.property
// ebar jody chargeBill() call kori tahole undefined dekhabe karon chargeBill nammey kono function nei, chargBill ache obejct er method hishabe.so amader normalPerson.chargBill hisabe call korte hobe and ektaq value dite hobe charge Bill er.
normalPerson.chargeBill(150)
console.log(normalPerson.salary)
