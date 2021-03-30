import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }

  arrayReverse(postData) {

    var name = postData.firstString;

    if (name===undefined) {
      return "Null Data";
    }
    else {
      var strArr = name.split(" ");
      return strArr.reverse();
    }

  }

  arrayNull(postData) {

    var data = postData.firstString;

    if (data===undefined) {
      return "Null";
    }
    else  {
      return "Not Null"
    }
      
  }

  arraySort(postData) {

    var data = postData.firstString;

    if (data===undefined) {
      return "Null Data";
    }
    else {
      var strArr = data.split(" ");
      return strArr.sort();
    }

  }

  searchArray(postData) {

    var userData = prompt("Enter a value to check that exists in a Array");
    var data = postData.firstString;

    if (data===undefined) {
      return "Null Data";
    }
    else {
      var strArr = data.split(" ");
      if(strArr.includes(userData)===true) {
        return "Value Exists";
      }
      else {
        return "Value Doesn't Exists";
      }
    }

  }

}
