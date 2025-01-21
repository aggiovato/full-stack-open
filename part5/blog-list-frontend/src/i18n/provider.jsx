import { IntlProvider } from "react-intl";
import { Fragment } from "react";
import translations from "./translations";

const Provider = ({ children, locale = "en-UK" }) => {
  const messages = translations[locale] || translations["en-UK"];
  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      defaultLocale="en-UK"
      textComponent={Fragment}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
