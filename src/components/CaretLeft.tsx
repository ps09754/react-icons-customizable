import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CaretLeft = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="14 6 8 12 14 18" />
      </IconBase>
    );
  }
);

CaretLeft.displayName = 'CaretLeft';
