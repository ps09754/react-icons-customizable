import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CornerUpRight = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" />
      </IconBase>
    );
  }
);

CornerUpRight.displayName = 'CornerUpRight';
