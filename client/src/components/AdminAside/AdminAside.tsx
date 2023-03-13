import React from 'react';
import styles from './AdminAside.module.scss';
import { Link } from 'react-router-dom';


const AdminAside = () => {
    return (
        <aside className={styles.admin_aside}>
            <div className='container'>
                <ul className={styles.admin_list_aside}>
                    <li className={styles.admin_item_list}><Link to="/admin/users">Users</Link></li>
                    <li className={styles.admin_item_list}><Link to="/admin/posts">Posts</Link></li>
                    <li className={styles.admin_item_list}><Link to="/admin/products">Products</Link></li>
                    <li className={styles.admin_item_list}><Link to="/admin/post">Create Post</Link></li>
                    <li className={styles.admin_item_list}><Link to="/admin/product">Create Product</Link></li>
                </ul>
            </div>

        </aside>
    );
};

export default AdminAside;