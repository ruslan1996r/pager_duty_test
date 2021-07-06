1. Create service in PagerDuty, if not already created
  - Services -> New Service -> Choose Alert (I chose Events API V2)

2. Connect PagerDuty to Sentry
  - Settings -> Integrations -> Add Installation
  - Connect Sentry to the app

3. Set Alert conditions in Sentry
  - Alerts -> Team (Choose team) -> Set conditions
    - When -> (I choose `A new issue is created`)
    - If -> (Can be empty)
    - Then -> Send a notification to PagerDuty account -> (I choose `Select team & service`)

4. Add Slack Extension for PagerDuty
  - Integrations -> Slack Integration -> Add -> Install App into Workspace -> Allow

5. Add Slack Notifications
  - Integrations -> New Extension
    - Slack V2
    - Service (created or existing service from Service -> Service Directory)
    - Authorize
    - Select a channel for mailing `@channel_example`
    - Allow

6. Add an additional mailbox for mailing
  - Services -> Service Directory -> Escalation Policy -> Notify -> Add Email Address