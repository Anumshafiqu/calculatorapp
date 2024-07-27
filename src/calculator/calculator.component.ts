import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
 calvalue : number = 0;
// funcT : any = 'No Function';
// calnumber : string = 'noValue';
// firstNumber : number = 0;
// secondNumber : number = 0;
// onClickValue(val:string , type : any){
//   if(type == 'number') {
//     this.onNumberClick(val);
//   }else if(type == 'function'){
//     this.onFunctionClick(val);

//   }
// }
// onNumberClick(val : string){
//   if(this.calnumber = 'noValue'){
//      this.calnumber = this.calnumber + val
//    }else{
//      this.calnumber = val;
//    }
//  this.calvalue = parseFloat(this.calnumber);
// }
// onFunctionClick(val:string){
//   if(this.funcT == 'c'){
//     this.clearAll()
//   }else
//   if(this.funcT == 'No Function'){
// this.firstNumber = this.calvalue;
// this.calvalue = 0;
// this.calnumber = 'noValue';
// this.funcT = val;

//   }else if(this.funcT = 'No Funtion'){
//     this.secondNumber = this.calvalue;
//     this.calculateValue(val);

//   }
  
// }
// calculateValue(val:string){
//   if(this.funcT == '+'){
//     const Total = this.firstNumber + this.secondNumber;
// this.totalAssignValues(Total , val);
// if(val == '='){this.onEqualPress()}
//   }
//   if(this.funcT == '*'){
//     const Total = this.firstNumber + this.secondNumber;
//     this.totalAssignValues(Total , val);
//     if(val == '='){this.onEqualPress()}
//   }
//   if(this.funcT == '-'){
//     const Total = this.firstNumber + this.secondNumber;
//     this.totalAssignValues(Total , val);
//     if(val == '='){this.onEqualPress()}
//   }
//   if(this.funcT == '/'){
//     const Total = this.firstNumber + this.secondNumber;
//     this.totalAssignValues(Total , val);
//     if(val == '='){this.onEqualPress()}
//   }
//   if(this.funcT == '%'){
//     const Total = this.firstNumber + this.secondNumber;
//     this.totalAssignValues(Total , val);
//     if(val == '='){this.onEqualPress()}
//   }

// }
// totalAssignValues(Total :number , val : String){

//   this.calvalue = Total;
//   this.firstNumber = Total;
//   this.secondNumber = 0;
//   this.calnumber = 'noValue';
//   this.funcT = val;
// }
// onEqualPress(){
//   this.firstNumber = 0;
//   this.secondNumber = 0;
//   this.funcT = 'No Function';
//   this.calnumber = 'noValue'
// }
// clearAll(){
//   this.firstNumber = 0;
//   this.secondNumber = 0;
//   this.funcT = 'No Function';
//   this.calnumber = 'noValue'
//   this.calvalue= 0;
// }

stringToevaluate:string = ''

takeInput(num:string){
this.stringToevaluate = this.stringToevaluate + num;
//  console.log(this.stringToevaluate)
}
evaluteResult(){
  if(this.stringToevaluate != ''){
    this.stringToevaluate = eval(this.stringToevaluate);
  }
  // console.log(this.stringToevaluate)
}
resetInput(){
  this.stringToevaluate = "";
}


























}

