import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ArrowLeft = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
      </IconBase>
    );
  }
);

ArrowLeft.displayName = 'ArrowLeft';
