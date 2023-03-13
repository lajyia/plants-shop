import React, { FC, useState } from 'react';
import AdminAside from '../../../components/AdminAside/AdminAside';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import styles from './AdminPost.module.scss';
import Input from '../../../components/UI/Input/Input';
import Textarea from '../../../components/UI/Textarea/Textarea';
import Button from '../../../components/UI/Button/Button';



const AdminPost: FC = () => {

    const [formBody, setFormBody] = useState({ title: '', body: '', image: '' })
    const [image, setImage] = useState<string | Blob>('');

    const [previewPath, setPreviewPath] = useState<string>('');


    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormBody({ ...formBody, title: e.target.value })
    }

    const changeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setFormBody({ ...formBody, body: e.target.value })

    }

    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.files) {
            setImage(e.target.files[0]);

            const pathPreview = URL.createObjectURL(e.target.files[0])

            setPreviewPath(pathPreview);
        }

    }

    let validTitlePreview = formBody.title.substring(0, 40);

    return (
        <div>
            <Header />
            <AdminAside />
            <div className='container'>
                <div className={styles.admin_post}>
                    <div className={styles.admin_post_create}>
                        <form className={styles.admin_post_form}>
                            <div className={styles.admin_post_title}>
                                <div className={styles.admin_post_title_title}>Title:</div>
                                <input spellCheck="false" value={formBody.title} className={styles.admin_create_post_title} type="text" onChange={changeTitle} />
                            </div>
                            <div className={styles.admin_post_body}>
                                <div className={styles.admin_post_title_body}>Body:</div>
                                <Textarea spellCheck={false} value={formBody.body} onChange={changeBody} />
                            </div>
                            <div className={styles.admin_post_image}>
                                <div className={styles.admin_post_image_body}>
                                    <div className={styles.admin_post_title_image}>Image:</div>
                                    <label htmlFor="file-input-create">Choose image</label>
                                </div>
                                <Button>Send</Button>
                                <input id="file-input-create" type="file" onChange={changeImage} />
                            </div>
                        </form>
                    </div>
                    <div className={styles.admin_post_preview}>
                        <div className={styles.admin_post_title_preview}>
                            {previewPath
                                ? <div className={styles.admin_preview_image}><img src={previewPath} /></div>
                                : <div></div>
                            }
                            <div className={styles.admin_preview_title}>{validTitlePreview}</div>
                            <div className={styles.admin_preview_body}>{formBody.body}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AdminPost;