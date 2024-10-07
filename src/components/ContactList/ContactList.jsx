import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList() {
	return (
		<>
			<ul className={s.contain}>
				<Contact />
			</ul>
		</>
	);
}

export default ContactList;
