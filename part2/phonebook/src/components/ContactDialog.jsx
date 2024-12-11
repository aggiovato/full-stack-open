// EXTERNAL MODULES
import { forwardRef, useEffect, useState } from "react";

// STYLES
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

// SERVICES
import { deleteContact, getAllContacts } from "@services/contacts";

/************************************************************************ */

// COMPONENT
const ContactDialog = forwardRef(
  ({ contactDetails, handleClosure, handleDeleteCompletion }, ref) => {
    // STATES
    const [isLongDtails, setIsLongDtails] = useState(false);
    // -> controls how the dialog is displayed

    // EFFECTS
    useEffect(() => {
      if (contactDetails) {
        setIsLongDtails(
          contactDetails.name.length > 18 || contactDetails.number.length > 18
        );
      } else {
        setIsLongDtails(false);
      }
    }, [contactDetails]);
    // -> checks if the contactDetails are long enough to be displayed in the dialog

    if (!contactDetails) return null;

    // HANDLERS
    const handleClose = () => {
      ref.current?.close();
      handleClosure(undefined);
      setIsLongDtails(false);
    }; // -> closes the dialog and resets the state

    const handleEdit = () => {
      // TODO: EDIT CONTACT
    }; // -> opens the edit dialog

    const handleDelete = () => {
      const isDeletable = confirm(
        "Are you sure you want to delete this contact?"
      );
      if (!isDeletable) return;

      deleteContact(contactDetails.id)
        .then(() => {
          getAllContacts()
            .then((data) => {
              handleDeleteCompletion(data, {
                type: "success",
                message: `Contact has been deleted successfully`,
              });
            })
            .catch((error) => console.error("Error fetching contacts", error));

          handleClose();
        })
        .catch((error) => {
          getAllContacts().then((data) => {
            error.code === "ERR_BAD_REQUEST"
              ? handleDeleteCompletion(data, {
                  type: "error",
                  message: `Contact is no longer in the server`,
                })
              : handleDeleteCompletion(data, {
                  type: "error",
                  message: error.message,
                });
          });

          handleClose();
        });
    }; // -> deletes the contact from the server and the local state

    /************************************************************************ */

    return (
      <>
        <DialogContainer ref={ref}>
          <DialogTitle>Contact Details</DialogTitle>
          <DialogCard $isLongDtails={isLongDtails}>
            <UserIcon />
            <DialogContent>
              <DialogContentLine>Name: {contactDetails.name}</DialogContentLine>
              <DialogContentLine>
                Phone: {contactDetails.number}
              </DialogContentLine>
            </DialogContent>
          </DialogCard>
          <DialogCloseButton onClick={handleClose}>
            <StyCloseIcon />
          </DialogCloseButton>
          <ButtonsContainer>
            <Button $variant="success" onClick={handleEdit}>
              Edit
            </Button>
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
