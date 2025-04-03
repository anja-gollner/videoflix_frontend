import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'videoflix';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects === '/') {
          document.body.style.backgroundImage =
            "url('assets/img/background2-min.png')";
          document.body.style.backgroundColor = '';
        } else if (event.urlAfterRedirects === '/signup') {
          document.body.style.backgroundImage =
            "url('assets/img/background1-min.png')";
          document.body.style.backgroundColor = '';
        } else if (event.urlAfterRedirects === '/login') {
          document.body.style.backgroundImage =
            "url('assets/img/background0-min.png')";
          document.body.style.backgroundColor = '';
        }
      });
  }
}
