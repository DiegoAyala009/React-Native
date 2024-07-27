import { create } from "zustand";

interface AuthState {
    status: 'authenticated' | 'unaunthenticated' | 'checking';
    token?: string;
        user?: {
            name: string;
            email: string;
        };
    login: (email: string, password: string) => void;
    logout: () => void;
}


export const useAuthStore = create<AuthState>()( (set) => ({

    status: 'checking',
    token: undefined,
    user: undefined,

    login: (email: string, password: string) => {
        set( {
            status: 'authenticated',
            token: 'ABC123',
            user: {
                name: 'Diego Ayala',
                email: email,
            }
        });
    },


    logout: () => {
        set ({ 
            status: 'unaunthenticated',
            token: undefined,
            user: undefined
        });
    },
})
);
