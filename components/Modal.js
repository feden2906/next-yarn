import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from '/styles/Modal.module.scss'
import { res } from "../redux";

export function Modal({ children }) {
  const dispatch = useDispatch();
  const modal = useSelector(({ modal }) => modal);

  return (
    <>
      {
        modal &&
          <div className={styles.modal} onClick={() => dispatch(res())}>
            <div className={styles.content} onClick={event => event.stopPropagation()}>
              {children}
            </div>
          </div>
      }
    </>
  );
}
