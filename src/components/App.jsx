import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { SectionSubtitle } from './sectionSubtitle/SectionSubtitle';
import { SectionTitle } from './sectionTitle/SectionTitle';
import css from './App.module.css';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const App = () => {
  return (
    <div className={css.container}>
      <NotificationContainer />

      <SectionTitle title="Phonebook" />

      <ContactForm />

      <SectionSubtitle subtitle="Contacts" />

      <Filter />

      <ContactList />
    </div>
  );
};
