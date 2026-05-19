import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Navigation2 = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="12 2 19 21 12 17 5 21 12 2" />
      </IconBase>
    );
  }
);

Navigation2.displayName = 'Navigation2';
