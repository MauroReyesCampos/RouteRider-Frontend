import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  get isMobileView(): boolean {
    return window.innerWidth <= 992;
  }
}
