import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Link2 = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="8" y1="12" x2="16" y2="12" /><path d="M12 5h3.5a5 5 0 0 1 0 10H12m0-10H8.5a5 5 0 0 0 0 10H12" />
      </IconBase>
    );
  }
);

Link2.displayName = 'Link2';
