/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { PrimitiveType } from 'react-intl';

import { AppLocale } from '@/app/context/locale/AppLocale.enum';

import enMessages from './data/en.json';
import jpMessages from './data/jp.json';

type KeyAsValue<T> = { [P in keyof T]: P };

const keysToValues = <T extends Record<string, string | unknown>>(source: T): KeyAsValue<typeof source> =>
  (Object.keys(source) as Array<keyof T>).reduce(
    (accumulated, current) => {
      accumulated[current] = current;
      return accumulated;
    },
    {} as KeyAsValue<typeof source>,
  );

export const AppMessages = {
  ...keysToValues(enMessages),
  ...keysToValues(jpMessages),
} as const;

export type Translation = keyof typeof AppMessages;

export type TranslateFn = (id: Translation, value?: Record<string, PrimitiveType>) => string;

export const translations: Record<AppLocale, Record<Translation, string>> = {
  [AppLocale.en]: enMessages,
  [AppLocale.jp]: jpMessages,
};
