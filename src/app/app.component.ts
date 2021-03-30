import { Component } from '@angular/core';
import { DateService } from './date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstDate:Date;
  secondDate:Date;

  constructor(private dateServices:DateService) {

  }

  onSubmit(postData) {

    var dc = this.dateServices.daysCount(postData);
    var md = this.dateServices.monthDiff(postData);
    var cd = this.dateServices.compareDate(postData);
    var fd = this.dateServices.formatDate(postData);
    
    console.log("The Day difference is " + dc);
    console.log("The Month difference is " + md);
    console.log("The Dates comparison is " + cd);
    console.log("The Formated Date is " + fd);

    alert(`The Day difference is ${dc}\nThe Month difference is ${md}\nThe Dates comparison is ${cd}\nThe Formated Date is ${fd}`);
  
  }
}
