import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CornerDownRight = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="15 10 20 15 15 20" /><path d="M4 4v7a4 4 0 0 0 4 4h12" />
      </IconBase>
    );
  }
);

CornerDownRight.displayName = 'CornerDownRight';
