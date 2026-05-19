import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Check = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polyline points="20 6 9 17 4 12" />
      </IconBase>
    );
  }
);

Check.displayName = 'Check';
