import { forwardRef, useEffect, useState } from "react";

import {
  DialogContainer,
  DialogTitle,
  DialogCard,
  DialogContent,
  DialogContentLine,
  UserIcon,
  StyCloseIcon,
  DialogButton,
} from "@styles/ContactDialog.styles.jsx";

const ContactDialog = forwardRef(({ contactDetails, handleClosure }, ref) => {
  const [isLongDtails, setIsLongDtails] = useState(false);

  useEffect(() => {
    if (contactDetails) {
      setIsLongDtails(
        contactDetails.name.length > 18 || contactDetails.phone.length > 18
      );
    } else {
      setIsLongDtails(false);
    }
  }, [contactDetails]);

  if (!contactDetails) return null;

  const handleClose = () => {
    ref.current?.close();
    handleClosure(undefined);
    setIsLongDtails(false);
  };
  return (
    <DialogContainer ref={ref}>
      <DialogTitle>Contact Details</DialogTitle>
      <DialogCard $isLongDtails={isLongDtails}>
        <UserIcon />
        <DialogContent>
          <DialogContentLine>Name: {contactDetails.name}</DialogContentLine>
          <DialogContentLine>Phone: {contactDetails.phone}</DialogContentLine>
        </DialogContent>
      </DialogCard>
      <DialogButton onClick={handleClose}>
        <StyCloseIcon />
      </DialogButton>
    </DialogContainer>
  );
});

// Helps to identify the component as
// it is created from a function like forwardRef
ContactDialog.displayName = "ContactDialog";
export default ContactDialog;
