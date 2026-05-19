import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="6 9 12 15 18 9" />
      </IconBase>
    );
  }
);

ChevronDownIcon.displayName = 'ChevronDownIcon';
