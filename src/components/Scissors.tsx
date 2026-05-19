import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Scissors = React.forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    return (
      <IconBase
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="9.8" y1="8.2" x2="21" y2="19.4" /><line x1="21" y1="4.6" x2="9.8" y2="15.8" />
      </IconBase>
    );
  }
);

Scissors.displayName = 'Scissors';
