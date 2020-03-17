import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {VIEW} from 'src/app/model/VIEW';
@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
@Input() view:VIEW;
@Output () deleteview : EventEmitter<VIEW> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(view){
    this.deleteview.emit(view);
  }

}
