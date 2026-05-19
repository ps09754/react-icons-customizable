import React from 'react';
import { injectStyles } from '../styles/styles';

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (maps to both width and height). Default: 24 */
  size?: string | number;
  /** Primary color of the icon. Default: 'currentColor' */
  color?: string;
  /** Secondary color used for hoverColor or custom animation transitions */
  hoverColor?: string;
  /** Animation style to apply to the icon. Default: 'none' */
  animation?: 'scale' | 'rotate' | 'color-shift' | 'glow' | 'loading' | 'none';
  /** Duration of the animation in seconds. Default: 0.3 */
  animationDuration?: number;
  /** Trigger animation only on hover. If false, it plays infinitely. Default: false */
  hoverEffect?: boolean;
}

export const IconBase = React.forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    // Inject premium styles dynamically on component evaluation
    injectStyles();

    const {
      size = 24,
      color = 'currentColor',
      hoverColor,
      animation = 'none',
      animationDuration = 0.3,
      hoverEffect = false,
      className,
      style,
      children,
      ...rest
    } = props;

    // Build the dynamic CSS classes for animations
    const classes = ['ag-icon'];
    if (className) {
      classes.push(className);
    }

    if (animation && animation !== 'none') {
      if (animation === 'loading') {
        classes.push('ag-icon-loading');
      } else {
        const stateSuffix = hoverEffect ? 'hover' : 'infinite';
        classes.push(`ag-icon-${animation}-${stateSuffix}`);
      }
    }

    // Dynamic style definitions utilizing CSS custom properties
    const customStyles: React.CSSProperties = {
      color,
      '--ag-duration': `${animationDuration}s`,
      ...(hoverColor ? { '--ag-hover-color': hoverColor } : {}),
      ...style,
    } as React.CSSProperties;

    return (
      <svg
        ref={ref}
        className={classes.join(' ')}
        style={customStyles}
        width={size}
        height={size}
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

IconBase.displayName = 'IconBase';
