// script.js - フロントエンドの処理 (Tesla Login Button)

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            console.log('Login button clicked');

            const clientId = 'YOUR_TESLA_CLIENT_ID'; // ★★★ あなたのTesla Client IDに置き換える ★★★
            const redirectUri = 'https://tesla-test.netlify.app/.netlify/functions/oauth-callback'; // ★★★ あなたのサイトURLに合わせる ★★★
            const scopes = [
                'openid', 'email', 'offline_access',
                'vehicle_device_data', 'vehicle_cmds', 'vehicle_charging_cmds'
            ];
            const scope = scopes.join(' ');
            const state = Math.random().toString(36).substring(2);

            sessionStorage.setItem('oauth_state', state);
            console.log('Generated state:', state);

            const authUrl = new URL('https://auth.tesla.com/oauth2/v3/authorize');
            authUrl.searchParams.append('client_id', clientId);
            authUrl.searchParams.append('redirect_uri', redirectUri);
            authUrl.searchParams.append('response_type', 'code');
            authUrl.searchParams.append('scope', scope);
            authUrl.searchParams.append('state', state);

            console.log('Redirecting to:', authUrl.toString());
            window.location.href = authUrl.toString();
        });
    }
});