import React, { useState, useRef } from 'react';

const FHIRCreator = () => {
  const [selectedResource, setSelectedResource] = useState('Patient');
  const [selectedProfile, setSelectedProfile] = useState('fhir-r4');
  const [formData, setFormData] = useState({});
  const [jsonOutput, setJsonOutput] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const textareaRef = useRef(null);

  const resourceTypes = [
    'Patient',
    'Practitioner',
    'CareTeam',
    'Organization',
    'Encounter',
    'Condition',
    'Medication',
    'MedicationRequest'
  ];

  const profiles = {
    'fhir-r4': 'FHIR R4',
    'uscore-3.1.0': 'US Core 3.1.0',
    'uscore-3.1.1': 'US Core 3.1.1',
    'uscore-6.1.0': 'US Core 6.1.0',
    'carin-0.1.0': 'CARIN 0.1.0',
    'carin-2.0.0': 'CARIN 2.0.0',
    'davinci-0.1.0': 'DaVinci 0.1.0',
    'davinci-2.1.0': 'DaVinci 2.1.0'
  };

  const resourceFields = {
    Patient: {
      'fhir-r4': ['id', 'firstName', 'lastName', 'birthDate', 'gender', 'email', 'phone'],
      'uscore-3.1.0': ['id', 'firstName', 'lastName', 'birthDate', 'gender', 'email', 'phone'],
      'uscore-3.1.1': ['id', 'firstName', 'lastName', 'birthDate', 'gender', 'email', 'phone'],
      'uscore-6.1.0': ['id', 'firstName', 'lastName', 'birthDate', 'gender', 'email', 'phone'],
      'carin-0.1.0': ['id', 'firstName', 'lastName', 'birthDate', 'gender'],
      'carin-2.0.0': ['id', 'firstName', 'lastName', 'birthDate', 'gender'],
      'davinci-0.1.0': ['id', 'firstName', 'lastName', 'birthDate', 'gender'],
      'davinci-2.1.0': ['id', 'firstName', 'lastName', 'birthDate', 'gender']
    },
    Practitioner: {
      'fhir-r4': ['id', 'firstName', 'lastName', 'specialization', 'email', 'phone'],
      'uscore-3.1.0': ['id', 'firstName', 'lastName', 'specialization', 'email', 'phone'],
      'uscore-3.1.1': ['id', 'firstName', 'lastName', 'specialization', 'email', 'phone'],
      'uscore-6.1.0': ['id', 'firstName', 'lastName', 'specialization', 'email', 'phone'],
      'carin-0.1.0': ['id', 'firstName', 'lastName', 'specialization'],
      'carin-2.0.0': ['id', 'firstName', 'lastName', 'specialization'],
      'davinci-0.1.0': ['id', 'firstName', 'lastName', 'specialization'],
      'davinci-2.1.0': ['id', 'firstName', 'lastName', 'specialization']
    },
    CareTeam: {
      'fhir-r4': ['id', 'status', 'name', 'subject', 'note'],
      'uscore-3.1.0': ['id', 'status', 'name', 'subject', 'note'],
      'uscore-3.1.1': ['id', 'status', 'name', 'subject', 'note'],
      'uscore-6.1.0': ['id', 'status', 'name', 'subject', 'note'],
      'carin-0.1.0': ['id', 'status', 'name', 'subject'],
      'carin-2.0.0': ['id', 'status', 'name', 'subject'],
      'davinci-0.1.0': ['id', 'status', 'name', 'subject'],
      'davinci-2.1.0': ['id', 'status', 'name', 'subject']
    },
    Organization: {
      'fhir-r4': ['id', 'name', 'address', 'phone', 'email'],
      'uscore-3.1.0': ['id', 'name', 'address', 'phone'],
      'uscore-3.1.1': ['id', 'name', 'address', 'phone'],
      'uscore-6.1.0': ['id', 'name', 'address', 'phone'],
      'carin-0.1.0': ['id', 'name', 'address'],
      'carin-2.0.0': ['id', 'name', 'address'],
      'davinci-0.1.0': ['id', 'name', 'address'],
      'davinci-2.1.0': ['id', 'name', 'address']
    },
    Encounter: {
      'fhir-r4': ['id', 'status', 'class', 'type', 'subject', 'period'],
      'uscore-3.1.0': ['id', 'status', 'class', 'type', 'subject', 'period'],
      'uscore-3.1.1': ['id', 'status', 'class', 'type', 'subject', 'period'],
      'uscore-6.1.0': ['id', 'status', 'class', 'type', 'subject', 'period'],
      'carin-0.1.0': ['id', 'status', 'type', 'subject'],
      'carin-2.0.0': ['id', 'status', 'type', 'subject'],
      'davinci-0.1.0': ['id', 'status', 'type', 'subject'],
      'davinci-2.1.0': ['id', 'status', 'type', 'subject']
    },
    Condition: {
      'fhir-r4': ['id', 'clinicalStatus', 'code', 'subject', 'onsetDate'],
      'uscore-3.1.0': ['id', 'clinicalStatus', 'code', 'subject', 'onsetDate'],
      'uscore-3.1.1': ['id', 'clinicalStatus', 'code', 'subject', 'onsetDate'],
      'uscore-6.1.0': ['id', 'clinicalStatus', 'code', 'subject', 'onsetDate'],
      'carin-0.1.0': ['id', 'clinicalStatus', 'code', 'subject'],
      'carin-2.0.0': ['id', 'clinicalStatus', 'code', 'subject'],
      'davinci-0.1.0': ['id', 'clinicalStatus', 'code', 'subject'],
      'davinci-2.1.0': ['id', 'clinicalStatus', 'code', 'subject']
    },
    Medication: {
      'fhir-r4': ['id', 'code', 'status', 'form'],
      'uscore-3.1.0': ['id', 'code', 'status', 'form'],
      'uscore-3.1.1': ['id', 'code', 'status', 'form'],
      'uscore-6.1.0': ['id', 'code', 'status', 'form'],
      'carin-0.1.0': ['id', 'code'],
      'carin-2.0.0': ['id', 'code'],
      'davinci-0.1.0': ['id', 'code'],
      'davinci-2.1.0': ['id', 'code']
    },
    MedicationRequest: {
      'fhir-r4': ['id', 'status', 'intent', 'medication', 'subject', 'dosageInstruction'],
      'uscore-3.1.0': ['id', 'status', 'intent', 'medication', 'subject'],
      'uscore-3.1.1': ['id', 'status', 'intent', 'medication', 'subject'],
      'uscore-6.1.0': ['id', 'status', 'intent', 'medication', 'subject'],
      'carin-0.1.0': ['id', 'status', 'medication', 'subject'],
      'carin-2.0.0': ['id', 'status', 'medication', 'subject'],
      'davinci-0.1.0': ['id', 'status', 'medication', 'subject'],
      'davinci-2.1.0': ['id', 'status', 'medication', 'subject']
    }
  };

  const fieldLabels = {
    id: 'ID',
    firstName: 'First Name',
    lastName: 'Last Name',
    birthDate: 'Birth Date',
    gender: 'Gender',
    email: 'Email',
    phone: 'Phone',
    specialization: 'Specialization',
    status: 'Status',
    name: 'Name',
    subject: 'Subject',
    note: 'Note',
    address: 'Address',
    class: 'Class',
    type: 'Type',
    period: 'Period',
    clinicalStatus: 'Clinical Status',
    code: 'Code',
    onsetDate: 'Onset Date',
    form: 'Form',
    intent: 'Intent',
    medication: 'Medication',
    dosageInstruction: 'Dosage Instruction'
  };

  const generateFHIRJson = () => {
    const baseResource = {
      resourceType: selectedResource,
      id: formData.id || 'example-' + Math.random().toString(36).substr(2, 9),
      meta: {
        profile: getProfileUrl(selectedProfile)
      }
    };

    const resourceData = { ...baseResource };

    // Add fields based on resource type
    const fields = resourceFields[selectedResource]?.[selectedProfile] || [];
    
    fields.forEach(field => {
      if (formData[field]) {
        addFieldToResource(resourceData, field, formData[field], selectedResource);
      }
    });

    return resourceData;
  };

  const getProfileUrl = (profile) => {
    const profileMap = {
      'fhir-r4': 'http://hl7.org/fhir/StructureDefinition/',
      'uscore-3.1.0': 'http://hl7.org/fhir/us/core/StructureDefinition/',
      'uscore-3.1.1': 'http://hl7.org/fhir/us/core/StructureDefinition/',
      'uscore-6.1.0': 'http://hl7.org/fhir/us/core/StructureDefinition/',
      'carin-0.1.0': 'http://hl7.org/fhir/us/carin-bb/StructureDefinition/',
      'carin-2.0.0': 'http://hl7.org/fhir/us/carin-bb/StructureDefinition/',
      'davinci-0.1.0': 'http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/',
      'davinci-2.1.0': 'http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/'
    };
    return profileMap[profile] + selectedResource;
  };

  const addFieldToResource = (resource, field, value, resourceType) => {
    switch(field) {
      case 'firstName':
      case 'lastName':
        if (!resource.name) resource.name = [];
        if (!resource.name[0]) resource.name[0] = { use: 'official' };
        resource.name[0][field === 'firstName' ? 'given' : 'family'] = [value];
        break;
      case 'birthDate':
        resource.birthDate = value;
        break;
      case 'gender':
        resource.gender = value.toLowerCase();
        break;
      case 'email':
        if (!resource.telecom) resource.telecom = [];
        resource.telecom.push({ system: 'email', value: value });
        break;
      case 'phone':
        if (!resource.telecom) resource.telecom = [];
        resource.telecom.push({ system: 'phone', value: value });
        break;
      case 'status':
        resource.status = value;
        break;
      case 'name':
        if (!resource.name) resource.name = [];
        if (typeof resource.name === 'string') resource.name = value;
        else resource.name[0] = { text: value };
        break;
      case 'subject':
        resource.subject = { reference: `Patient/${value}` };
        break;
      case 'address':
        if (!resource.address) resource.address = [];
        resource.address.push({ text: value });
        break;
      case 'note':
        if (!resource.note) resource.note = [];
        resource.note.push({ text: value });
        break;
      case 'code':
        resource.code = { coding: [{ system: 'http://snomed.info/sct', code: value }] };
        break;
      case 'type':
        if (!resource.type) resource.type = [];
        resource.type.push({ coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode', code: value }] });
        break;
      case 'class':
        resource.class = { system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode', code: value };
        break;
      case 'period':
        resource.period = { start: value };
        break;
      case 'clinicalStatus':
        resource.clinicalStatus = { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: value }] };
        break;
      case 'onsetDate':
        resource.onsetDateTime = value;
        break;
      case 'form':
        resource.form = { coding: [{ system: 'http://snomed.info/sct', code: value }] };
        break;
      case 'specialization':
        if (!resource.qualification) resource.qualification = [];
        resource.qualification.push({ code: { text: value } });
        break;
      case 'intent':
        resource.intent = value;
        break;
      case 'medication':
        resource.medicationReference = { reference: `Medication/${value}` };
        break;
      case 'dosageInstruction':
        if (!resource.dosageInstruction) resource.dosageInstruction = [];
        resource.dosageInstruction.push({ text: value });
        break;
      default:
        resource[field] = value;
    }
  };

  const handleGenerateJson = () => {
    const json = generateFHIRJson();
    setJsonOutput(JSON.stringify(json, null, 2));
  };

  const handleCopyJson = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand('copy');
      setCopyStatus('Copied to clipboard!');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  const handleDownloadJson = () => {
    const json = generateFHIRJson();
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(json, null, 2)));
    element.setAttribute('download', `${selectedResource}-${Date.now()}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleResourceChange = (e) => {
    setSelectedResource(e.target.value);
    setFormData({});
    setJsonOutput('');
  };

  const handleProfileChange = (e) => {
    setSelectedProfile(e.target.value);
    setFormData({});
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const currentFields = resourceFields[selectedResource]?.[selectedProfile] || [];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🏥 FHIR JSON Creator</h1>
        <p>Generate valid FHIR resources for healthcare systems</p>
      </header>

      <div style={styles.mainContent}>
        <div style={styles.configPanel}>
          <h2>Configuration</h2>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Resource Type</label>
            <select 
              value={selectedResource} 
              onChange={handleResourceChange}
              style={styles.select}
            >
              {resourceTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>FHIR Profile</label>
            <select 
              value={selectedProfile} 
              onChange={handleProfileChange}
              style={styles.select}
            >
              {Object.entries(profiles).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          <h3>Resource Fields</h3>
          {currentFields.length > 0 ? (
            <div style={styles.fieldsContainer}>
              {currentFields.map(field => (
                <div key={field} style={styles.formGroup}>
                  <label style={styles.label}>{fieldLabels[field] || field}</label>
                  {field === 'gender' ? (
                    <select 
                      value={formData[field] || ''} 
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      style={styles.input}
                    >
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  ) : field === 'birthDate' || field === 'onsetDate' || field === 'period' ? (
                    <input 
                      type="date" 
                      value={formData[field] || ''} 
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      style={styles.input}
                    />
                  ) : field === 'status' ? (
                    <select 
                      value={formData[field] || ''} 
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      style={styles.input}
                    >
                      <option value="">Select...</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="draft">Draft</option>
                      <option value="completed">Completed</option>
                    </select>
                  ) : field === 'note' || field === 'dosageInstruction' ? (
                    <textarea 
                      value={formData[field] || ''} 
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      style={{...styles.input, minHeight: '80px', fontFamily: 'monospace'}}
                      placeholder="Enter note..."
                    />
                  ) : (
                    <input 
                      type="text" 
                      value={formData[field] || ''} 
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      style={styles.input}
                      placeholder={`Enter ${fieldLabels[field] || field}`}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p style={styles.emptyText}>No fields available for this combination</p>
          )}

          <button onClick={handleGenerateJson} style={styles.primaryButton}>
            Generate FHIR JSON
          </button>
        </div>

        <div style={styles.outputPanel}>
          <h2>Generated JSON</h2>
          {jsonOutput ? (
            <>
              <textarea 
                ref={textareaRef}
                value={jsonOutput} 
                readOnly
                style={styles.textarea}
              />
              <div style={styles.buttonGroup}>
                <button onClick={handleCopyJson} style={styles.secondaryButton}>
                  {copyStatus || '📋 Copy JSON'}
                </button>
                <button onClick={handleDownloadJson} style={styles.secondaryButton}>
                  ⬇️ Download JSON
                </button>
              </div>
            </>
          ) : (
            <div style={styles.placeholder}>
              <p>Generated FHIR JSON will appear here</p>
              <p style={styles.placeholderSmall}>Fill in the fields and click "Generate FHIR JSON" to start</p>
            </div>
          )}
        </div>
      </div>

      <footer style={styles.footer}>
        <p>FHIR JSON Creator | Support for FHIR R4, US Core, CARIN, and DaVinci profiles</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '30px 20px',
    textAlign: 'center'
  },
  mainContent: {
    display: 'flex',
    flex: 1,
    gap: '20px',
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%'
  },
  configPanel: {
    flex: 1,
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxHeight: 'calc(100vh - 200px)',
    overflowY: 'auto'
  },
  outputPanel: {
    flex: 1,
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
    color: '#2c3e50'
  },
  select: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box'
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box'
  },
  fieldsContainer: {
    marginBottom: '20px'
  },
  primaryButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  secondaryButton: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#95a5a6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px'
  },
  textarea: {
    width: '100%',
    flex: 1,
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '12px',
    backgroundColor: '#f9f9f9',
    boxSizing: 'border-box',
    minHeight: '300px'
  },
  placeholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: '#7f8c8d',
    textAlign: 'center'
  },
  placeholderSmall: {
    fontSize: '12px',
    marginTop: '10px'
  },
  emptyText: {
    color: '#7f8c8d',
    fontStyle: 'italic'
  },
  footer: {
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    textAlign: 'center',
    padding: '15px',
    marginTop: 'auto'
  }
};

export default FHIRCreator;
