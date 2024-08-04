import React from 'react';
import { useTranslation } from 'react-i18next';

const DateDisplay = ({ date }) => {
  const { t } = useTranslation();

  return <div>{t('date_format', { date: new Date(date) })}</div>;
};

export default DateDisplay;
