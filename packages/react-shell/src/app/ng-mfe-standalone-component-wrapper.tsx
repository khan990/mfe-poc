import * as React from 'react';

import {mountStandalone} from 'ng-mfe-standalone-component/Module';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'app-root': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export function NgMfeStandaloneComponentWrapper() {
  React.useEffect(() => {
    mountStandalone();
  }, []);

  return (
    <React.Suspense fallback={null}>
        <app-root></app-root>
    </React.Suspense>
  );
}

export default NgMfeStandaloneComponentWrapper;
