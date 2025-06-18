
import { SearchResult } from '@/types/search';
import { medicalDatabases, progressNotes } from '@/data/mockData';
import { semanticMatcher } from '@/utils/semanticMatcher';

export const searchMedicalData = async (query: string): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();
  
  // Search databases
  medicalDatabases.forEach(db => {
    const relevance = semanticMatcher.calculateRelevance(query, [
      db.name,
      db.description,
      ...db.keywords
    ].join(' '));
    
    if (relevance > 0.3) {
      results.push({
        id: `db-${db.id}`,
        title: db.name,
        description: db.description,
        type: 'database',
        relevanceScore: relevance,
        metadata: {
          'Tables': db.tables.length.toString(),
          'Category': 'Medical Database'
        }
      });
    }
  });
  
  // Search progress notes
  progressNotes.forEach(note => {
    const relevance = semanticMatcher.calculateRelevance(query, [
      note.title,
      note.content,
      ...note.keywords
    ].join(' '));
    
    if (relevance > 0.3) {
      results.push({
        id: `note-${note.id}`,
        title: note.title,
        description: note.content.substring(0, 200) + '...',
        type: 'progress_note',
        date: note.date,
        relevanceScore: relevance,
        metadata: {
          'Patient ID': note.patientId,
          'Author': note.author
        }
      });
    }
  });
  
  // Sort by relevance score
  return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
};
