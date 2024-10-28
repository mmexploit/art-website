import {useLocale, useTranslations} from 'next-intl';
import {locales, routing} from '@/i18n/routing';
import LocaleSwitcherSelect from './switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur?.value} value={cur?.value}>
          {/* {t('locale', {locale: cur})} */}
          {cur?.label}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}