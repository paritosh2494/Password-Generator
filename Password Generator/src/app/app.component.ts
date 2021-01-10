import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length =0;
  password = '';
  myName = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetter() {
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseSymbol() {
    this.includeSymbols=!this.includeSymbols;
  }
  onChangeUseNumber() {
    this.includeNumbers=!this.includeNumbers;
  }

  onButtonClick() {
    /*this.password="My Password!!!";
    console.log('Letters Included: '+this.includeLetters);
    console.log('Numbers Included: '+this.includeNumbers);
    console.log('Symbols Included: '+this.includeSymbols);*/
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';
    let validString = '';
    let generatedPassword = '';

    if (this.includeLetters) {
      validString += letters;
    }
    if (this.includeNumbers) {
      validString += numbers;
    }
    if (this.includeSymbols) {
      validString += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validString.length);
      generatedPassword += validString[index];
    }
    this.password = generatedPassword;
  }

  getName(){
    this.myName='Password from function: '+this.password;
    return this.myName;
  }

  getChangeLength(value:string){
    const parsedValue =parseInt(value);
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
    }
  }
}
