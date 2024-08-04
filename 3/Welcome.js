import React from 'react';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome_message')}</h1>
      <p>{t('intro_text')}</p>
    </div>
  );
};

export default Welcome;
