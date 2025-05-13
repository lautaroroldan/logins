import { GoogleLogin as GoogleLoginComponent, type CredentialResponse, } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import type { GoogleCredential } from '../../../types/Google';

function GoogleLogin() {

    const handleLogin = (credentialResponse: CredentialResponse) => {
        const credential: GoogleCredential = jwtDecode(credentialResponse.credential ?? '');
        console.log(credential.email);
    }

    return (
        <div>
            <h1>Google Login</h1>
            <GoogleLoginComponent
                text='signin'
                onSuccess={handleLogin}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    )
}

export default GoogleLogin;