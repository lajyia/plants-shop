import React, { FC } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps{
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string,
    spellCheck: boolean
}

const Textarea:FC<TextareaProps> = ({onChange, value, spellCheck}) => {
    return (
        <textarea spellCheck={spellCheck} value={value} onChange={onChange} className={styles.textarea}></textarea>
    );
};

export default Textarea;