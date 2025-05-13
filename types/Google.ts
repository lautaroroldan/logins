import type { JwtPayload } from "jwt-decode";

export interface GoogleCredential extends JwtPayload {
    email: string;
    email_verified: boolean;
    given_name: string;
    family_name: string;
    picture: string;
    name: string;
}