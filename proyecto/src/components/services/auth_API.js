export const saveUserToLocal = (user) => {
  localStorage.setItem('registeredUser', JSON.stringify(user));
};

export const getUserFromLocal = () => {
  const user = localStorage.getItem('registeredUser');
  return user ? JSON.parse(user) : null;
};
