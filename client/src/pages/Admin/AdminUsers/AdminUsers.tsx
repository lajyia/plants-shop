import React, { FC } from 'react';
import AdminAside from '../../../components/AdminAside/AdminAside';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';



const AdminUsers:FC = () => {
    return (
        <div>
            <Header/>
            <AdminAside />
            <Footer/>
        </div>
    );
};

export default AdminUsers;