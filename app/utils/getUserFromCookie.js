import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export function getUserFromCookie() {
    const cookieString = document.cookie;
    if (!cookieString) return null;

    const cookies = cookie.parse(cookieString);
    const token = cookies.SESSION;

    if (!token) return null;

    try {
        const decodedToken = jwt.decode(token);
        // Renvoie le nom ou le nom d'utilisateur selon ce qui est disponible
        return decodedToken?.name || decodedToken?.username || null;
    } catch (error) {
        console.error('Failed to decode JWT:', error);
        return null;
    }
}

export function getRolesFromCookie() {
    const cookieString = document.cookie;
    if (!cookieString) return null;

    const cookies = cookie.parse(cookieString);
    const token = cookies.SESSION;

    if (!token) return null;

    try {
        const decodedToken = jwt.decode(token);
        // Renvoie les rôles de l'utilisateur s'ils existent dans le token
        return decodedToken?.roles || [];
    } catch (error) {
        console.error('Failed to decode JWT:', error);
        return [];
    }
}

export function getJwtFromCookie() {
    const cookieString = document.cookie;
    if (!cookieString) return null;

    const cookies = cookie.parse(cookieString);
    // Renvoie le token JWT ou null
    return cookies.SESSION || null;
}
