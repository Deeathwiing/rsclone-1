import React, { useState } from 'react';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import XIcon from '@/assets/svg/x.svg';
import styles from '@/components/Authorize/Authorize.scss';
import { INTRO_ROUTE } from '@/utils/consts';

const Authorize: FC = (): JSX.Element => {
  const [option, setOption] = useState<'login' | 'registration'>('login');

  return (
    <div className={styles.authorize}>
      <NavLink to={INTRO_ROUTE}>
        <button className={styles.close} type="button">
          <XIcon />
        </button>
      </NavLink>

      {option === 'login' ? (
        <form className={styles.form}>
          <div className={styles.title}>Login</div>
          <input className={styles.input} type="email" placeholder="E-mail" />
          <input className={styles.input} type="password" placeholder="Password" />
          <button className={styles.btn} type="button">
            Sign In
          </button>
          <button className={styles.link} type="button" onClick={() => setOption('registration')}>
            Registration
          </button>
        </form>
      ) : (
        <form className={styles.form}>
          <div className={styles.title}>Registration</div>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="email" placeholder="E-mail" />
          <input className={styles.input} type="password" placeholder="Password" />
          <button className={styles.btn} type="button">
            Sign Up
          </button>
          <button className={styles.link} type="button" onClick={() => setOption('login')}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Authorize;
