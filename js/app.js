    
(function () {
    // Enter Global Config Values & Instantiate ADAL AuthenticationContext
    window.config = {
        instance: 'https://login.microsoftonline.com/',
        tenant: '[Enter your tenant here, e.g. contoso.onmicrosoft.com]',
        clientId: '[Enter your client_id here, e.g. g075edef-0efa-453b-997b-de1337c29185]',
        postLogoutRedirectUri: window.location.origin,
        cacheLocation: 'localStorage' // enable this for IE, as sessionStorage does not work for localhost.
    };
    var authContext = new AuthenticationContext(config);

    // Get UI jQuery Objects
    var $panel = $(".panel-body");
    var $userDisplay = $(".app-user");
    var $signInButton = $(".app-login");
    var $signOutButton = $(".app-logout");
    var $errorMessage = $(".app-error");

    // Check For & Handle Redirect From AAD After Login
    var isCallback = authContext.isCallback(window.location.hash);
    authContext.handleWindowCallback();
    $errorMessage.html(authContext.getLoginError());

    if (isCallback && !authContext.getLoginError()) {
        window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
    }

    //if the user is not logged in, fire the azuread login logic
    if (!authContext.getCachedUser()) {
        authContext.config.redirectUri = [location.protocol, '//', location.host, location.pathname].join('');
        authContext.login();
    } else {
        // Check Login Status, Update UI
        var user = authContext.getCachedUser();
        if (user) {
            $userDisplay.html(user.userName);
            $userDisplay.show();
            $signInButton.hide();
            $signOutButton.show();
        } else {
            $userDisplay.empty();
            $userDisplay.hide();
            $signInButton.show();
            $signOutButton.hide();
        }
    }
}());

        

