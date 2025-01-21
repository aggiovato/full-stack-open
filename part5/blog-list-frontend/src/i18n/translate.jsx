import { FormattedMessage } from "react-intl";

const translate = (id, values) => {
  return <FormattedMessage id={id} values={values} />;
};

export default translate;
