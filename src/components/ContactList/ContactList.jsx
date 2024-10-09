import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
	const contacts = useSelector(selectContacts);

	const selectName = useSelector(selectNameFilter);

	const filteredData = contacts.filter((contact) =>
		contact.name.toLowerCase().trim().includes(selectName.toLowerCase().trim())
	);

	return (
		<>
			<ul className={s.contain}>
				{filteredData.map((contact) => (
					<Contact key={contact.id} {...contact} />
				))}
			</ul>
		</>
	);
};

export default ContactList;
