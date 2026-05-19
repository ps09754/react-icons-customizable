import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const LoadingSpinnerIcon = React.forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    // Default the animation to 'loading' and duration to 1s if not explicitly configured
    const { animation = 'loading', animationDuration = 1, ...rest } = props;

    return (
      <IconBase
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        animation={animation}
        animationDuration={animationDuration}
        {...rest}
      >
        {/* Subtle background track for premium contrast */}
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" />
        {/* Animated spinner indicator arc */}
        <path d="M12 2a10 10 0 0 1 10 10" />
      </IconBase>
    );
  }
);

LoadingSpinnerIcon.displayName = 'LoadingSpinnerIcon';
