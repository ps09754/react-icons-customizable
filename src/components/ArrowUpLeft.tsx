import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ArrowUpLeft = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="17" y1="17" x2="7" y2="7" /><polyline points="7 17 7 7 17 7" />
      </IconBase>
    );
  }
);

ArrowUpLeft.displayName = 'ArrowUpLeft';
