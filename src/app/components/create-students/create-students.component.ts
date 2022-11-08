import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {

  public studentForm: FormGroup=new FormGroup(
    {
      name:new FormControl(),
      gender:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      batch:new FormControl(),
      address:new FormGroup(
        {
          city:new FormControl(),
          mandal:new FormControl(),
          district:new FormControl(),
          state:new FormControl(),
          pin:new FormControl(),
        }
        
      ),
      education:new FormArray([]),
    }

  )

  get educationFormArray(){
    return this.studentForm.get('education') as FormArray;
  }

  add(){
    this.educationFormArray.push(
      new FormGroup(
        {
          qualification:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl()

        }
      )
    )

  }
  constructor() { }

  submit(){
    console.log(this.studentForm)

  }

  ngOnInit(): void {
  }

}
