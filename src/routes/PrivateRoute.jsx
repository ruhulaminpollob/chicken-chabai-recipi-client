import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" />
};

export default PrivateRoute;