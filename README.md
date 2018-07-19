# BCChat
Test chat app built in ReactJS that exerce the brainCloud Real Time Tech (RTT)

## How to test this app yourself
1. Create a new app in the portal if you don't already have one
2. In **Advanced Settings** of the portal, check "**Real-time Tech (RTT) Enabled**"
3. In **Messaging - Chat** section of the portal, enable "**Chat Service Enabled**", then click save.
4. In **Messaging - Chat Channels** Channels section of the portal, create some new global chat channels to be visible in the app.
5. Clone this repository
6. in `src/App.js`, fill in the `appId`, `appSecret` and `brainCloudServerURL`:
    ```
    let brainCloudServerURL = " ... "; // PLEASE FILL
    let GAMES = {
        bcchat: {
            appId: " ... ", // PLEASE FILL
            appSecret: " ... ", // PLEASE FILL
            channels: [
            ]
        }
    }
    ```
    That information can be found in **Core App Info - Application IDs** section of the portal.
7. Open Terminal into the repository and type:
   ```
   npm install
   ```
8. Then type:
   ```
   npm start
   ```

This should launch BCChat into a tab in your browser and it should just work! Enjoy.
