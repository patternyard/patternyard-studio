import React from 'react';
import styles from './vote-frame.css';
import {PM_HOME_ROOT} from '../lib/pm-config';

const VoteFrame = props => (
    <iframe
        className={styles.frame}
        style={props.id != '0' ? {} : { display: 'none' }}
        src={
            props.id != '0'
                ? `${PM_HOME_ROOT}/embed/vote?id=${props.id}#dark=${props.darkmode}`
                : 'about:blank'
        }
    ></iframe>
);

export default VoteFrame;
