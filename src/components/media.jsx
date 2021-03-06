import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  return (
    <div {...props} className={cn(styles.media, props.className)}>
      {props.left &&
        <div className={styles.left}>
          {props.left}
        </div>
      }
      {props.body &&
        <div className={styles.body}>
          {props.body}
        </div>
      }
      {props.right &&
        <div className={styles.right}>
          {props.right}
        </div>
      }
    </div>
  );
};
