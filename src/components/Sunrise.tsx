import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Sunrise = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M18 22H6M12 2v14M12 2l-4 4M12 2l4 4M8 18H4a8 8 0 0 1 16 0h-4M12 18H12" />
      </IconBase>
    );
  }
);

Sunrise.displayName = 'Sunrise';
