import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';
import TextField from '@mui/material/TextField';

export default function Input({ placeholder, onChange }) {

    return (<div className={`${styles.container}`}>
        <TextField
            label="Outlined secondary"
            color="secondary"
            focused placeholder={placeholder}
            onChange={onChange}
        />
    </div>)

}

Input.defaultProps = {
    placeholder: '',
    onChange: () => { },
};
Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};
