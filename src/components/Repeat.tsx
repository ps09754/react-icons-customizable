import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Repeat = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </IconBase>
    );
  }
);

Repeat.displayName = 'Repeat';
