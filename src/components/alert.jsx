import React from 'react';
// import cn from 'classnames';

export default styles => props => {
  return (
    <div className={styles.panel}>
      <div className={styles.body}>
        <h3 className={styles.title}>{props.message}</h3>
        {props.children}
      </div>
    </div>
  );
};
