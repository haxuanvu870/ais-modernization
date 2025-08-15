// Copy this configuration to your .env.local file

export const envExample = {
  GOOGLE_SPREADSHEET_ID: "your-spreadsheet-id-here",
  GOOGLE_APPLICATION_CREDENTIALS: "src/config/service-account-key.json",
  NEXTAUTH_SECRET: "your-secret-key-here",
  NEXTAUTH_URL: "http://localhost:3000",
}

/*
To set up Google Sheets:

1. Create a .env.local file in the root directory
2. Add your Google Sheets configuration:

GOOGLE_SPREADSHEET_ID="your-actual-spreadsheet-id"
GOOGLE_APPLICATION_CREDENTIALS="src/config/service-account-key.json"

3. Follow the setup guide in GOOGLE_SHEETS_SETUP.md

For now, the form will work with sample data (logged to console).
*/
