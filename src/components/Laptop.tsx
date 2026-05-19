import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Laptop = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12m-2 0h20v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3z" />
      </IconBase>
    );
  }
);

Laptop.displayName = 'Laptop';
