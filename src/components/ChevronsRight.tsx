import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ChevronsRight = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="13 17 18 12 13 7" /><polyline points="7 17 12 12 7 7" />
      </IconBase>
    );
  }
);

ChevronsRight.displayName = 'ChevronsRight';
