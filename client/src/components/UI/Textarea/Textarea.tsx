import React, { FC } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps{
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea:FC<TextareaProps> = ({onChange}) => {
    return (
        <textarea onChange={onChange} className={styles.textarea}></textarea>
    );
};

export default Textarea;