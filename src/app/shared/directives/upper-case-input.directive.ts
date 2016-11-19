import {Directive, OnChanges, SimpleChanges, Input, ElementRef} from '@angular/core';
import { FormControlName} from "@angular/forms";

@Directive({
  selector: '[upperCaseInput]',
  host: {
    '(input)': 'onInputChange()'
  }
})
export class UpperCaseInputDirective{
  constructor(private model: FormControlName,
              private el:ElementRef){
  }
  onInputChange() {
    let newValue = this.model.value.toUpperCase();
    this.model.control.setValue(newValue.toUpperCase());
    this.model.valueAccessor.writeValue(newValue);
  }
}
