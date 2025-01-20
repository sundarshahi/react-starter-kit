import { AppLocale } from '@/app/context/locale/AppLocale.enum';
import { expect, test } from 'vitest';

import { translations } from './messages';

test('has object entries for all locales', () => {
  const value = Object.fromEntries(Object.entries(translations).map((entry) => [entry[0], typeof entry[1]]));
  const expectedValue: Record<AppLocale, 'object'> = {
    [AppLocale.en]: 'object',
    [AppLocale.jp]: 'object',
  };

  expect(value).toEqual(expectedValue);
});
