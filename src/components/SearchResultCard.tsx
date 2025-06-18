
import { SearchResult } from '@/types/search';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Database, User, Calendar } from 'lucide-react';

interface SearchResultCardProps {
  result: SearchResult;
  searchQuery: string;
}

export const SearchResultCard = ({ result, searchQuery }: SearchResultCardProps) => {
  const getIcon = () => {
    switch (result.type) {
      case 'database':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'progress_note':
        return <FileText className="w-5 h-5 text-green-600" />;
      case 'patient_record':
        return <User className="w-5 h-5 text-purple-600" />;
      default:
        return <FileText className="w-5 h-5 text-slate-600" />;
    }
  };

  const getTypeColor = () => {
    switch (result.type) {
      case 'database':
        return 'bg-blue-100 text-blue-800';
      case 'progress_note':
        return 'bg-green-100 text-green-800';
      case 'patient_record':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {getIcon()}
            <div>
              <CardTitle className="text-lg">
                {highlightText(result.title, searchQuery)}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className={getTypeColor()}>
                  {result.type.replace('_', ' ')}
                </Badge>
                {result.date && (
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    {result.date}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-slate-700">
              Relevance: {Math.round(result.relevanceScore * 100)}%
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-slate-600 mb-3">
          {highlightText(result.description, searchQuery)}
        </p>
        
        {result.metadata && (
          <div className="flex flex-wrap gap-2 mt-3">
            {Object.entries(result.metadata).map(([key, value]) => (
              <Badge key={key} variant="secondary" className="text-xs">
                {key}: {value}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
