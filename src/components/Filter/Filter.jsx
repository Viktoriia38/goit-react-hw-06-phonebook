import { useSelector } from 'react-redux';
import css from './Filter.module.css';

export function Filter({ onChange }) {
  const value = useSelector(state => state.contactsData.filter);

  return (
    <label className={css.name} htmlFor="">
      Find contacts by Name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.userName}
      />
    </label>
  );
}
