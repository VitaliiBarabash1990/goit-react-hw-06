import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filterSlice";

const SearchBox = () => {
	const dispatch = useDispatch();
	return (
		<label className={s.label}>
			<span className={s.text}>Find contacts by name</span>
			<input
				type="text"
				placeholder="Search..."
				onChange={(e) => dispatch(changeFilter(e.target.value))}
			/>
		</label>
	);
};

export default SearchBox;
