import React, { Component } from 'react';

export const themes = {
  en: {
    upload_button: 'upload',
    home_menu: 'home',
    lang: 'en',
    pages: [],
  },
  ukr: {
    upload_button: 'завантажити',
    home_menu: 'домашня',
    lang: 'ukr'
  },
};

export const ThemeContext = React.createContext(
  themes.en // default value
);
