import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Input() name: string = 'unknown';
  @Output() nameChange = new EventEmitter<String>();

  showPersonContact(): void {
    this.name = 'Dimasik';
    this.nameChange.emit(this.name);
  }
}
