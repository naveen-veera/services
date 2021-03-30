import { Component } from '@angular/core';
import { ArrayService } from './array.service';
import { DateService } from './date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstDate:Date;
  secondDate:Date;

  constructor(private dateServices:DateService, private arrayService:ArrayService) {

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

    alert(`The Day difference is -> ${dc}\nThe Month difference is -> ${md}\nThe Dates comparison is -> ${cd}\nThe Formated Date is -> ${fd}`);
  
  }

  onArrSubmit(postData) {
  
    var ar = this.arrayService.arrayReverse(postData);
    console.log("The Reversed Array is " + ar);
    var ann = this.arrayService.arrayNull(postData);
    console.log("Array Null or Empty Check is " + ann);
    var as = this.arrayService.arraySort(postData);
    console.log("The Sorted Array is " + as);
    var ve = this.arrayService.searchArray(postData);
    console.log("The Value Status is " + ve);

    alert(`The Reversed Array is -> ${ar}\nArray Null or Empty Check is -> ${ann}\nThe Sorted Array is -> ${as}\nThe Value Status is -> ${ve}`);

  }
}
