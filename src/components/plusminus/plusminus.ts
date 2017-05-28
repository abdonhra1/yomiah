
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'plusminus',
  templateUrl: 'plusminus.html',
})
export class Plusminus {

  @Input() input:number;
  @Input() isBorder:boolean= true;
  @Input() min:number=0;
  @Output() inputChange = new EventEmitter<number>();

  minDisabled:boolean=false;

  constructor() {}

  plus(){
    this.input++;
    this.prepare();
  }


  minus(){
    this.input--;
    this.prepare();
  }

  prepare(){
    this.inputChange.emit(this.input);

    if(this.input == this.min){
      this.minDisabled=true;
    }
    else if(this.input > this.min){
      this.minDisabled=false;
    }
  }

  ngOnChanges(changes: any) {
      this.prepare();
  }

}
