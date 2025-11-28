---
title: Getting Started
description: A comprehensive guide to set up Flowo and create your first automation
order: 1
---

# Getting Started with Flowo

Welcome to Flowo! This guide will walk you through the process of setting up your account and creating your first automation workflow in minutes.

## Prerequisites

Before you begin, ensure you have:

- A valid email address
- A web browser (Chrome, Firefox, Safari, or Edge)
- Access to the services you want to automate (e.g., Gmail, Slack, etc.)
- Basic understanding of what automation means

## Step 1: Create Your Flowo Account

### Sign Up

1. Visit [flowo.com](https://flowo.com)
2. Click the **"Sign Up"** button in the top navigation
3. Enter your email address and create a secure password
4. Click **"Create Account"**
5. Verify your email by clicking the link sent to your inbox
6. Complete your profile with your name and company information

### Log In

Once your account is verified:

1. Go to [app.flowo.com](https://app.flowo.com)
2. Enter your email and password
3. Click **"Log In"**

You're now in the Flowo Dashboard!

## Step 2: Navigate the Dashboard

The dashboard has several key areas:

- **Sidebar Navigation:** Access Automations, Templates, Integrations, and Settings
- **Create Button:** Start a new automation (blue button in the top right)
- **Automations List:** View all your active automations
- **Quick Stats:** See your automation activity at a glance

## Step 3: Connect Your First Integration

Before creating an automation, you need to connect at least one service.

### Connect an Integration

1. Click **"Integrations"** in the left sidebar
2. Browse available integrations (Gmail, Slack, etc.)
3. Click on your desired integration
4. Click **"Connect"**
5. Follow the OAuth flow to authorize Flowo
6. Return to Flowo - your integration is now connected!

## Step 4: Create Your First Automation

### Using a Template (Recommended for Beginners)

1. Click **"Create New Automation"** or go to **"Templates"**
2. Browse available templates by category
3. Select a template (e.g., "Save Email Attachments to Google Drive")
4. Click **"Use Template"**
5. Follow the setup wizard to configure your automation
6. Click **"Create"**

### Creating From Scratch

1. Click **"Create New Automation"**
2. Click **"Start From Scratch"**
3. Name your automation (e.g., "Email to Slack")
4. Click **"Create"**

## Step 5: Build Your Automation Workflow

Every automation consists of three parts:

### Trigger (When This Happens)

1. Click **"Add Trigger"**
2. Select your trigger type:
   - **Webhook:** Triggered by an external system
   - **Scheduled:** Runs at specific times
   - **Manual:** You click to run it
   - **Event:** Triggered by an app event (new email, new message, etc.)
3. Configure the trigger settings
4. Click **"Save"**

**Example:** "When a new email arrives in Gmail"

### Actions (Then Do This)

1. Click **"Add Action"**
2. Select an action type:
   - **Send:** Send messages, emails, or notifications
   - **Create:** Create new items (tasks, documents, etc.)
   - **Update:** Update existing items
   - **Delete:** Remove items
   - **Search:** Find items matching criteria
   - **Custom:** Call APIs or webhooks
3. Configure the action settings
4. Add additional actions if needed
5. Click **"Save"**

**Example:** "Post a message to Slack"

### Conditions (Optional)

Add conditions to make your automation smarter:

1. Click **"Add Condition"** between trigger and actions
2. Set up logic like "If subject contains 'invoice'"
3. Create conditional branches for different scenarios

## Step 6: Map Your Data

Use data mapping to pass information between steps:

1. When adding an action, click the field you want to populate
2. Select **"Dynamic Content"** or **"Map"**
3. Choose from available fields from your trigger or previous actions
4. Flowo will automatically use this data in your action

**Example:** Map the email subject to the Slack message

## Step 7: Test Your Automation

Before going live:

1. Click **"Test"** button in the top right
2. Follow the trigger instructions (manual trigger = click button)
3. Check that all actions executed correctly
4. Review the execution log for any errors

## Step 8: Activate Your Automation

Once tested:

1. Click the **"Activate"** button
2. Your automation is now live!
3. It will run automatically based on your trigger

## Step 9: Monitor and Optimize

### View Execution History

1. Click on an automation
2. Go to **"Logs"** tab
3. Review past executions and any errors

### Edit Your Automation

1. Click on an automation
2. Click **"Edit"**
3. Make your changes
4. Click **"Save"**

Your automation will continue running with the new settings.

## Tips for Success

### Start Simple
Begin with a single trigger and one or two actions. You can always add complexity later.

### Test Before Activating
Always test your automation with real data before activating it.

### Use Templates
Templates are pre-configured and optimized. Use them as a starting point!

### Check Logs Regularly
Monitor your automations to ensure they're running smoothly.

### Leverage Conditions
Use conditions to handle different scenarios and make your automation more intelligent.

## Common First Automations

### 1. Email to Task Manager
**When:** New email arrives
**Then:** Create a task in your task manager

### 2. Social Media Monitoring
**When:** Someone mentions your brand
**Then:** Post to Slack channel

### 3. Document Backup
**When:** New file created in Google Drive
**Then:** Copy to cloud storage

### 4. Lead Capture
**When:** Form submitted on website
**Then:** Add contact to CRM and send email

## Troubleshooting

### Automation Not Running

- Check that it's activated (blue toggle)
- Verify the trigger condition is being met
- Check the execution logs for errors
- Ensure integrations are still authorized

### Actions Not Executing

- Verify all required fields are filled in
- Check that your integrations are connected
- Review error messages in the logs
- Test the automation again

### Data Not Mapping Correctly

- Ensure you're selecting the right data fields
- Check that the field contains data (not empty)
- Use preview mode to see available fields

## Next Steps

Congratulations! You've created your first automation. Now:

1. **Create More Automations:** Build additional workflows for other processes
2. **Explore Advanced Features:** Learn about conditions, loops, and error handling
3. **Check Out Templates:** Browse more template examples
4. **Read Advanced Guides:** Explore our documentation for complex scenarios
5. **Join Community:** Connect with other Flowo users for tips and tricks

---

**Need Help?**

- Visit our [Help Center](https://help.flowo.com)
- Email support@flowo.com
- Join our [Community Forum](https://community.flowo.com)