import { forwardRef, useEffect, useState } from "react";

import {
  DialogContainer,
  DialogTitle,
  DialogCard,
  DialogContent,
  DialogContentLine,
  UserIcon,
  StyCloseIcon,
  DialogCloseButton,
  ButtonsContainer,
  Button,
} from "@styles/ContactDialog.styles.jsx";

import { deleteContact } from "@services/contacts";

const ContactDialog = forwardRef(
  ({ contactDetails, handleClosure, handleDeleteCompletion, list }, ref) => {
    const [isLongDtails, setIsLongDtails] = useState(false);

    useEffect(() => {
      if (contactDetails) {
        setIsLongDtails(
          contactDetails.name.length > 18 || contactDetails.phone.length > 18
        );
      } else {
        setIsLongDtails(false);
      }
    }, [contactDetails]); // checks if the contactDetails are long enough to be displayed in the dialog

    if (!contactDetails) return null;

    const handleClose = () => {
      ref.current?.close();
      handleClosure(undefined);
      setIsLongDtails(false);
    }; // closes the dialog and resets the state

    const handleDelete = () => {
      const isDeletable = confirm(
        "Are you sure you want to delete this contact?"
      );
      if (!isDeletable) return;

      const updatedList = list.filter(
        (contact) => contact.id !== contactDetails.id
      );

      deleteContact(contactDetails.id)
        .then(() => {
          handleDeleteCompletion(updatedList, {
            type: "success",
            message: `Contact has been deleted successfully`,
          });
          handleClose();
        })
        .catch((error) => {
          handleDeleteCompletion(updatedList, {
            type: "error",
            message:
              error.code === "ERR_BAD_REQUEST"
                ? "Contact has already been deleted from the server"
                : error.message,
          });
          handleClose();
          console.log(error);
        });
    }; // deletes the contact from the server and the local state

    return (
      <>
        <DialogContainer ref={ref}>
          <DialogTitle>Contact Details</DialogTitle>
          <DialogCard $isLongDtails={isLongDtails}>
            <UserIcon />
            <DialogContent>
              <DialogContentLine>Name: {contactDetails.name}</DialogContentLine>
              <DialogContentLine>
                Phone: {contactDetails.phone}
              </DialogContentLine>
            </DialogContent>
          </DialogCard>
          <DialogCloseButton onClick={handleClose}>
            <StyCloseIcon />
          </DialogCloseButton>
          <ButtonsContainer>
            <Button $variant="success">Edit</Button>
            <Button $variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </ButtonsContainer>
        </DialogContainer>
      </>
    );
  }
);

// Helps to identify the component as
// it is created from a function like forwardRef
ContactDialog.displayName = "ContactDialog";
export default ContactDialog;
