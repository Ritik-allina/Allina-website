import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Resend configuration
const RESEND_CONFIG = {
  apiKey: import.meta.env.VITE_RESEND_API_KEY || 'your_resend_api_key_here',
  fromEmail: 'ritik.gupta@allina.in', // Using verified allina.in domain  
  toEmail: 'ritik.gupta@allina.in'
}

// Email sending utility using local API server
export const sendEmail = async (formData: any, formType: string) => {
  try {
    console.log('🚀 Starting email send process...')
    console.log('📧 Form Data:', formData)
    console.log('📧 Form Type:', formType)
    
    // Call our local API server instead of Resend directly
    console.log('🌐 Making API call to local server...')
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData, formType }),
    })

    console.log('📡 API Response status:', response.status)
    console.log('📡 API Response ok:', response.ok)

    if (!response.ok) {
      const errorData = await response.json()
      console.error('❌ API Error:', errorData)
      throw new Error(`Server error: ${errorData.error || response.statusText}`)
    }

    const result = await response.json()
    console.log('✅ Email sent successfully! Result:', result)
    return { status: 200, message: result.message, data: result.data }
    
  } catch (error) {
    console.error('💥 Error sending email:', error)
    console.error('💥 Error details:', {
      message: error.message,
      stack: error.stack,
      formData,
      formType
    })
    throw error
  }
}

// Format email message based on form type
const formatEmailMessage = (formData: any, formType: string): string => {
  let message = `New ${formType} submission from Allina website:\n\n`
  
  switch (formType) {
    case 'Contact Form':
      message += `Name: ${formData.name}\n`
      message += `Email: ${formData.email}\n`
      message += `Company: ${formData.company}\n`
      break
      
    case 'Registration':
      message += `Name: ${formData.name}\n`
      message += `Email: ${formData.email}\n`
      message += `Company: ${formData.company}\n`
      message += `Phone: ${formData.phone}\n`
      break
      
    case 'Question':
      message += `Name: ${formData.name}\n`
      message += `Email: ${formData.email}\n`
      message += `Message: ${formData.message}\n`
      break
      
    case 'General Inquiry':
      message += `Name: ${formData.firstName} ${formData.lastName}\n`
      message += `Email: ${formData.email}\n`
      message += `Phone: ${formData.phone}\n`
      message += `Message: ${formData.message}\n`
      break
      
    default:
      message += `Form Data: ${JSON.stringify(formData, null, 2)}\n`
  }
  
  message += `\nSubmitted at: ${new Date().toLocaleString()}`
  return message
}
