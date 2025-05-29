import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childMessage: string;
 
  @Output() messageToParent = new EventEmitter<string>();
 
  sendToParent() {
    this.messageToParent.emit("Hello from Child!");
 
}
}
