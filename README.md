# AzureAD ADAL JS Example

This repo contains a super-basic client-side HTML/JS application (pulled from https://github.com/Azure-Samples/active-directory-javascript-singlepageapp-dotnet-webapi) using the AzureAD v1.0 endpoint.

### To Use:
1. Clone the repo
2. Create a new "App registration" in the AzureAD Portal
  * Navigate to the Azure Portal, Azure Active Directory
  * App registrations (Preview)
  * New registration
  * Enter a name for your application, choose "Accounts in this organization directory only), and click Register
  * On the application homepage, click the "Add a Redirect URI" under Redirect URIs
  * Make sure the Type is "Web", and enter the web location for your web application (or http://localhost/ for testing). Make sure your Redirect URI has a trailing slash.
  * Scroll down, and check the ID tokens page checkbox under Implicit grant, and click Save.
  * Navigate back to the Overview page, and copy the "Application (client) ID".
  * Open the js/app.js file in the clone directory, and populate the tenant name (YOURDOMAIN.onmicrosoft.com), as well as the clientId you copied above. Save the file.
  * Run the code. Clicking the Login link in the upper right should allow you to sign in.