import type { KeysOfUnion } from 'type-fest';
import type { FileRoutesByFullPath } from '@/routeTree.gen';
import { useTitle } from '@rcuse/core';
import { useLocation, useRouter } from '@tanstack/react-router';
import { getPageTitle } from '@/utils';

const BASE_URL = import.meta.env.BASE_URL;

export function usePageTitle() {
  const router = useRouter();
  const { pathname } = useLocation();

  let path = `/${pathname.replace(new RegExp(`^${BASE_URL}?`), '')}`;
  if (path.length > 1) {
    path = path.replace(/\/$/, '');
  }

  const route = router.routesByPath[path as KeysOfUnion<FileRoutesByFullPath>];
  const title = route?.options?.staticData?.title;

  useTitle(getPageTitle(title));
}
