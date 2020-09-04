import {keyframes, style, state} from '@angular/animations'


export const cardAnimation = [
  style({ opacity: 0, transform: 'translateY(100%) scale(.5)', offset: 0 }),
  style({ opacity: .5, transform: 'translateY(10px) scale(.75)', offset: 0.3 }),
  style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
]

export const swipe = [
  
]