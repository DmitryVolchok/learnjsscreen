import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public contactPerson: string = 'Peter';

  @Output() saveContactPerson = new EventEmitter<String>();

  showContactPerson(): void {
    this.saveContactPerson.emit(this.contactPerson);
  }
}
