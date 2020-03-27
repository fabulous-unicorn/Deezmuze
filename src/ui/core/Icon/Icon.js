import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';

import styles from './Icon.module.css';

export const Icon = (props) => {
  const { size, hint, children, className, svgProps, testId, ...rest } = props;

  return (
    <div
      data-test-id={testId}
      title={hint}
      className={cn({
        [styles.icon]: true,
        [styles[`size_${size}`]]: size,
        [className]: Boolean(className),
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

Icon.propTypes = {
  size: pt.string,
  hint: pt.string,
  testId: pt.string,
};

Icon.defaultProps = {
  size: undefined,
  hint: null,
  testId: undefined,
};
