import { getContact, getContacts } from "../contacts";

export async function geContactsLoader() {
  const contacts = await getContacts();
  // console.log(contacts);
  return { contacts };
}

export async function getContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  console.log(contact);
  return { contact };
}
