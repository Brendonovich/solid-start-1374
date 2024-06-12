import { ErrorBoundary } from 'solid-js';
import { SeparateFileComponent } from './SeparateFileComponent';

export default function () {
  return (
    <div>
      <ErrorBoundary fallback={() => <div>Inline icon failed to load</div>}>
        <IconMaterialSymbolsCheckBox />
      </ErrorBoundary>
      <ErrorBoundary
        fallback={() => <div>SameFileComponent failed to load</div>}
      >
        <SameFileComponent />
      </ErrorBoundary>
      <ErrorBoundary
        fallback={() => <div>SeparateFileComponent failed to load</div>}
      >
        <SeparateFileComponent />
      </ErrorBoundary>
    </div>
  );
}

function SameFileComponent() {
  return (
    <div>
      Same File Component
      <IconMaterialSymbolsCheckBox />
    </div>
  );
}
