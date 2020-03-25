import React from 'react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default { 
	title: "Button",
	component: Button,
	decorators: [withKnobs,
		storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>] 
};

export const primary = () => <Button  view='primary' onClick={action('clicked')}>Button</Button>;

export const dynamicButton = () => {
	// const title = text("Button", "Кнопка"); 

	const label = "BB";
	const options = ['primary', 'borders'];
	const defaultValue = 'primary';
	const groupId = 'GROUP-ID1';
	const view = select(label, options, defaultValue, groupId);

  return <Button view={view}>Button</Button>;
};