import styled from "styled-components";
// COMPONENTS
import Header from "./components/Header";
import MainContent from "./components/MainContent";

/******************************************************************************/

const App = () => {
  return (
    <AppContainer>
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
