import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ChevronRight = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="9 18 15 12 9 6" />
      </IconBase>
    );
  }
);

ChevronRight.displayName = 'ChevronRight';
