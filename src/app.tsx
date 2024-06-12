import { ErrorBoundary, ParentProps } from 'solid-js';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';

export default function () {
  return (
    <div>
      App
      <IconMaterialSymbolsCheckBox />
      <ErrorBoundary fallback={(e) => <div>{e.toString()}</div>}>
        <Router>
          <FileRoutes />
        </Router>
      </ErrorBoundary>
    </div>
  );
}
