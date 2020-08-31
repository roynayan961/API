const normalPerson = {                      //normalPerson is an object variable
    firstName: 'Rahim',                     //firstName is property and 'Rahim' is value
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){              // when we use function as a value or key of a property this is called method

console.log(this.firstName, this.lastName) //object er vitor kono method thakle jokhon oi object er kono ekta property ke amra access korte chai tokhon this.object use korte hobe
},
chargeBill: function(amount, tips, tax){
    console.log(this)
    this.salary = this.salary-amount-tips-tax;  //ei salary er value = ei salary er value - defined amount.
    
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
           
    //     normalPerson.chargeBill.call(heroPerson, 900, 100, 10)
    //     //normalPerson.chargeBill.call(heroPerson, 3000, 300, 30)
    //     console.log(heroPerson.salary)
    //     normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50)
    //     console.log(friendlyPerson.salary)
    // console.log(normalPerson.salary)
    normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]) //apply first alphabet is a so we have to deliver value as  array or [] format
    console.log(heroPerson.salary) 
    normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]) //heroPerson(this) er value, bonus, govt tax
    console.log(heroPerson.salary)
    // kono ekta object er vitor method ekta method ache tumi jodi setake borrow kore onnyo ekta jaigar upor use korte chao tahole, call, apply, bind ei 3 ta method use korte paro.
    //jodi amar kono ekta object er upor ekta method thake ar ami jodi eta ke onno ekta method er upor apply korte chai tobe call-apply-bind use korte pari
    //ekta method ke jodi barbar use korte chao tahole oi method ke niye eshe notun object er sathe bind kore diba,etai bind.
    //call e this er sathe comma and apply e this er sathe arry separation pass korte hoi as a first character
    