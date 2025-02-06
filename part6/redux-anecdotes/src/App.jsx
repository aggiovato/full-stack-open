import styled from "styled-components";
// COMPONENTS
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Notification from "./components/Notification";

/******************************************************************************/

const App = () => {
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
