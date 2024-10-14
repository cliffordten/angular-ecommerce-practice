import { Component, inject, input, OnInit, signal } from '@angular/core';
import {IFontStyle, IVariant } from './interface';
import { NgClass } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { ClassValue } from 'clsx';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [NgClass],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent implements OnInit{
  value = input.required<string>()
  isTitle = input<boolean>(false)
  variant = input<IVariant>("base")
  fontStyles = input<IFontStyle[]>(["normal"])
  className = input<ClassValue>()
  classes = signal<string[]>([""])

  utilsService = inject(UtilsService)

  cn = (...inputs: ClassValue[]) => this.utilsService.cn(inputs)

  manageVariants = () => {
    switch (this.variant()) {
      case "large":
        this.classes.set( [...this.classes(), "text-xl"])
        break;
      case "xlarge":
        this.classes.set([...this.classes(), "text-2xl"])
        break;
      case "xxlarge":
        this.classes.set([...this.classes(), "text-4xl text-warning "])
        break;
    
      default:
        break;
    }
  }

  getFontStyle = (fontStyle: IFontStyle) => {
    switch (fontStyle) {
      case "italic":
        return  "italic"
      case "bold":
        return  "font-bold"

      default:
      return ""
    }
  }

  manageFontStyles = () => {
    if (this.fontStyles().length) {
      this.classes.set([...this.classes(), ...this.fontStyles().map(fontStyle => this.getFontStyle(fontStyle))])
    }
  }

  ngOnInit() {
    this.manageVariants()
    this.manageFontStyles()
  }

}
