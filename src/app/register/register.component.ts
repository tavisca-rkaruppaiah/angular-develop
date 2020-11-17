import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  @ViewChild("subscriptionForm") subscriptionForm : NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubscribe(){
    console.log(this.subscriptionForm.value);
  }
}
