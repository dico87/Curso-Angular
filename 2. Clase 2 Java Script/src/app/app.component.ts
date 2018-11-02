import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso2';

  //   var bankAccount = {
  //     money: 2000,
  //     deposit: function (value) {
  //         this.money += value;
  //     }
  // };
  // var myself = {
  //     name: "Max",
  //     bankAccount: bankAccount,
  //     hobbies: ["Sports", "Cooking"]
  // };
  // myself.bankAccount.deposit(3000);

  constructor() {

    //Primer ejercicio
    type BankAccount = { money: number, deposit: (value: number) => void }
    let bankAccount: BankAccount = {
      money: 2000,
      deposit: function (value: number) {
        this.money += value;
      }
    };
    type MySelf = { name: string, bankAccount: BankAccount, hobbies: string[] }
    let myself: MySelf = {
      name: "Max",
      bankAccount: bankAccount,
      hobbies: ["Sports", "Cooking"]
    };

    myself.bankAccount.deposit(4000);
    console.log(myself);

    //Segundo ejercicio
    console.log("**** Exercises ****");
    // Exercise 1    
    let double = value => value * 2;
    console.log(double(10));

    // Exercise 2
    let greet = (name = "Max") => "Hello " + name;
    console.log("Greet empty : ", greet());
    console.log("Greet", greet("dico"));

    // Exercise 3    
    let numbers = [-3, 33, 38, 5];
    console.log(Math.min(...numbers));

    // Exercise 4
    var newArray = [55, 20];
    newArray.push(...numbers);
    console.log(newArray);

    // Exercise 5
    let testResults = [3.89, 2.99, 1.38];
    const [x, y, z] = testResults;
    console.log(x, y, z);

    // Exercise 6
    let scientist = { firstName: "Will", experience: 12 };
    let { firstName, experience } = scientist;
    console.log(firstName, experience);


    //Iterators
    const pilots = [
      {
        id: 10,
        name: "Poe Dameron",
        years: 14,
      },
      {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
      },
      {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
      },
      {
        id: 99,
        name: "Ello Asty",
        years: 22,
      }
    ];

    console.log("Años", pilots.reduce((current, pilot2) => current + pilot2.years, 0));

    const constructicons = [
      {
        name: 'Scrapper',
        form: 'Freightliner Truck',
        team: 'Decepticon',
        bodyPart: 'rightLeg'
      },
      {
        name: 'Hook',
        form: 'Mobile Crane',
        team: 'Decepticon',
        bodyPart: 'upperTorso'
      },
      {
        name: 'Bonecrusher',
        form: 'Bulldozer',
        team: 'Decepticon',
        bodyPart: 'leftArm'
      },
      {
        name: 'Scavenger',
        form: 'Excavator',
        team: 'Decepticon',
        bodyPart: 'rightArm'
      },
      {
        name: 'Mixmaster',
        form: 'Concrete Mixer',
        team: 'Decepticon',
        bodyPart: 'leftLeg'
      },
      {
        name: 'Long Haul',
        form: 'Dump Truck',
        team: 'Decepticon',
        bodyPart: 'lowerTorso'
      }
    ];

    console.log(constructicons.reduce((current, constructicon) => {
      return current.bodyPart.push([{constructicon.name, constructicon.bodyPart}]);
    }, {
        name: 'Devastator',
        form: 'Dump Truck',
        bodyPart: []
      }))
  }

}
