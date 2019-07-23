import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

// fix tslint not allow use 'Function' as a type
type FunctionType = (...args: any[]) => any;

@Injectable({
  providedIn: 'root'
})
export class PreloadSelectModuleService implements PreloadingStrategy {
  preload(route: Route, load: FunctionType): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
