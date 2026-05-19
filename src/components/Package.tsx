import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Package = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><polygon points="12 22.08 12 12 3 6.96 3 16.08 12 22.08" /><polygon points="12 22.08 12 12 21 6.96 21 16.08 12 22.08" /><polygon points="12 12 3 6.96 12 2 21 6.96 12 12" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </IconBase>
    );
  }
);

Package.displayName = 'Package';
