import AnecdoteForm from "../AnecdoteForm";
import AnecdoteList from "../AnecdoteList";

import { MainContainer, FormSection, ListSection } from "./MainContent.styles";

/******************************************************************************/

const MainContent = () => {
  return (
    <MainContainer>
      <FormSection>
        <AnecdoteForm />
      </FormSection>

      <ListSection>
        <AnecdoteList />
      </ListSection>
    </MainContainer>
  );
};

export default MainContent;
