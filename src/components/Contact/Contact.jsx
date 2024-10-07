import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filterSlice";
const Contact = () => {
	const contacts = useSelector(selectContacts);

	const selectName = useSelector(selectNameFilter);

	const filteredData = contacts.filter((contact) =>
		contact.name.toLowerCase().trim().includes(selectName.toLowerCase().trim())
	);

	const dispatch = useDispatch();
	return (
		<>
			{filteredData.map((contact) => (
				<li className={s.listItem} key={contact.id}>
					<div className={s.listData}>
						<div className={s.item}>
							<BsFillPersonFill /> {contact.name}
						</div>
						<div className={s.item}>
							<BsFillTelephoneFill /> {contact.number}
						</div>
					</div>
					<button
						className={s.btn}
						onClick={() => dispatch(deleteContact(contact.id))}
					>
						Delete
					</button>
				</li>
			))}
		</>
	);
};

export default Contact;
