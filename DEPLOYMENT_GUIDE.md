# FHIR JSON Creator - GitHub Pages Deployment Guide

## Overview
This guide will help you deploy the FHIR JSON Creator website to GitHub Pages for free hosting.

## Prerequisites
- GitHub account (free)
- Node.js and npm installed on your computer
- Git installed on your computer

## Step-by-Step Setup

### 1. Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top-right and select "New repository"
3. Name your repository: `fhir-json-creator`
4. Choose "Public" (required for free GitHub Pages)
5. Click "Create repository"

### 2. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/fhir-json-creator.git
cd fhir-json-creator
```
*Replace `YOUR_USERNAME` with your actual GitHub username*

### 3. Set Up the Project Files
1. Copy these files to your cloned repository:
   - `package.json`
   - `fhir-creator.jsx`
   - `public/index.html` (create this - see below)
   - `src/index.js` (create this - see below)
   - `src/App.js` (create this - see below)

### 4. Create Required Files

#### `public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
        name="description"
        content="FHIR JSON Creator - Generate valid FHIR resources"
    />
    <title>FHIR JSON Creator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
        }
    </style>
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>
</html>
```

#### `src/index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### `src/App.js`
Copy the entire content from `fhir-creator.jsx` and use it here:
```javascript
import FHIRCreator from './components/FHIRCreator';

function App() {
  return <FHIRCreator />;
}

export default App;
```

#### Create `src/components/FHIRCreator.js`
Copy the content from the provided `fhir-creator.jsx` file.

### 5. Update package.json
Edit the `homepage` field in `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/fhir-json-creator",
```

### 6. Install Dependencies
```bash
npm install
```

### 7. Test Locally
```bash
npm start
```
This will open http://localhost:3000 in your browser. Test the FHIR creator to make sure it works.

### 8. Build and Deploy
```bash
npm run deploy
```

This command will:
- Build the React app for production
- Push the built files to the `gh-pages` branch on GitHub

### 9. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select `Deploy from a branch`
5. Select `gh-pages` branch and `/ (root)` folder
6. Click Save

Your website will be live at: `https://YOUR_USERNAME.github.io/fhir-json-creator`

## Updating Your Site
After making changes:
```bash
git add .
git commit -m "Update FHIR creator"
git push
npm run deploy
```

## Directory Structure
```
fhir-json-creator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── FHIRCreator.js
│   ├── index.js
│   └── App.js
├── package.json
├── package-lock.json
└── README.md
```

## Features Included

### Resource Types
- Patient
- Practitioner
- CareTeam
- Organization
- Encounter
- Condition
- Medication
- MedicationRequest

### FHIR Profiles Supported
- FHIR R4
- US Core 3.1.0, 3.1.1, 6.1.0
- CARIN 0.1.0, 2.0.0
- DaVinci 0.1.0, 2.1.0

### Features
- ✅ Dynamic field generation based on resource type and profile
- ✅ Copy to clipboard functionality
- ✅ Download JSON files
- ✅ Proper FHIR meta profile URLs
- ✅ Responsive design
- ✅ Real-time JSON generation

## Customization

### Adding New Resource Types
1. Add the resource type to `resourceTypes` array
2. Add field mapping in `resourceFields` object
3. Add field labels in `fieldLabels` object
4. Update `addFieldToResource()` function to handle new fields

### Adding More FHIR Profiles
1. Add to `profiles` object
2. Add field mappings for each resource type
3. Update `getProfileUrl()` function with the correct base URL

## Troubleshooting

**Issue: npm install fails**
- Make sure you have Node.js 14+ installed: `node -v`
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

**Issue: Build fails**
- Check for JavaScript syntax errors in your files
- Make sure all imports are correct

**Issue: Site not showing up**
- Wait 2-3 minutes after deploying
- Clear your browser cache
- Check that the `gh-pages` branch exists in your repository settings

**Issue: Incorrect homepage URL**
- Make sure you updated the `homepage` field in `package.json`
- Redeploy with `npm run deploy`

## Security Notes
- This is a static site - no data is sent to servers
- All processing happens in your browser
- JSON files are generated locally

## License
Free to use and modify for your healthcare projects.

## Support
For FHIR documentation, visit: https://www.hl7.org/fhir/

## Next Steps
- Customize the styling by modifying the `styles` object in FHIRCreator.js
- Add more resource types as needed
- Consider adding validation against FHIR schemas
- Add dark mode support
- Create a logo/branding
