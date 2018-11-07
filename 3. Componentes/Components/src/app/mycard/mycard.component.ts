import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css']
})
export class MycardComponent implements OnInit {

  private mycardModel;

  constructor() {
    this.mycardModel = {
      name: "Diego Cortes",
      email: "dico87@gmail.com",
      birthday: new Date(1987, 1, 19),
      company: {
        name: "CLTech",
        position: "Java Developer",
        experience: "10 years"
      },
      age: "31 years",
      languages: ["Java", "SQL", "Javascript"],
      twitter: "https://twitter.com/dondieguin87"
    }
  }

  ngOnInit() {
  }

  goTwitter(twitter) {
    window.location.href = twitter;
  }

}
