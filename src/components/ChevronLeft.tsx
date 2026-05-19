import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ChevronLeft = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="15 18 9 12 15 6" />
      </IconBase>
    );
  }
);

ChevronLeft.displayName = 'ChevronLeft';
