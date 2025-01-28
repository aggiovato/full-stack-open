// HOOKS
import { useIntl } from "react-intl";

/*********************************************************************************** */

// object with translations and some standard errors
const errorMessages = {
  NETWORK_ERROR: "error.network",
  SERVER_ERROR: "error.server",
  UNAUTHORIZED: "error.unauthorized",
  NOT_FOUND: "error.notfound",
  UNKNOWN_ERROR: "error.unknown",

  ERR_BAD_REQUEST: "error.bad-request",

  "Invalid username or password": "login.message.invalid-credentials",
  "Title is required": "blogform.message.invalid-title",
  "Author is required": "blogform.message.invalid-author",
  "Url is required": "blogform.message.invalid-url",
};

const useErrorTranslator = () => {
  const { formatMessage } = useIntl();

  // function to translate the error message
  const translateError = (errorCode) => {
    const translationKey = errorMessages[errorCode] || "error.unknown";
    return formatMessage({ id: translationKey });
  };

  return { translateError };
};

export default useErrorTranslator;
