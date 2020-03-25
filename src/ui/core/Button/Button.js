import React from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

export function Button(props) {
  
	const classNames = {
		[styles.button]: true,
		[styles[props.view]]: props.view
	}

	return (<button className={cn(classNames)}>{props.children}</button>)
}