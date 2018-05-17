export class GlobalItems {
    constructor() {

    }
    public static ENDPOINTS = {
        API_ENDPOINT: 'http://localhost:58128/',
        WEB_APP_URL: 'http://localhost:4200'
    };

    public static API_ENDPOINT = 'http://localhost:58128/';
    public static WEB_APP_URL = 'http://localhost:4200';


    public static OIDC_CONFIGURATION: any = {
        authority: 'http://localhost:5000',
        client_id: 'js',
        redirect_uri: 'http://localhost:4200/login/callback',
        response_type: 'id_token token',
        scope: 'openid profile breadshop',
        post_logout_redirect_uri: 'http://localhost:4200/index.html',
        loadUserInfo: true
    };
}

