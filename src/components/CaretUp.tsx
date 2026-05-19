import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CaretUp = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="12 8 6 14 18 14" />
      </IconBase>
    );
  }
);

CaretUp.displayName = 'CaretUp';
