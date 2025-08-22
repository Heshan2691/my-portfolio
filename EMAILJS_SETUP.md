# EmailJS Setup Guide for Contact Form

## Step 1: Create an EmailJS Account

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Confirm your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Once created, note your **Service ID** (looks like "service_xxxxxx")

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your template with these variables:
   - `{{from_name}}` - The sender's name
   - `{{from_email}}` - The sender's email
   - `{{message}}` - The message content
   - `{{to_name}}` - Your name (optional)
4. Save the template and note the **Template ID** (looks like "template_xxxxxx")

## Step 4: Get Your Public API Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Update the Contact Component

1. Open `src/app/components/Contact.tsx`
2. Replace the placeholders with your actual values:

   ```javascript
   // Line ~39
   const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your actual key

   // Line ~65-67
   const serviceId = "service_example123"; // Replace with your actual service ID
   const templateId = "template_example123"; // Replace with your actual template ID
   const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your actual public key
   ```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check for successful submission and verify you received the email
4. Check browser console for any errors

## Common Issues and Fixes

### 400 Bad Request Error

- Make sure your service ID, template ID, and public key are correct
- Verify the form field names match your template variables (`from_name`, `from_email`, `message`)
- Check that your EmailJS account is active and verified

### Email Not Being Received

- Check your spam/junk folder
- Verify your email service is properly connected in EmailJS dashboard
- Confirm your template is set up correctly

## Moving to Environment Variables (Production)

Once everything is working, update your `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

Then uncomment the environment variable code in `Contact.tsx` and remove the hardcoded values.
