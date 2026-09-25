import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'عربي' },
];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const activeCode = i18n.resolvedLanguage?.slice(0, 2) || 'fr';

  return (
    <label className="language-switcher">
      <span className="visually-hidden">{t('common.language')}</span>
      <select
        name="language"
        value={activeCode}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
        aria-label={t('common.language')}
      >
        {LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default LanguageSwitcher;
