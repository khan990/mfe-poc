import styles from './router-react-lib.module.css';

/* eslint-disable-next-line */
export interface RouterReactLibProps {}

export function RouterReactLib(props: RouterReactLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RouterReactLib!</h1>
    </div>
  );
}

export default RouterReactLib;
