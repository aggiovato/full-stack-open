import { useDispatch } from "react-redux";
// REDUX ACTIONS CREATORS
import { createAnecdote } from "../../reducers/anecdoteReducer";

import CInput from "../customs/CInput";
import CButton from "../customs/CButton";

import { Header2, FormContainer } from "./AnecdoteForm.styles";

/******************************************************************************/

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    if (!content) return;
    event.target.content.value = "";
    dispatch(createAnecdote(content));
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
