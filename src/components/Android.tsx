import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Android = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <circle cx="12" cy="12" r="10" /><line x1="7" y1="8" x2="7.01" y2="8" /><line x1="17" y1="8" x2="17.01" y2="8" /><path d="M12 16v5M8 12v4M16 12v4" />
      </IconBase>
    );
  }
);

Android.displayName = 'Android';
