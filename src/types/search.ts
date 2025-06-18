
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'database' | 'progress_note' | 'patient_record';
  date?: string;
  relevanceScore: number;
  metadata?: Record<string, string>;
}

export interface MedicalDatabase {
  id: string;
  name: string;
  description: string;
  tables: string[];
  keywords: string[];
}

export interface ProgressNote {
  id: string;
  patientId: string;
  title: string;
  content: string;
  date: string;
  author: string;
  keywords: string[];
}
