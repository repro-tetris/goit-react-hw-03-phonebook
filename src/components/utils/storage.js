const STORAGE_CONTACTS = {
  NAME: "contacts",
};

export const loadContacts = () => {
  const contacts = localStorage.getItem(STORAGE_CONTACTS.NAME);
  if (contacts) {
    return JSON.parse(contacts);
  }

  return [];
};

export const saveContacts = (contacts) => {
  localStorage.setItem(STORAGE_CONTACTS.NAME, JSON.stringify(contacts));
};
