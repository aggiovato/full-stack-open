import { useDispatch } from "react-redux";
// REDUX ACTIONS CREATORS
import { vote } from "../../reducers/anecdoteReducer";

import CButton from "../customs/CButton";

import {
  CardContainer,
  MainContent,
  VotingSection,
} from "./AnecdoteCard.styles";

/******************************************************************************/

const AnecdoteCard = ({ anecdote }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      {/* Main Content Card */}
      <MainContent>
        <p className="text-md">{anecdote.content}</p>
      </MainContent>

      {/* Voting Section - Positioned at relative top */}
      <VotingSection>
        <p className="text-sm text-gray-600">
          has{" "}
          <span className="text-gray-900 font-semibold">{anecdote.votes}</span>{" "}
          {anecdote.votes !== 1 ? "votes" : "vote"}
        </p>
        <CButton
          deepness={1}
          isSmall={true}
          onClick={() => dispatch(vote(anecdote.id))}
        >
          vote
        </CButton>
      </VotingSection>
    </CardContainer>
  );
};

export default AnecdoteCard;
