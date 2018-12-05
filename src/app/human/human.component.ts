import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Human } from '../model.human'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  humans: Human[];
  flag : boolean;
  coment: string = "Item has been successfully inserted";
  is_add : boolean = false;
  singleHuman = {} as Human;
 // @Input() humanDetails : Human;

  humanForm: FormGroup;

  constructor( private router: Router) {
    this.humans = [
      new Human( 0, "0", "0@a.com", "Male", "0","Dhaka","A Positive","Programming"),
      new Human( 1, "a",  "a@a.com", "Male",  "Software Engineer",  "Bogra",  "O negetive", "Playing"),
      new Human( 2, "b", "b@b.com",  "Female", "Big Data",  "Bogra",  "AB",  "Playing")
    ];
  }
  ngOnInit() {
    this.humanForm = new FormGroup({
      'Id': new FormControl(null, Validators.required),
      'Name': new FormControl(null, Validators.required),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Gender': new FormControl(null, Validators.required),
      'Department': new FormControl(null, Validators.required),
      'District': new FormControl(null, Validators.required),
      'BloodGroup': new FormControl(null, Validators.required),
      'Hobby': new FormControl(null, Validators.required),
    });
  }


  addNewHuman(humandata) {
    // console.log(humandata);
    //debugger;
    this.flag = true;
    for (var h of this.humans) {
      if (h.Id == humandata.Id) {
       // console.log("In the Loop");
        this.flag = false;
        let itemIndex = this.humans.findIndex(item => item.Id == humandata.Id);
        this.humans[itemIndex] = humandata; 
      }

      this.humanForm.reset();
    }

    //console.log(flag);

    if (this.flag) {
      //console.log("Entered");
      this.humans.unshift(humandata);
      this.is_add = true; 
      this.humanForm.reset();
    }

  }


  edit(human: Human) {
    this.singleHuman = human;
  }


  delete(human)
  {
    //console.log(human);
    //debugger;
    const itemIndex: number = this.humans.findIndex(item => item.Id == human.Id);
    console.log(itemIndex);
    if (itemIndex !== -1) {
      this.humans.splice(itemIndex, 1);
  }    
    
  }

  details(human : Human)
  {
    console.log("jfh");
    //this.router.navigate(['/human-details',{Id :human.Id}]);
    this.router.navigate(['/human-details',human.Id]);
  }

}

