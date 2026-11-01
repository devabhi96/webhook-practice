function getUser(users, id) {
  const user = users.find(u => u.id === id);
  return user.name;
}

module.exports = { getUser };