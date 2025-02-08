import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import anecdotesService from "./services/anecdotes";
import { setAnecdotes } from "./store/slices/anecdoteSlice";
// COMPONENTS
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Notification from "./components/Notification";

/******************************************************************************/

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAnecdotes = async () => {
      try {
        const anecdotes = await anecdotesService.getAll();
        dispatch(setAnecdotes(anecdotes));
      } catch (error) {
        console.error("Error fetching anecdotes:", error);
      }
    };

    fetchAnecdotes();
  }, []);

  return (
    <AppContainer>
      <Notification />
      <Header />
      <MainContent />
    </AppContainer>
  );
};

export default App;

/******************************************************************************/
// STYLES
const AppContainer = styled.div.attrs(() => ({
  className: `mx-auto`,
}))``;
