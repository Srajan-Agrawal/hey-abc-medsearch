
import { Activity } from 'lucide-react';

export const SearchHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
          <Activity className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Hey John
        </h1>
      </div>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Search through medical databases and patient progress notes with intelligent semantic matching
      </p>
    </div>
  );
};
