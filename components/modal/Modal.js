import React from "react";
import styles from '/styles/Modal.module.scss'
import {useDispatch, useSelector} from "react-redux";

export function Modal({children}) {
    const dispatch = useDispatch();
    const modal = useSelector(({modal}) => modal)

    return (
        <>
            {modal && <div className={styles.modal} onClick={() => dispatch({type: "RES"})}>
                <div className={styles.content} onClick={event => event.stopPropagation()}>
                    {children}
                </div>
            </div>}
        </>
    );
}
