import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Navigation = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </IconBase>
    );
  }
);

Navigation.displayName = 'Navigation';
