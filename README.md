# custom-slack-slash-command

The following small app can be used to intergrate a custom slash command on Slack.

Please note that the app is using *synced* requests, and sending a delayed responses.

More info on Slack delayed responses can be found here:
https://api.slack.com/slash-commands

The following app uses Zendesk API to retrive the last 3 comments of a support case.
Clone all files in the repo, edit the Zendesk credentials vars, and run server.js

To get a public URL for Slack's post requests, i've used ngrok:
https://ngrok.com/
