
import { SearchResult } from '@/types/search';
import { SearchResultCard } from './SearchResultCard';
import { Loader2 } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading: boolean;
}

export const SearchResults = ({ results, query, isLoading }: SearchResultsProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        <span className="ml-3 text-lg text-slate-600">Searching medical databases...</span>
      </div>
    );
  }

  if (!query) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 text-lg">Enter a search term to find medical records and progress notes</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 text-lg">No results found for "{query}"</p>
        <p className="text-slate-400 mt-2">Try searching for conditions, treatments, or patient information</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-700">
          Search Results ({results.length})
        </h2>
        <span className="text-sm text-slate-500">
          Results for "{query}"
        </span>
      </div>
      
      <div className="grid gap-4">
        {results.map((result) => (
          <SearchResultCard 
            key={result.id} 
            result={result} 
            searchQuery={query}
          />
        ))}
      </div>
    </div>
  );
};
