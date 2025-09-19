import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/_home/dashboard')({
  component: lazyRouteComponent(() => import('@/views/dashboard')),
  staticData: {
    title: '概览',
    drawer: false,
  },
});
