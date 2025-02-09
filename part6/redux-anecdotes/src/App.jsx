import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "./store/slices/anecdoteSlice";
// COMPONENTS
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Notification from "./components/Notification";

/******************************************************************************/

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
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
