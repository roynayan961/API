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
               // try normalPerson.chargeBill()
               const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)
       
          heroChargeBill(2000) // actually we are calling heroPerson which are bound with heroChargeBill
   
               
            console.log(heroChargeBill)
            heroChargeBill(3000)
            console.log(heroPerson.salary)
            console.log(normalPerson.salary)
            const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson) //we are printing normalPerson here because we have bind it with friendlyPerson
        console.log(friendlyChargeBill(1200))