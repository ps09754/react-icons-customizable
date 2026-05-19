import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Minus = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="5" y1="12" x2="19" y2="12" />
      </IconBase>
    );
  }
);

Minus.displayName = 'Minus';
