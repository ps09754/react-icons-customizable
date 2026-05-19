import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Apple = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M12 2C8 2 6 5 6 9c0 5 4 11 6 11s6-6 6-11c0-4-2-7-6-7z" /><path d="M12 2c0-1 1-2 2-2" />
      </IconBase>
    );
  }
);

Apple.displayName = 'Apple';
