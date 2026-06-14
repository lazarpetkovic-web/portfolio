import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50">
          <div className="text-center max-w-md px-6">
            <h1 className="font-display font-bold text-2xl text-zinc-900 mb-2">Something went wrong</h1>
            <p className="font-sans text-sm text-zinc-500 mb-6">An unexpected error occurred. Please try refreshing the page.</p>
            <button
              onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
