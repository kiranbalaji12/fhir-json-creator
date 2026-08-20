# 🏥 FHIR JSON Creator

A modern web-based tool for generating valid FHIR (Fast Healthcare Interoperability Resources) JSON documents. Create healthcare data in standard FHIR formats with support for multiple resource types and FHIR profiles.

## 🎯 Quick Features

- **8 Resource Types**: Patient, Practitioner, CareTeam, Organization, Encounter, Condition, Medication, MedicationRequest
- **8 FHIR Profiles**: FHIR R4, US Core (3.1.0, 3.1.1, 6.1.0), CARIN (0.1.0, 2.0.0), DaVinci (0.1.0, 2.1.0)
- **Zero Dependencies on Servers**: All processing happens in your browser
- **Export Options**: Copy to clipboard or download as JSON file
- **Responsive Design**: Works on desktop and mobile devices
- **Free Hosting**: Deployed on GitHub Pages

## 🚀 Getting Started

### Option 1: Quick Deploy (Recommended)
1. Fork this repository to your GitHub account
2. Clone it locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/fhir-json-creator.git
   cd fhir-json-creator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
5. Your site will be live at: `https://YOUR_USERNAME.github.io/fhir-json-creator`

### Option 2: Local Development
```bash
npm install
npm start
```
Visit http://localhost:3000 in your browser.

## 📋 Supported Resources

| Resource | US Core 6.1 | US Core 3.1 | CARIN | DaVinci | FHIR R4 |
|----------|-----------|-----------|-------|---------|---------|
| Patient | ✅ | ✅ | ✅ | ✅ | ✅ |
| Practitioner | ✅ | ✅ | ✅ | ✅ | ✅ |
| CareTeam | ✅ | ✅ | ✅ | ✅ | ✅ |
| Organization | ✅ | ✅ | ✅ | ✅ | ✅ |
| Encounter | ✅ | ✅ | ✅ | ✅ | ✅ |
| Condition | ✅ | ✅ | ✅ | ✅ | ✅ |
| Medication | ✅ | ✅ | ✅ | ✅ | ✅ |
| MedicationRequest | ✅ | ✅ | ✅ | ✅ | ✅ |

## 🛠️ Technology Stack

- **React 18**: Modern UI framework
- **Vanilla JavaScript**: No heavy dependencies
- **GitHub Pages**: Free static hosting
- **CSS-in-JS**: Lightweight styling

## 📝 Usage Example

1. Select a **Resource Type** (e.g., "Patient")
2. Choose a **FHIR Profile** (e.g., "US Core 6.1.0")
3. Fill in the available fields (auto-adjusts per profile)
4. Click "Generate FHIR JSON"
5. Copy to clipboard or download the JSON file

## 🔧 Customization

### Add a New Resource Type
Edit `fhir-creator.jsx` and add to the `resourceFields` object:
```javascript
MyResource: {
  'fhir-r4': ['field1', 'field2', 'field3'],
  'uscore-6.1.0': ['field1', 'field2'],
  // ... other profiles
}
```

### Change Colors/Styling
Update the `styles` object at the bottom of `fhir-creator.jsx`.

### Add Field Validation
Extend the `generateFHIRJson()` function to validate required fields.

## 📚 FHIR Documentation

- [FHIR R4 Specification](https://www.hl7.org/fhir/R4/)
- [US Core Implementation Guide](https://www.hl7.org/fhir/us/core/)
- [CARIN IG](https://www.hl7.org/fhir/us/carin-bb/)
- [DaVinci Drug Formulary](https://www.hl7.org/fhir/us/davinci-drug-formulary/)

## 🌐 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Other Platforms (Vercel, Netlify)
```bash
npm run build
# Deploy the 'build' folder
```

## 🔒 Privacy
- ✅ No data is sent to servers
- ✅ All processing happens locally in your browser
- ✅ No tracking or analytics
- ✅ Safe for sensitive test data

## 📦 Project Structure
```
src/
├── components/
│   └── FHIRCreator.js      # Main component
├── App.js                   # App wrapper
└── index.js                # Entry point
public/
└── index.html              # HTML template
package.json               # Dependencies
```

## 🐛 Known Limitations

- **Static Resources Only**: Generates sample FHIR JSON (not validated against full FHIR schemas)
- **No Profile Validation**: Generated JSON matches the profile URL but doesn't validate all constraints
- **Sample Data**: Uses example SNOMED codes and systems
- **No Extensions**: Currently doesn't support FHIR extensions

## 🚀 Roadmap

- [ ] Full FHIR schema validation
- [ ] More resource types (DiagnosticReport, Observation, MedicationDispense)
- [ ] Custom profile URLs
- [ ] Dark mode
- [ ] JSON import and editing
- [ ] Batch generation
- [ ] FHIR R5 support

## 🤝 Contributing

Contributions welcome! To add:
1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - Feel free to use and modify for your healthcare projects.

## 💬 Questions?

Check the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed setup instructions.

---

**Made for healthcare developers by healthcare developers** 🏥
