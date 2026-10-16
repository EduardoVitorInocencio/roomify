interface AuthState { // Define the AuthState interface
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
}

type AuthContext = { // Define the AuthContext type
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
    refreshAuth: () => Promise<void>; // Add the refreshAuth method to the AuthContext
    signIn: () => Promise<void>; // Add the signIn method to the AuthContext
    signOut: () => Promise<void>; // Add the signOut method to the AuthContext
};