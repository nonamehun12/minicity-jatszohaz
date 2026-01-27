import React, { ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center p-8 text-center bg-slate-50/50 rounded-3xl border border-red-200">
           <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
           <h3 className="text-xl font-bold text-slate-800 mb-2">Hoppá! Valami hiba történt.</h3>
           <p className="text-slate-500">Kérjük frissítsd az oldalt.</p>
           <button 
             onClick={() => window.location.reload()}
             className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-colors"
           >
             Oldal frissítése
           </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;