import { trigger, sequence, state, animate, transition, style } from '@angular/animations';

export const rowsAnimation = 
    trigger('rowsAnimation', [
      transition(':enter', [
        style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
        sequence([
          animate(".25s ease", style({ height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none'  })),
          animate(".15s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateX(0px)', 'box-shadow': 'none' }),
        sequence([
          animate(".25s ease", style({ opacity: '.2', transform: 'translateX(-550px)' })),
          animate(".15s ease", style({ opacity: '0', }))
        ])
      ]),
    ]);