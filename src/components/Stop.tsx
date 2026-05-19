import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Stop = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      </IconBase>
    );
  }
);

Stop.displayName = 'Stop';
