import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  public contact = {
    name: 'Hedeeee',
    age: '243',
  };
  constructor() {}

  ngOnInit(): void {}

  showContact(): void {
    console.log(this.contact.name);
  }

  showContacts(ev): void {
    console.log(ev.target);
    console.log(ev.target.value);
    console.log(ev.keyCode);
  }

  catchCustomEvent(ev): void {
    console.log(ev);
  }
}
