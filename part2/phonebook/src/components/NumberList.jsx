import { GoDot } from "react-icons/go";
import {
  ListContainer,
  ListTitle,
  Number,
  NumberText,
  StyFaPlus,
} from "../styles/NumberList-styles.jsx";
const NumberList = ({ list }) => {
  return (
    <>
      <ListContainer>
        <ListTitle>Numbers</ListTitle>
        {list.map((person) => {
          return (
            <Number key={person.name}>
              <NumberText>
                <GoDot /> {person.name}
              </NumberText>
              <StyFaPlus />
            </Number>
          );
        })}
      </ListContainer>
    </>
  );
};

export default NumberList;
