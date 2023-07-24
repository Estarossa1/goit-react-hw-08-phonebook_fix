import ContactsForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      <section>
        <ContactsForm />
      </section>
      <section>
        <Filter />
      </section>
      <section>
        <ContactList />
      </section>
    </div>
  );
};

export default ContactsPage;