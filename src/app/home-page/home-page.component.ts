import { Component, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ChevronDown, ChevronUp, LucideAngularModule } from 'lucide-angular';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('collapseAnimation', [
      state('void', style({ height: '0px', overflow: 'hidden' })),
      state('*', style({ height: '*', overflow: 'hidden' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
  imports: [CommonModule, LucideAngularModule, NgClass],
})
export class HomePageComponent {
  readonly ChevronDown = ChevronDown;
  readonly ChevronUp = ChevronUp;
  isCollapsed = true;
}
