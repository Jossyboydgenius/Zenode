import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="relative">
        {/* Outer circle with gradient border */}
        <div className="w-16 h-16 rounded-full magical-border animate-spin-slow flex items-center justify-center">
          {/* Inner circle */}
          <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
            {/* Center dot with gradient */}
            <div className="w-4 h-4 rounded-full gradient-text green-glow animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading text below */}
        <p className="mt-4 text-center text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;