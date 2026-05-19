import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const SunCloud = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M12 10a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" /><path d="M18 14h.01" />
      </IconBase>
    );
  }
);

SunCloud.displayName = 'SunCloud';
