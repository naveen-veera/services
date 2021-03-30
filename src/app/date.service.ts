import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  daysCount(postData) {

    var date1 = new Date(postData.firstDate);  
    var date2 = new Date(postData.secondDate);  
   
    //calculate time difference  
    var time_difference = date2.getTime() - date1.getTime();  
  
    //calculate days difference by dividing total milliseconds in a day  
    var result = time_difference / (1000 * 60 * 60 * 24);  

    return result;

  }

  monthDiff(postData) {

    var d1 = new Date(postData.firstDate);  
    var d2 = new Date(postData.secondDate);

    var months;

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();

    return months <= 0 ? 0 : months;

  }

  compareDate(postData) {

    var date1 = new Date(postData.firstDate);  
    var date2 = new Date(postData.secondDate);

    if (date1>date2) 
      return ("Date 1 > Date 2");
    else if (date1<date2) 
      return ("Date 2 > Date 1");
    else 
      return ("Date 1 = Date 2"); 

  }

  formatDate(postData) {

    var date1 = new Date(postData.firstDate);   
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    return date1.toLocaleDateString("en-US", options);

  }
}
