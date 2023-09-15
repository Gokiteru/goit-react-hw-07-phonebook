import { setFilter, getFilter } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = data => {
    dispatch(setFilter(data));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name</label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={e => handleChangeFilter(e.target.value)}
      ></input>
    </div>
  );
}
