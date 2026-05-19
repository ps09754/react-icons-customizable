import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ChevronsLeft = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="11 17 6 12 11 7" /><polyline points="17 17 12 12 17 7" />
      </IconBase>
    );
  }
);

ChevronsLeft.displayName = 'ChevronsLeft';
