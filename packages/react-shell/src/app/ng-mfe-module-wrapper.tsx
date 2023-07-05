import * as React from 'react';

import {mount} from 'ng-mfe-module/Module';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'app-root-module': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export function NgMfeModuleWrapper() {
  React.useEffect(() => {
    mount();
  }, []);

  return (
    <React.Suspense fallback={null}>
        <app-root-module></app-root-module>
    </React.Suspense>
  );
}

export default NgMfeModuleWrapper;
