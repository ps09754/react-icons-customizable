import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Keyhole = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <circle cx="12" cy="12" r="10" /><path d="M12 8a2 2 0 0 0-1 3.46v2.54a1 1 0 0 0 2 0v-2.54A2 2 0 0 0 12 8z" />
      </IconBase>
    );
  }
);

Keyhole.displayName = 'Keyhole';
