import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
	const contacts = useSelector(selectContacts);

	const selectName = useSelector(selectNameFilter);

	const filteredData = contacts.filter((contact) =>
		contact.name.toLowerCase().trim().includes(selectName.toLowerCase().trim())
	);

	const dispatch = useDispatch();

	return (
		<>
			<ul className={s.contain}>
				{filteredData.map((contact) => (
					<Contact dispatch={dispatch} key={contact.id} {...contact} />
				))}
			</ul>
		</>
	);
};

export default ContactList;
