// STYLES
import {
  FilterContainer,
  FilterTitle,
  FilterInput,
  StyIoSearch,
  FilterLine,
} from "@styles/Filter.styles.jsx";

/************************************************************************ */

// COMPONENT
const Filter = ({ handleFilter }) => {
  // HANDLERS
  const handleFilterChange = (event) => {
    handleFilter(event.target.value);
  };

  /************************************************************************ */

  return (
    <>
      <FilterContainer>
        <FilterTitle>Phonebook</FilterTitle>
        <FilterLine>
          <FilterInput
            type="text"
            placeholder="Search by name"
            onChange={handleFilterChange}
          />
          <StyIoSearch />
        </FilterLine>
      </FilterContainer>
    </>
  );
};

export default Filter;
