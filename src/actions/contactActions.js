import { redirect } from "react-router";
import { createContact, deleteContact, updateContact } from "../contacts";

export async function createContactAction() {
  const contact = await createContact();
  //console.log(contact);
  return redirect(`/contacts/${contact.id}/edit`);
  // return redirect(`/contacts/${contact.id}/edit`);
}

export async function editContactAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  // console.log(formData);
  const updates = Object.fromEntries(formData);
  // console.log(updates);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function deleteContactAction({ params }) {
  throw new Error("Oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
