import en, { type Dictionary } from './en.ts';
import ru from './ru.ts';
import cs from './cs.ts';
import uk from './uk.ts';
import de from './de.ts';
import es from './es.ts';
import pl from './pl.ts';

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
