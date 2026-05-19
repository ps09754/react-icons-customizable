import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Clock = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </IconBase>
    );
  }
);

Clock.displayName = 'Clock';
