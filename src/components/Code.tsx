import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Code = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </IconBase>
    );
  }
);

Code.displayName = 'Code';
