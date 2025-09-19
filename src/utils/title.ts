import { getEnvValue } from './env';

const defautPrefix = getEnvValue('VITE_APP_TITLE');

export function getPageTitle(text?: string, prefix = defautPrefix) {
  if (!text) {
    return prefix;
  }

  return `${text} - ${prefix}`;
}
