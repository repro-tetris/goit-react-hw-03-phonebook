const STORAGE_NAME = "contacts";

export const loadContacts = () => {
  const contacts = localStorage.getItem(STORAGE_NAME);
  if (contacts) {
    return JSON.parse(contacts);
  }

  return [];
};

export const saveContacts = (contacts) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(contacts));
};
