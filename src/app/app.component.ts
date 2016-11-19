import {Component, OnInit, sequence} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {NotificationsService} from "angular2-notifications";
import {AppService, DNA} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'DNA Sequencing';
  DNASequenceForm:FormGroup;
  DNASequenceMinLength:number = 2;
  public toastOptions = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: false
  }
  constructor(private formBuilder:FormBuilder,
              private notificationsService: NotificationsService,
              private appService:AppService){

  }

  ngOnInit(): void {
    this.DNASequenceForm = this.formBuilder.group({
      DNASequence: ['', [Validators.required,
        Validators.minLength(this.DNASequenceMinLength),
        this.DNASequencePattern
      ]]
    });
  }

  DNASequencePattern(control:FormControl) {
    if (/^[PANYOHWV]+$/.test(control.value) && control.value.length%2 == 0) {
      for (var i = 0, j = control.value.length - 1; i < j; i++, j--) {
        if (!(
            (control.value[i] === 'P' && control.value[j] === 'A') ||
            (control.value[i] === 'N' && control.value[j] === 'Y') ||
            (control.value[i] === 'O' && control.value[j] === 'H') ||
            (control.value[i] === 'W' && control.value[j] === 'V')
          ) || i === j) return {DNASequencePattern: true};
      }
      return null;
    }
    return {DNASequencePattern: true};
  }
  saveDNASequence(){
    /**
     * @param response              Information about the object.
     * @param response.isSaved   Information about the object's members.
     */
    var sequence = {sequence:this.DNASequenceForm.controls['DNASequence'].value}
    this.appService.addDNA(sequence)
      .subscribe(response => {
        if(response.isSaved){
          this.DNASequenceForm.reset();
          this.notificationsService.info('Congratulations','DNA sequence has been saved',{
              timeOut: 3000,showProgressBar: true,pauseOnHover: false,clickToClose: false,maxLength: 0
            }
          )
        }else{
          this.notificationsService.error('Failure','DNA sequence not saved',{
              timeOut: 3000,showProgressBar: true,pauseOnHover: false,clickToClose: false,maxLength: 0
            }
          )
        }
      });

  }
}
