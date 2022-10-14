import { redirect } from 'react-router';
import { deleteContact } from './contacts';

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect('/');
}
