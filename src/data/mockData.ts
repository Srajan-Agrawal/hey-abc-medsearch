
import { MedicalDatabase, ProgressNote } from '@/types/search';

export const medicalDatabases: MedicalDatabase[] = [
  {
    id: '1',
    name: 'CardioVascular Patient Database',
    description: 'Comprehensive database containing cardiac patient records, ECG results, and cardiovascular procedures.',
    tables: ['patients', 'ecg_results', 'cardiac_procedures', 'medications'],
    keywords: ['heart', 'cardiac', 'cardiovascular', 'ecg', 'blood pressure', 'coronary']
  },
  {
    id: '2',
    name: 'Oncology Treatment Registry',
    description: 'Database tracking cancer patients, treatment protocols, and outcomes across various cancer types.',
    tables: ['cancer_patients', 'treatment_plans', 'chemotherapy', 'radiation_therapy'],
    keywords: ['cancer', 'oncology', 'tumor', 'chemotherapy', 'radiation', 'malignancy']
  },
  {
    id: '3',
    name: 'Laboratory Results Database',
    description: 'Central repository for all laboratory test results including blood work, cultures, and diagnostic tests.',
    tables: ['lab_tests', 'blood_work', 'cultures', 'pathology_reports'],
    keywords: ['laboratory', 'blood', 'test', 'culture', 'pathology', 'diagnostic']
  },
  {
    id: '4',
    name: 'Emergency Department Records',
    description: 'Database containing emergency department visits, triage notes, and urgent care procedures.',
    tables: ['ed_visits', 'triage_notes', 'emergency_procedures', 'discharge_summaries'],
    keywords: ['emergency', 'urgent', 'triage', 'trauma', 'acute', 'critical']
  },
  {
    id: '5',
    name: 'Diabetes Management System',
    description: 'Specialized database for diabetes patients including glucose monitoring and insulin management.',
    tables: ['diabetic_patients', 'glucose_readings', 'insulin_regimens', 'hba1c_results'],
    keywords: ['diabetes', 'glucose', 'insulin', 'blood sugar', 'hba1c', 'endocrine']
  }
];

export const progressNotes: ProgressNote[] = [
  {
    id: '1',
    patientId: 'P001',
    title: 'Post-Operative Cardiac Surgery Follow-up',
    content: 'Patient recovering well from coronary artery bypass surgery. Vital signs stable. No signs of infection at surgical site. Patient ambulating without assistance. Cardiac enzymes within normal limits. Plan to discharge tomorrow if overnight monitoring shows no complications.',
    date: '2024-01-15',
    author: 'Dr. Sarah Johnson',
    keywords: ['cardiac', 'surgery', 'bypass', 'recovery', 'post-operative']
  },
  {
    id: '2',
    patientId: 'P002',
    title: 'Diabetes Management Progress Note',
    content: 'Patient with Type 2 diabetes showing improved glucose control. HbA1c decreased from 9.2% to 7.8% over past 3 months. Patient adherent to metformin and dietary modifications. Blood pressure well controlled. Recommend continuing current regimen and follow-up in 3 months.',
    date: '2024-01-14',
    author: 'Dr. Michael Chen',
    keywords: ['diabetes', 'glucose', 'hba1c', 'metformin', 'blood pressure']
  },
  {
    id: '3',
    patientId: 'P003',
    title: 'Chemotherapy Treatment Response',
    content: 'Patient with stage III breast cancer completing 4th cycle of chemotherapy. Tumor markers showing significant reduction. Patient tolerating treatment well with minimal side effects. Blood counts stable. Plan to continue with remaining 2 cycles as scheduled.',
    date: '2024-01-13',
    author: 'Dr. Emily Rodriguez',
    keywords: ['cancer', 'chemotherapy', 'breast cancer', 'tumor markers', 'oncology']
  },
  {
    id: '4',
    patientId: 'P004',
    title: 'Respiratory Infection Treatment',
    content: 'Patient presented with bacterial pneumonia. Chest X-ray shows improvement after 5 days of antibiotic therapy. Oxygen saturation improved to 96% on room air. Patient reports decreased cough and improved breathing. Plan to complete 10-day course of antibiotics.',
    date: '2024-01-12',
    author: 'Dr. Robert Kim',
    keywords: ['pneumonia', 'respiratory', 'infection', 'antibiotics', 'chest x-ray']
  },
  {
    id: '5',
    patientId: 'P005',
    title: 'Hypertension Management Update',
    content: 'Patient with essential hypertension showing good blood pressure control on current medication regimen. Blood pressure readings averaging 128/82 over past month. No side effects reported. Laboratory results show normal kidney function. Continue current medications.',
    date: '2024-01-11',
    author: 'Dr. Lisa Thompson',
    keywords: ['hypertension', 'blood pressure', 'medication', 'kidney function']
  },
  {
    id: '6',
    patientId: 'P006',
    title: 'Orthopedic Surgery Pre-op Assessment',
    content: 'Patient scheduled for knee replacement surgery. Pre-operative assessment completed. Medical clearance obtained from cardiology and anesthesia. Patient educated about post-operative care and physical therapy. Surgery scheduled for next week.',
    date: '2024-01-10',
    author: 'Dr. James Wilson',
    keywords: ['orthopedic', 'surgery', 'knee replacement', 'pre-operative', 'assessment']
  }
];
