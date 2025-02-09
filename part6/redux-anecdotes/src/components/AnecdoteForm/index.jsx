import { useDispatch } from "react-redux";
// REDUX ACTIONS CREATORS
import { createAnecdote } from "../../store/slices/anecdoteSlice";
import { setNotificationTimeout } from "../../store/slices/notificationSlice";
import anecdotesService from "../../services/anecdotes";

import CInput from "../customs/CInput";
import CButton from "../customs/CButton";

import { Header2, FormContainer } from "./AnecdoteForm.styles";

/******************************************************************************/

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;

    if (!content) return;

    event.target.content.value = "";
    const anecodote = await anecdotesService.createNew(content);
    dispatch(createAnecdote(anecodote));
    dispatch(setNotificationTimeout("New anecdote created!"));
  };

  return (
    <>
      <Header2>Create New</Header2>
      <FormContainer onSubmit={addAnecdote}>
        <CInput name="content" placeholder="Enter a new anecdote..." />
        <CButton deepness={3} type="submit">
          Create
        </CButton>
      </FormContainer>
    </>
  );
};

export default AnecdoteForm;
