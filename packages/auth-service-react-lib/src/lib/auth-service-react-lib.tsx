import styles from './auth-service-react-lib.module.css';

/* eslint-disable-next-line */
export interface AuthServiceReactLibProps {}

export function AuthServiceReactLib(props: AuthServiceReactLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AuthServiceReactLib!</h1>
    </div>
  );
}

export default AuthServiceReactLib;
