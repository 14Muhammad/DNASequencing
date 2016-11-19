/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from "@angular/material";
import { AppComponent } from './app.component';
import {SimpleNotificationsModule} from "angular2-notifications";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        MaterialModule.forRoot(),
        SimpleNotificationsModule
      ],
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'DNA Sequencing'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('DNA Sequencing');
  }));

  it('should render card using a md-card tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').textContent).toEqual('DNA Sequencing');
  }));

/*  it(`should have as sequence as 'PAPA'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.sequence).toEqual('PAPA');
  }));


  it('should render sequence in a h2 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('PA');
  }));*/

});
