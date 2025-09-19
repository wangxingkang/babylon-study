import { RouterProvider } from '@tanstack/react-router';
import { createRoot } from 'react-dom/client';
import { router } from '@/lib/router';

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }

  interface StaticDataRouteOption {
    /** 页面标题 */
    title?: string;
    /** 是否允许打开抽屉 */
    drawer?: boolean;
    /** 抽屉宽度 */
    drawerWidth?: string | number;
  }
}

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <RouterProvider router={router} />,
  );
}
