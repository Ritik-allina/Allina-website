import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('📧 Received email request:', req.body);
    
    const { formData, formType } = req.body;
    const fromName = formData.name || `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
    
    const emailData = {
      from: `${fromName} <ritik.gupta@allina.in>`,
      to: ['ritik.gupta@allina.in'],
      subject: `New ${formType} from Allina Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #06153A; color: white; padding: 20px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px;">ALLINA - New ${formType} Submission</h1>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <h2 style="color: #06153A; margin-top: 0;">Contact Details</h2>
            
            ${formData.firstName || formData.name ? `<p><strong>Name:</strong> ${fromName}</p>` : ''}
            ${formData.email ? `<p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>` : ''}
            ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
            ${formData.phone ? `<p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>` : ''}
            ${formData.message ? `<p><strong>Message:</strong></p><div style="background-color: white; padding: 15px; border-left: 4px solid #06153A; margin: 10px 0;">${formData.message}</div>` : ''}
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              <strong>Form Type:</strong> ${formType}<br>
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
              <strong>Source:</strong> Allina Website
            </p>
          </div>
        </div>
      `
    };

    // Make API call to Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Resend API Error:', errorData);
      return res.status(400).json({ error: errorData });
    }

    const result = await response.json();
    console.log('✅ Email sent successfully:', result);
    
    res.json({ 
      success: true, 
      message: 'Email sent successfully!',
      data: result 
    });
    
  } catch (error) {
    console.error('💥 Server Error:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email service is running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Email server running on http://localhost:${PORT}`);
}); 