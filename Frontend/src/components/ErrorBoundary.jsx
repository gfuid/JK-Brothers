import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#fcfbf9] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white p-8 rounded-sm border border-gray-200 shadow-xl flex flex-col items-center">
            <div className="w-16 h-16 bg-accent/15 text-accent rounded-full flex items-center justify-center mb-4 text-2xl font-bold font-serif">
              !
            </div>
            <h1 className="text-2xl font-serif font-black text-primary uppercase tracking-wide mb-2">
              Something went wrong
            </h1>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              We encountered an unexpected display issue. Please reload or return to the main catalog.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-primary text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleReload}
                className="px-5 py-2.5 bg-primary hover:bg-blue-950 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
