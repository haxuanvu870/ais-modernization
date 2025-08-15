import { google } from 'googleapis'
import { env } from './env'

// Google Sheets API configuration
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const SPREADSHEET_ID = env.GOOGLE_SPREADSHEET_ID
const GOOGLE_APPLICATION_CREDENTIALS = env.GOOGLE_APPLICATION_CREDENTIALS

// Check if Google Sheets is properly configured
const isConfigured = SPREADSHEET_ID && GOOGLE_APPLICATION_CREDENTIALS

export interface ContactData {
  name: string
  email: string
  phone?: string
  company?: string
  message?: string
  timestamp: string
}

export const googleSheets = {
  // Add a new contact to the sheet
  async addContact(contact: Omit<ContactData, 'timestamp'>): Promise<void> {
    // If not configured, just log the data (for development)
    if (!isConfigured) {
      console.log('Google Sheets not configured. Contact data:', contact)
      return
    }

    try {
      const timestamp = new Date().toISOString()
      const row = [
        contact.name,
        contact.email,
        contact.phone || '',
        contact.company || '',
        contact.message || '',
        timestamp
      ]

      if (!sheets) {
        throw new Error('Google Sheets API not initialized')
      }
      
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Contacts!A:F',
        valueInputOption: 'RAW',
        requestBody: {
          values: [row]
        }
      })
    } catch (error) {
      console.error('Error adding contact to Google Sheets:', error)
      throw new Error('Failed to save contact data')
    }
  },

  // Get all contacts from the sheet
  async getContacts(): Promise<ContactData[]> {
    if (!isConfigured) {
      console.log('Google Sheets not configured. Returning empty array.')
      return []
    }

    try {
      if (!sheets) {
        throw new Error('Google Sheets API not initialized')
      }
      
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Contacts!A:F',
      })

      const rows = response.data.values || []
      if (rows.length === 0) return []

      // Skip header row and map data
      return rows.slice(1).map(row => ({
        name: row[0] || '',
        email: row[1] || '',
        phone: row[2] || '',
        company: row[3] || '',
        message: row[4] || '',
        timestamp: row[5] || ''
      }))
    } catch (error) {
      console.error('Error getting contacts from Google Sheets:', error)
      throw new Error('Failed to retrieve contact data')
    }
  }
}

// Initialize Google Sheets API only if configured
let sheets: ReturnType<typeof google.sheets> | null = null
if (isConfigured) {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: GOOGLE_APPLICATION_CREDENTIALS,
      scopes: SCOPES,
    })
    sheets = google.sheets({ version: 'v4', auth })
  } catch (error) {
    console.error('Error initializing Google Sheets API:', error)
  }
}

export default googleSheets
