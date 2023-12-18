import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <div className={css.contactsList} key={id}>
    <p>
      {name}: {number}
    </p>
    <button
      className={css.delContactBtn}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </div>
);

export { ContactItem };
