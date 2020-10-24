import { EditCourseComponent } from './edit-course/edit-course.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = false;
  //selected = 3;
  animalControl = new FormControl('', Validators.required);
  foodControl = new FormControl('', Validators.required);
  colors = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Green'},
    {id: 3, name: 'Orange'},
  ];

currentYear = new Date().getFullYear();
minDate = new Date();
maxDate = new Date(this.currentYear + 0, 11, 31);

  categories=[
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Aadvanced'},
  ]
constructor(private dialog: MatDialog){

}
onChange(event, checkDetails){
    console.log(event, checkDetails);
    checkDetails.checked ? console.log('Active') : console.log('InActive');
    // {
    //   console.log('Active');
    // }
    //   else {
    //     console.log('InActive');
    //   }
  }

  selectCategory(category){
    this.categories
    .filter(c => c != category)
    .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  openDialog(){
    this.dialog.open(EditCourseComponent, {
      data: {courseId: 1}})
    .afterClosed()
    .subscribe(result => console.log(result));
  }
}
