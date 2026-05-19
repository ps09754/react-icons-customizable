import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Sunset = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M18 22H6M12 16v6M12 22l-4-4M12 22l4-4M8 12H4a8 8 0 0 1 16 0h-4" />
      </IconBase>
    );
  }
);

Sunset.displayName = 'Sunset';
