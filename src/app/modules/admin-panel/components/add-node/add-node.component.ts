import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent implements OnInit {
  nodeForm: FormGroup;
  constructor(private fb: FormBuilder, private dialogref : MatDialogRef<AddNodeComponent>) { }

  ngOnInit() {
    this.nodeForm = this.fb.group({
      uid:['', [Validators.required]],
      data_collection_frequency:'',
      data_sending_frequency:''
    })
  }

  closeDialog(){
    this.dialogref.close()
  }

  saveNode(form) {
    
  }
}
