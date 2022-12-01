import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component-copy.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  length:number=0;
  password='';


  onChangeIncludeLetters(){
    this.includeLetters=!this.includeLetters;
    console.log(this.includeLetters)

  }
  onChangeIncludeNumbers(){
    this.includeNumbers=!this.includeNumbers;
    console.log(this.includeNumbers)
  }
  onChangeIncludeSymbols(){
    this.includeSymbols=!this.includeSymbols;
    console.log(this.includeSymbols)
  }
  onUserInput(bantu : Event){
    //string to integer use + symbol
    this.length = +(bantu.target as HTMLInputElement).value;
    console.log(this.length)
  }


getPass(){
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%&*()";

  let validChars = "";

  //why babu wants
  if(this.includeLetters) validChars +=letters;

  if(this.includeNumbers) validChars +=numbers;
  if(this.includeSymbols) validChars +=symbols;

  console.log(validChars);

  let generatedPassword ="";
  for(let i= 0; i< this.length ; i++){
    //index no point mai aa raha tha isliye .floor ka use kiya
    const index =Math.floor(Math.random()* validChars.length)
    generatedPassword +=validChars[index];

  }
  this.password=generatedPassword;

}
}
