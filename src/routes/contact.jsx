import { Form, useLoaderData } from "react-router-dom";

export default function Contact() {
  const { contact } = useLoaderData();
  console.log("***");
  console.log(contact);
  console.log(contact.first);
  console.log("***");
  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} alt="" />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first}
              {contact.last}
            </>
          ) : (
            <i>No name</i>
          )}
          <Favorite contact={contact} />
        </h1>
        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}
        {contact.notes && <p>{contact.notes}</p>}
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(evt) => {
              if (!confirm("Please, cofirm you want to delete this record.")) {
                evt.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorite" : "Add to favorite"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
