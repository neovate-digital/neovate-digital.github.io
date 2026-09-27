import en, { type Dictionary } from './en';
import ru from './ru';
import cs from './cs';
import uk from './uk';
import de from './de';
import es from './es';
import pl from './pl';

export const defaultLocale = 'en';

// Order here is the order in the language menu.
export const locales = [
  { code: 'en', name: 'English', dict: en },
  { code: 'cs', name: 'Čeština', dict: cs },
  { code: 'de', name: 'Deutsch', dict: de },
  { code: 'es', name: 'Español', dict: es },
  { code: 'pl', name: 'Polski', dict: pl },
  { code: 'uk', name: 'Українська', dict: uk },
  { code: 'ru', name: 'Русский', dict: ru },
] as const;

export type Locale = (typeof locales)[number]['code'];

export function getDict(code: Locale): Dictionary {
  return locales.find((l) => l.code === code)!.dict;
}

export function localePath(code: Locale): string {
  return code === defaultLocale ? '/' : `/${code}/`;
}
