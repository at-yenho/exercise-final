import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactiveDialogService {

  constructor() { }
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return new Observable(ob => {
      ob.next(confirmation);
    });
  }
}
