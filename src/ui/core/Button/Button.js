import React from 'react'
import styles from './Button.module.css'
import cn from 'classnames'
import pt from 'prop-types'

export function Button(props) {

	const {
		className,
		size,
    view,
    rounded,
		children,
		noStyle,
		icon,
		onClick,
		hint,
		testId,
		component,
		...rest
	} = props;

	const Component = component;

	const classes = noStyle
		? cn(styles.noStyle, { [className]: Boolean(className) })
		: cn({
				[styles.button]: true,
        [styles.withIcon]: Boolean(icon),
        [styles.onlyIcon]: icon && !children,
				[styles[`size_${size}`]]: size,
        [styles[`view_${view}`]]: view,
        [styles.rounded]: rounded,
				[className]: Boolean(className),
			});

  const commonProps = {
    'className': classes,
    'onClick': onClick,
    'title': hint,
    'data-test-id': testId || props['data-test-id'],
  };

  const iconView = props.icon && <span className={styles.icon}>{icon}</span>;

  const childClasses = cn({
    [styles.content]: true
  });

  const buttonChild = iconView ? (
    <span>
      {iconView}
      {children && <div className={styles.text}>{children}</div>}
    </span>
  ) : (
    <>{children}</>
  );

  return <Component {...commonProps}>{buttonChild}</Component>
  // return (<button className={classes} onClick={()=>{console.log('click')}}>{props.children}</button>)
}


Button.displayName = 'Button';

Button.propTypes = {
  noStyle: pt.bool,
  view: pt.oneOf(['primary', 'secondary', 'clear']),
  rounded: pt.bool,
  size: pt.oneOf(['l', 'xl']),
  icon: pt.node,
  hint: pt.string,
  component: pt.elementType,
  testId: pt.string,
  children: pt.node,
  disabled: pt.bool,
  centerContent: pt.bool,
};

Button.defaultProps = {
  noStyle: false,
  view: 'action',
  size: 'xl',
  icon: undefined,
  rounded: false,
  // iconPosition: 'right',
  component: 'button',
  hint: undefined,
  testId: undefined,
  children: undefined,
  disabled: undefined,
  // isAdaptive: false,
  centerContent: true,
};
