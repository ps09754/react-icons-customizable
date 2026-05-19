import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ArrowDownRight = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="7" y1="7" x2="17" y2="17" /><polyline points="7 17 17 17 17 7" />
      </IconBase>
    );
  }
);

ArrowDownRight.displayName = 'ArrowDownRight';
