# Setting Up Email Functionality

This portfolio uses EmailJS to send contact form messages directly to your email without requiring a backend server.

## Setup Instructions

1. **Create an EmailJS Account**

   - Sign up at [https://www.emailjs.com/](https://www.emailjs.com/) (they have a free tier)

2. **Create an Email Service**

   - Go to the EmailJS dashboard
   - Click on "Email Services" in the sidebar
   - Click "Add New Service" and connect your email provider (Gmail, Outlook, etc.)
   - Note the Service ID (e.g., "service_abc123")

3. **Create an Email Template**

   - Go to "Email Templates" in the sidebar
   - Click "Create New Template"
   - Design your template using these variables from the contact form:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - The message content
   - Note the Template ID (e.g., "template_xyz789")

4. **Get Your Public Key**

   - Go to "Account" → "API Keys"
   - Copy your Public Key

5. **Update Environment Variables**
   - Open the `.env.local` file in your project
   - Replace the placeholder values with your actual IDs:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

6. **Restart Development Server**
   - Stop and restart your Next.js development server for the changes to take effect

## Testing

After setup, test the contact form by:

1. Fill out all fields on the contact form
2. Submit the form
3. Check your email to verify you received the message
4. If there are issues, check browser console for errors

## Template Example

Here's a simple template example for EmailJS:

```html
<h2>New Contact Message</h2>
<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

## Security Note

Although the public key is exposed in the client-side code, EmailJS has security measures to prevent abuse. You can add domain restrictions in your EmailJS account settings for additional security.
