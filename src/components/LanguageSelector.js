import { useTranslation } from 'next-i18next';

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    // You can also set a cookie or local storage to remember the user's choice
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{t('English')}</button>
      <button onClick={() => changeLanguage('hr')}>{t('Hrvatski')}</button>
    </div>
  );
}

export default LanguageSelector;
