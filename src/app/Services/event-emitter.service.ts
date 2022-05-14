import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeOnClick = new EventEmitter();
  subsVar: Subscription | undefined;

  constructor() { }

  onFirstComponentClick() {
    this.invokeOnClick.emit();
  }
}
