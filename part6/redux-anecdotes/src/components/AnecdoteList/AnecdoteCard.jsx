import { useDispatch } from "react-redux";
// REDUX ACTIONS CREATORS
import { voteAnecdote } from "../../reducers/anecdoteReducer";

import CButton from "../customs/CButton";
import code_logo from "../../assets/CODE.svg";

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
        <button
          className="absolute border-none m-0 p-0 top-15 left-4 w-30 h-30 opacity-15 -translate-x-10 -translate-y-1/2 -rotate-30 group-hover:opacity-80 group-hover:rotate-0 group-hover:w-7 group-hover:h-7 group-hover:top-5 group-hover:left-12 active:opacity-100 active:w-6 active:h-6 transition-all duration-300"
          onClick={() => navigator.clipboard.writeText(anecdote.content)}
        >
          <img src={code_logo} alt="VSCODE Logo" />
        </button>
        <p className="text-sm lg:text-lg ml-6 select-none">
          {anecdote.content}
        </p>
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
          onClick={() => dispatch(voteAnecdote(anecdote.id))}
        >
          vote
        </CButton>
      </VotingSection>
    </CardContainer>
  );
};

export default AnecdoteCard;
