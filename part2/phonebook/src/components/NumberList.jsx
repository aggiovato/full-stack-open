import {
  ListContainer,
  ListTitle,
  Number,
  NumberText,
  StyFaPhone,
  StyIoPerson,
} from "../styles/NumberList-styles.jsx";

const NumberList = ({ list }) => {
  return (
    <>
      <ListContainer>
        <ListTitle>Numbers</ListTitle>
        {list.map((person) => {
          return (
            <Number key={person.name + person.phone}>
              <NumberText>
                <StyIoPerson /> {person.name}
              </NumberText>
              <NumberText>
                {person.phone} <StyFaPhone />
              </NumberText>
            </Number>
          );
        })}
      </ListContainer>
    </>
  );
};

export default NumberList;
