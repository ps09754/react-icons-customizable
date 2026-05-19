import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CornerUpLeft = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 1-4-4H4" />
      </IconBase>
    );
  }
);

CornerUpLeft.displayName = 'CornerUpLeft';
