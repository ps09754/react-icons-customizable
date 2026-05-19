import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Figma = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M12 6a3 3 0 1 0-3-3v3zm0 0a3 3 0 1 1 3-3v3zm0 6a3 3 0 1 0-3-3v3zm0 0a3 3 0 1 1 3-3v3zm-3 6a3 3 0 1 0-3-3v3zm6 0a3 3 0 1 1-3-3" />
      </IconBase>
    );
  }
);

Figma.displayName = 'Figma';
