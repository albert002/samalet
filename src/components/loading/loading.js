import React from 'react';
import { Spin } from 'antd';
import { useStoreContext } from '../../store/storeContext';
import styles from './styles.module.css';

export default function Loading() {
  const { state } = useStoreContext();

  if(state.loading) {
    return (
      <div className={styles.root}>
        <Spin size="large"/>
      </div>
    );
  }
  return <div />
}
