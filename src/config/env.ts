// Environment configuration
export const env = {
  GOOGLE_SPREADSHEET_ID: process.env.GOOGLE_SPREADSHEET_ID || '',
  SHEET_RANGE: process.env.SHEET_RANGE || '',
  GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS || '',
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'your-secret-key-here',
  NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
}

// Validate required environment variables
export const validateEnv = () => {
  const required = ['GOOGLE_SPREADSHEET_ID', 'GOOGLE_APPLICATION_CREDENTIALS']
  const missing = required.filter(key => !env[key as keyof typeof env])
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}
