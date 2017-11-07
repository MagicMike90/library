import { sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);

export const routerTransition = trigger('routerTransition', [
    transition('* => *', [
        query(':enter',
            [
                style({ opacity: 0 })
            ],
            { optional: true }
        ),

        query(':leave',
            [
                style({ opacity: 1 }),
                animate('0.2s', style({ opacity: 0 }))
            ],
            { optional: true }
        ),

        query(':enter',
            [
                style({ opacity: 0 }),
                animate('0.2s', style({ opacity: 1 }))
            ],
            { optional: true }
        )

    ])
]);
