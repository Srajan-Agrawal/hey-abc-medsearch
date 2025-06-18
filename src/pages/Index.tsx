
import { useState } from 'react';
import { SearchHeader } from '@/components/SearchHeader';
import { SearchBar } from '@/components/SearchBar';
import { SearchResults } from '@/components/SearchResults';
import { searchMedicalData } from '@/services/searchService';
import { SearchResult } from '@/types/search';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setSearchQuery(query);
    
    try {
      const results = await searchMedicalData(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <SearchHeader />
        <div className="max-w-4xl mx-auto">
          <SearchBar 
            onSearch={handleSearch}
            isLoading={isLoading}
          />
          <SearchResults 
            results={searchResults}
            query={searchQuery}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
