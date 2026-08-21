import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export function AuthProvider({
    children
}: {
    children: ReactNode;
}) {

    const [isAuthenticated, setIsAuthenticated] =
        useState<boolean>(() => {
            return localStorage.getItem('eclair-auth') === 'true';
        });

    const login = () => {
        localStorage.setItem('eclair-auth', 'true');
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('eclair-auth');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            'useAuth must be used inside AuthProvider'
        );
    }

    return context;
}