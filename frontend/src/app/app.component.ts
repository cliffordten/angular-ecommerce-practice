import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextComponent } from './components/text/text.component';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [UtilsService]
})
export class AppComponent {
  title = 'frontend';
}
