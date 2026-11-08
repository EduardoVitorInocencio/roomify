// Define the AuthState interface and AuthContext type for managing authentication state in a TypeScript project.

interface AuthState { // Define the AuthState interface
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
}

type AuthContext = { // Define the AuthContext type
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
    refreshAuth: () => Promise<boolean>; // Add the refreshAuth method to the AuthContext
    signIn: () => Promise<boolean>; // Add the signIn method to the AuthContext
    signOut: () => Promise<boolean>; // Add the signOut method to the AuthContext
};