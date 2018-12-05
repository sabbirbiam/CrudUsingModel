import { Component, OnInit, Input } from '@angular/core';
import { Human } from '../model.human';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-human-details',
  templateUrl: './human-details.component.html',
  styleUrls: ['./human-details.component.css']
})
export class HumanDetailsComponent implements OnInit {
//@Input('') human : Human;
Id: number;
showHuman : Human;
humans : Human[];
  constructor(private router : Router, private route: ActivatedRoute ) { 
    this.humans = [
      new Human( 0, "CSE", "0@a.com", "Male", "CSE","Dhaka","A Positive","Programming"),
      new Human( 1, "a",  "a@a.com", "Male",  "Software Engineer",  "Bogra",  "O negetive", "Playing"),
      new Human( 2, "b", "b@b.com",  "Female", "Big Data",  "Bogra",  "AB",  "Playing")
    ];
  }

  ngOnInit() {  
    this.Id = +this.route.snapshot.paramMap.get('Id');
    console.log(this.Id);
    this.getHumanById(this.Id);
  }

  getHumanById(Id : Number)
  {
    for (var h of this.humans) {
      if (h.Id == Id) {
        this.showHuman = h; 
        //console.log(h);
      }
  }
}

}
