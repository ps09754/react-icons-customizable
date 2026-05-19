import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Wifi = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M5 12.55a11 11 0 0 1 14 0" /><path d="M9 16.55a6.5 6.5 0 0 1 6 0" /><path d="M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />
      </IconBase>
    );
  }
);

Wifi.displayName = 'Wifi';
