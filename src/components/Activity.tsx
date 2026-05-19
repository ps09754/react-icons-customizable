import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Activity = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </IconBase>
    );
  }
);

Activity.displayName = 'Activity';
