import { Component, OnInit } from '@angular/core';
import { IHeaderTitle } from './interface';
import { RouterLink } from '@angular/router';
import { TextComponent } from "../text/text.component";
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { NgIconComponent } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TextComponent, HlmIconComponent, HlmInputDirective, NgIconComponent, HlmButtonDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent implements OnInit{
  isAuthenticated: boolean = false;
  headerTitles: IHeaderTitle[][] = [[   {
    title: "Home",
    link: "/",
    isLogo: true,
    isIcon: false,
    isSearch: false
  },],
[   {
    title: "Search",
    link: "/search",
    isLogo: false,
    isIcon: false,
    isSearch: true
  },],]

  notAuthHeaderTitles: IHeaderTitle[] = [  {
      title: "Login",
      link: "/login",
      isLogo: false,
      isIcon: false,
      isSearch: false
    },
    {
      title: "SignUp",
      link: "/signup",
      isLogo: false,
      isIcon: false,
      isSearch: false
    },]
  authHeaderTitles: IHeaderTitle[] = [
    {
      title: "Cart",
      link: "/login",
      isLogo: false,
      isIcon: true,
      isSearch: false
    },
    {
      title: "Favorite",
      link: "/signup",
      isLogo: false,
      isIcon: true,
      isSearch: false
    },
    {
      title: "User",
      link: "/signup",
      isLogo: false,
      isIcon: false,
      isSearch: false
    },
  ]
  ngOnInit(): void {
    if (this.isAuthenticated) {
      this.headerTitles.push(this.authHeaderTitles)
    } else {
      this.headerTitles.push(this.notAuthHeaderTitles)
    }
  }
}
