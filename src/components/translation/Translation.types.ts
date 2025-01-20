import { Translation } from '@/i18n/messages';
import { PrimitiveType } from 'react-intl';

export type TranslationProps = {
  id: Translation;
  values?: Record<string, PrimitiveType>;
};
