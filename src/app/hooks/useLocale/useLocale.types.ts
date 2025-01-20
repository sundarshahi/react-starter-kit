import type { IntlShape } from 'react-intl';

import { LocaleContextValueType } from '@/app/context/locale/localeContext/LocaleContext.types';
import type { TranslateFn } from '@/i18n/messages';

export type WithTranslateFn = {
  t: TranslateFn;
};

export type UseLocaleReturnType = () => IntlShape & LocaleContextValueType & WithTranslateFn;
