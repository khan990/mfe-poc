export function setReactRouterContext(context: any) {
  (window as any).reactRouterContext = context;
}

export function getReactRouterContext() {
  return (window as any).reactRouterContext;
}
