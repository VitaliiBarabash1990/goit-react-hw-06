import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
	const search = useSelector(selectNameFilter);

	const dispatch = useDispatch();
	return (
		<label className={s.label}>
			<span className={s.text}>Find contacts by name</span>
			<input
				type="text"
				placeholder="Search..."
				value={search}
				onChange={(e) => dispatch(changeFilter(e.target.value))}
			/>
		</label>
	);
};

export default SearchBox;
