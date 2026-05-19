import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CloudDrizzle = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="8" y1="19" x2="8" y2="21" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="16" y1="19" x2="16" y2="21" /><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
      </IconBase>
    );
  }
);

CloudDrizzle.displayName = 'CloudDrizzle';
