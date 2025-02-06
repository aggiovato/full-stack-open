import CInput from "../customs/CInput";

import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../store/slices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <div className="shadow-md shadow-slate-300 rounded-md">
      <CInput
        className="bg-white"
        name="filter"
        placeholder="Filter anecdotes..."
        value={filter}
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
};

export default Filter;
