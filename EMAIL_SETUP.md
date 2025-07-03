# Email Setup Guide for Allina Contact Forms - Using Resend

## Current Status
All contact forms are now configured to use **Resend** for email delivery. The emails are formatted and ready to be sent to `ritik.gupta@allina.in`.

## Contact Forms Implemented
1. **ContactForm.tsx** - Simple contact form (name, email, company)
2. **ContactCard.tsx** - Two-tab form (Registration & Questions)
3. **ContactHero.tsx** - General inquiry form with tabs

## To Enable Real Email Sending with Resend

### Step 1: Create Resend Account
1. Go to [https://resend.com/](https://resend.com/)
2. Sign up for a free account
3. Verify your email address
4. Add and verify your domain (or use the default onboarding@resend.dev for testing)

### Step 2: Get Your API Key
1. Go to your Resend dashboard
2. Navigate to "API Keys" section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### Step 3: Environment Setup
Create a `.env` file in your project root and add:

```env
VITE_RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 4: Configure From Email (Optional)
In `src/lib/utils.ts`, update the `fromEmail` in `RESEND_CONFIG`:

```typescript
const RESEND_CONFIG = {
  apiKey: import.meta.env.VITE_RESEND_API_KEY || 'your_resend_api_key_here',
  fromEmail: 'contact@allina.in', // Replace with your verified domain
  toEmail: 'ritik.gupta@allina.in'
}
```

### Step 5: Domain Verification (For Production)
1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., yourdomain.com)
3. Add the required DNS records (SPF, DKIM, DMARC)
4. Verify domain ownership

## Features
- **HTML Email Templates**: Professional-looking emails with ALLINA branding
- **Automatic Fallback**: Logs to console if no API key is provided
- **Error Handling**: Detailed error messages for debugging
- **Rich Formatting**: Clickable email addresses and phone numbers
- **Form Type Detection**: Different email formats for different form types

## Testing
While developing without an API key, all form submissions are logged to the browser console with full email content, so you can see exactly what would be sent.

## Email Format
Emails include:
- **Professional Header**: ALLINA branding with form type
- **Contact Details**: Name, email, company, phone (when provided)
- **Message Content**: User's message in a styled block
- **Metadata**: Form type, submission time, and source

All emails will be sent to: `ritik.gupta@allina.in`

## Benefits of Resend over EmailJS
- **Better Deliverability**: Higher email delivery rates
- **No Client-Side API Keys**: More secure than EmailJS
- **Rich HTML Templates**: Better email formatting
- **Professional Domain**: Use your own domain for sending
- **Better Analytics**: Delivery tracking and analytics
- **Cost Effective**: Generous free tier (3,000 emails/month)

## Package Dependencies
Make sure to remove EmailJS and add any necessary dependencies:

```bash
npm uninstall @emailjs/browser
# No additional packages needed - using native fetch API
``` 