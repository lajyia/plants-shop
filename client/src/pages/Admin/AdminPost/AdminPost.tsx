import React, { FC, useState } from 'react';
import AdminAside from '../../../components/AdminAside/AdminAside';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import styles from './AdminPost.scss';
import Input from '../../../components/UI/Input/Input';
import Textarea from '../../../components/UI/Textarea/Textarea';



const AdminPost: FC = () => {

    const [formBody, setFormBody] = useState({ title: '', body: '', image: '' })
    const [image, setImage] = useState<string | Blob>('');


    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormBody({ ...formBody, title: e.target.value })
    }

    const changeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setFormBody({ ...formBody, body: e.target.value })

    }

    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {

        

    }

    return (
        <div>
            <Header />
            <AdminAside />
            <div className='container'>
                <div className={styles.admin_post}>
                    <div className={styles.admin_post_create}>
                        <form className={styles.admin_post_form}>
                            <input className={styles.admin_create_post_title} type="text" onChange={changeTitle}/>
                            <Textarea onChange={changeBody}/>
                            <input type="file" onChange={changeImage} />
                        </form>
                    </div>
                    <div className={styles.admin_post_preview}>
                        <div className={styles.admin_post_title_preview}></div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AdminPost;