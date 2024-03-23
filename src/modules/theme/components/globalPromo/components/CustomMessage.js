import React from 'react'
import cx from 'classnames';

const CustomMessage = (props) => {
    const {
        storeConfig
    } = props;

  return (
    <p className={cx('custom-global-promo-message')}>
        {storeConfig && storeConfig.welcome ? storeConfig.welcome : 'Please Setup Message First'}
    </p>
  )
}

export default CustomMessage