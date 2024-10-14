import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

import { lucideSearch } from '@ng-icons/lucide';
import { provideIcons } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideIcons({ lucideSearch })]
})
export class AppComponent {
  title = 'frontend';
}
