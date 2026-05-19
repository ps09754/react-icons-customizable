import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Battery = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <rect x="1" y="6" width="18" height="12" rx="2" ry="2" /><line x1="23" y1="11" x2="23" y2="13" />
      </IconBase>
    );
  }
);

Battery.displayName = 'Battery';
