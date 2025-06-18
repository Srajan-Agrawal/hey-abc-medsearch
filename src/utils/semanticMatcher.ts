
class SemanticMatcher {
  private medicalSynonyms: Record<string, string[]> = {
    'heart': ['cardiac', 'cardiovascular', 'coronary', 'myocardial'],
    'blood': ['hematology', 'hemoglobin', 'hematologic', 'blood work'],
    'lung': ['pulmonary', 'respiratory', 'bronchial', 'alveolar'],
    'brain': ['neurological', 'cerebral', 'neural', 'cognitive'],
    'kidney': ['renal', 'nephrology', 'urinary'],
    'liver': ['hepatic', 'hepatology'],
    'bone': ['orthopedic', 'skeletal', 'osseous'],
    'infection': ['sepsis', 'bacterial', 'viral', 'microbial'],
    'cancer': ['oncology', 'tumor', 'malignancy', 'neoplasm'],
    'diabetes': ['diabetic', 'glucose', 'insulin', 'glycemic'],
    'surgery': ['surgical', 'operative', 'procedure', 'operation'],
    'medication': ['drug', 'pharmaceutical', 'prescription', 'therapy'],
    'test': ['laboratory', 'diagnostic', 'screening', 'assessment'],
    'treatment': ['therapy', 'intervention', 'management', 'care']
  };

  calculateRelevance(query: string, content: string): number {
    const queryWords = query.toLowerCase().split(/\s+/);
    const contentWords = content.toLowerCase().split(/\s+/);
    
    let matchCount = 0;
    let totalWords = queryWords.length;
    
    for (const queryWord of queryWords) {
      // Direct match
      if (contentWords.some(word => word.includes(queryWord))) {
        matchCount += 1;
        continue;
      }
      
      // Semantic match
      const synonyms = this.getSynonyms(queryWord);
      if (synonyms.some(synonym => 
        contentWords.some(word => word.includes(synonym))
      )) {
        matchCount += 0.8; // Slightly lower score for semantic matches
      }
    }
    
    return Math.min(matchCount / totalWords, 1);
  }
  
  private getSynonyms(word: string): string[] {
    const synonyms: string[] = [];
    
    // Check if word is a key
    if (this.medicalSynonyms[word]) {
      synonyms.push(...this.medicalSynonyms[word]);
    }
    
    // Check if word is a synonym
    for (const [key, values] of Object.entries(this.medicalSynonyms)) {
      if (values.includes(word)) {
        synonyms.push(key, ...values.filter(v => v !== word));
      }
    }
    
    return [...new Set(synonyms)];
  }
}

export const semanticMatcher = new SemanticMatcher();
