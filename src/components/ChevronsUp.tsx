import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ChevronsUp = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="17 11 12 6 7 11" /><polyline points="17 18 12 13 7 18" />
      </IconBase>
    );
  }
);

ChevronsUp.displayName = 'ChevronsUp';
