import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
    children: React.ReactElement;
}

function ProtectedRoute({
    children
}: ProtectedRouteProps) {

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;