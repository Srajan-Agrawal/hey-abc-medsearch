
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    // Trigger search on every keystroke for real-time results
    if (value.length > 2) {
      onSearch(value);
    } else if (value.length === 0) {
      onSearch('');
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search medical databases, patient notes, conditions, treatments..."
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            className="pl-12 pr-24 py-6 text-lg border-2 border-slate-200 rounded-xl shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </div>
      </form>
    </div>
  );
};
