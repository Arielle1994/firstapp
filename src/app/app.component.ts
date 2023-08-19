import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App';
  name = "Arielle Fitzgerald";
  imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg';
  linkUrl= 'https://google.ca';
  columnSpan=2;
  blueClass="blueBg";
  bgColor= "orange";
  hasError: boolean= false; 
  names: string [] = ['Diana', 'Igor', 'Arielle'];
  currentTab =2; 
  
  //method 
  doSomething(){
  alert('I just got clicked');
  }
}
