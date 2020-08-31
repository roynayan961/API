const normalPerson = {                      //normalPerson is an object variable
    firstName: 'Rahim',                     //firstName is property and 'Rahim' is value
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){              // when we use function as a value or key of a property this is called method

console.log(this.firstName, this.lastName) //object er vitor kono method thakle jokhon oi object er kono ekta property ke amra access korte chai tokhon this.object use korte hobe
},
chargeBill: function(amount){
    console.log(this)
    this.salary = this.salary-amount  //ei salary er value = ei salary er value - defined amount.
    
    return this.salary
}
}


               const heroPerson = {

                firstName: 'Hero',
                lastName: 'Balam',
                salary: 25000
               }
               const friendlyPerson = {

                firstName: 'Hero',
                lastName: 'Galam',
                salary: 25000
               }
           
        normalPerson.chargeBill.call(heroPerson, 900)
        normalPerson.chargeBill.call(heroPerson, 3000)
        console.log(heroPerson.salary)