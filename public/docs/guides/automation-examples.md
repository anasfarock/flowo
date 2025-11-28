---
title: Automation Examples
description: Real-world examples and step-by-step guides for common automations
order: 2
---

# Automation Examples and Use Cases

This guide provides real-world examples and step-by-step instructions for implementing common automations using Flowo.

## Example 1: Email to Slack Notifications

### Use Case
Get notified in Slack whenever an important email arrives in Gmail with specific keywords.

### Setup Steps

**Step 1: Add Trigger**
- Trigger Type: Gmail - New Email
- Settings:
  - From: Leave empty (or specify email)
  - Subject contains: "urgent" OR "important"

**Step 2: Add Condition (Optional)**
- Condition: Email subject contains "invoice"
- If True: Continue to actions

**Step 3: Add Action**
- Action Type: Slack - Send Message
- Settings:
  - Channel: #notifications
  - Message: "📧 New Email: {Subject} from {From}"
  - Thread: Optional

**Step 4: Test & Activate**
- Send yourself a test email with "urgent" in the subject
- Verify Slack message appears
- Activate automation

**Result:** Important emails instantly alert you in Slack

---

## Example 2: Google Form to Spreadsheet Automation

### Use Case
Automatically save Google Form responses to a spreadsheet with automatic formatting.

### Setup Steps

**Step 1: Add Trigger**
- Trigger Type: Google Forms - New Response
- Settings:
  - Form: Select your form
  - Notify on: All responses

**Step 2: Add Action 1**
- Action Type: Google Sheets - Add Row
- Settings:
  - Spreadsheet: Create new or select existing
  - Sheet: Responses
  - Values:
    - Column A: {Timestamp}
    - Column B: {Email}
    - Column C: {Response}

**Step 3: Add Action 2 (Optional)**
- Action Type: Gmail - Send Email
- Settings:
  - To: {Email}
  - Subject: "Thank you for your response"
  - Body: "We received your response and will get back soon"

**Step 4: Test & Activate**
- Submit a test form response
- Check spreadsheet and confirmation email
- Activate automation

**Result:** Form responses automatically organized in spreadsheet

---

## Example 3: Invoice Processing Workflow

### Use Case
Automatically extract invoice data and create payment reminders.

### Setup Steps

**Step 1: Add Trigger**
- Trigger Type: Gmail - New Email with Attachment
- Settings:
  - Subject contains: "invoice"
  - Attachment contains: "pdf" OR "docx"

**Step 2: Add Action 1**
- Action Type: Data Extractor - Extract Invoice Data
- Settings:
  - Document: {Attachment}
  - Extract: Amount, Date, Company Name

**Step 3: Add Action 2**
- Action Type: Google Sheets - Add Row
- Settings:
  - Spreadsheet: Invoice Tracker
  - Values:
    - Company: {Extracted Company}
    - Amount: {Extracted Amount}
    - Date: {Extracted Date}
    - Status: Pending

**Step 4: Add Action 3**
- Action Type: Google Calendar - Create Event
- Settings:
  - Title: "Pay Invoice - {Company}"
  - Date: 30 days from today
  - Description: "Amount: {Amount}"

**Step 5: Test & Activate**
- Send test invoice email
- Check spreadsheet and calendar
- Activate automation

**Result:** Invoices automatically tracked with payment reminders

---

## Example 4: Customer Support Ticket Routing

### Use Case
Route support emails to correct team based on keywords.

### Setup Steps

**Step 1: Add Trigger**
- Trigger Type: Gmail - New Email
- Settings:
  - To: support@company.com

**Step 2: Add Condition 1**
- If subject contains "billing"
- Then: Go to Action 1

**Step 3: Add Condition 2**
- Else if subject contains "technical"
- Then: Go to Action 2

**Step 4: Add Condition 3**
- Else: Go to Action 3

**Step 5: Add Actions**

*Action 1 (Billing)*
- Forward to: billing@company.com
- Add label: Billing-Support

*Action 2 (Technical)*
- Forward to: tech-support@company.com
- Add label: Technical-Support

*Action 3 (General)*
- Forward to: support@company.com
- Add label: General-Support

**Step 6: Test & Activate**
- Send test emails with different keywords
- Verify routing to correct team
- Activate automation

**Result:** Tickets automatically routed to appropriate department

---

## Example 5: Social Media Engagement Tracking

### Use Case
Log social media mentions to a spreadsheet for analysis.

### Setup Steps

**Step 1: Add Trigger**
- Trigger Type: Twitter - New Mention
- Settings:
  - Account: Your brand account
  - Keywords: Your brand name, product names

**Step 2: Add Action 1**
- Action Type: Google Sheets - Add Row
- Settings:
  - Spreadsheet: Social Analytics
  - Values:
    - Date: {Timestamp}
    - Platform: Twitter
    - Author: {Author}
    - Content: {Tweet}
    - Sentiment: {Auto-detected}

**Step 3: Add Action 2 (Conditional)**
- Condition: Sentiment is negative
- Action: Slack - Send Alert
- Message: "⚠️ Negative mention: {Tweet} from {Author}"

**Step 4: Test & Activate**
- Tag your brand account in a tweet
- Check spreadsheet and Slack
- Activate automation

**Result:** Social mentions automatically tracked and analyzed

---

## Example 6: Weekly Report Generation

### Use Case
Automatically generate and send weekly performance reports.

### Setup Steps

**Step 1: Add Trigger**
- Trigger Type: Scheduled
- Settings:
  - Frequency: Weekly
  - Day: Friday
  - Time: 5:00 PM

**Step 2: Add Action 1**
- Action Type: Data Aggregator
- Settings:
  - Collect data from:
    - Website analytics (pageviews, users)
    - Sales data (revenue, conversions)
    - Support tickets (resolved, pending)

**Step 3: Add Action 2**
- Action Type: Google Docs - Create Document
- Settings:
  - Template: Weekly Report
  - Replace variables with aggregated data
  - Title: "Weekly Report - {Date}"

**Step 4: Add Action 3**
- Action Type: Gmail - Send Email
- Settings:
  - To: team@company.com
  - Subject: "Weekly Report - {Week}"
  - Attachment: {Generated Report}

**Step 5: Test & Activate**
- Run test manually
- Verify report format and email
- Activate automation

**Result:** Weekly reports automatically generated and sent

---

## Example 7: Lead Scoring and CRM Update

### Use Case
Automatically score leads and update CRM based on engagement.

### Setup Steps

**Step 1: Add Trigger**
- Trigger Type: Webhook
- Settings:
  - Listen for: Lead form submission

**Step 2: Add Action 1**
- Action Type: CRM - Create Contact
- Settings:
  - Name: {Form Name}
  - Email: {Form Email}
  - Phone: {Form Phone}

**Step 3: Add Action 2**
- Action Type: Scorer
- Settings:
  - Score based on:
    - Email domain (company = +10)
    - Website visit frequency (+5 per visit)
    - Email opens (+2 each)

**Step 4: Add Action 3**
- Action Type: CRM - Update Contact
- Settings:
  - Contact: {Created Contact}
  - Update field "Score": {Calculated Score}
  - Update field "Status": {Based on Score}

**Step 5: Add Action 4 (Conditional)**
- Condition: Score > 50
- Action: Slack - Notify Sales Team
- Message: "🔥 Hot lead: {Name} - Score: {Score}"

**Step 6: Test & Activate**
- Submit test form
- Check CRM and Slack
- Activate automation

**Result:** Leads automatically scored and prioritized for sales

---

## Example 8: Backup and Archive Automation

### Use Case
Automatically backup important files daily and archive old files monthly.

### Setup Steps

**Step 1: Add Trigger (Daily Backup)**
- Trigger Type: Scheduled
- Settings:
  - Frequency: Daily
  - Time: 2:00 AM

**Step 2: Add Action 1**
- Action Type: Google Drive - List Files
- Settings:
  - Folder: Important Documents
  - Modified in last: 24 hours

**Step 3: Add Action 2**
- Action Type: Cloud Storage - Copy Files
- Settings:
  - Source: {Files from Action 1}
  - Destination: Backup/Daily/{Date}

**Step 4: Add Action 3 (Monthly Archive)**
- Trigger Type: Scheduled (separate automation)
- Settings:
  - Frequency: Monthly
  - Day: Last day
  - Time: 11:00 PM

**Step 5: Add Archive Action**
- Action Type: Cloud Storage - Archive Files
- Settings:
  - Source: Older than 90 days
  - Archive to: Archive/{Year}/{Month}

**Step 6: Test & Activate**
- Run test manually
- Verify files copied/archived
- Activate both automations

**Result:** Files automatically backed up and archived

---

## Best Practices for Automation Examples

### 1. Test First, Activate Later
Always test with real or realistic data before activating.

### 2. Start Simple
Begin with straightforward automations before adding complexity.

### 3. Add Error Handling
Include notifications if automation fails.

### 4. Document Your Automations
Add descriptions explaining what each automation does.

### 5. Monitor Performance
Check logs regularly to ensure automations run smoothly.

### 6. Optimize Over Time
Refine automations based on performance and feedback.

---

## Common Automation Patterns

### Fan-Out Pattern
One trigger → Multiple actions to different services

### Conditional Branching
Different actions based on data conditions

### Loop Pattern
Repeat actions for multiple items

### Sequential Chaining
One automation triggers another

### Scheduled Aggregation
Collect and summarize data over time

---

## Next Steps

- Explore more [templates](/)
- Learn about [advanced workflows](/docs/guides/advanced-workflows)
- Check out [API documentation](/docs/api/overview)
- Join our community for more examples

**Have a use case not covered here?** [Contact us](mailto:support@flowo.com) for custom automation assistance.