const users = [];

const join = (id, username, room) => {
  const user = { id, username, room };
  users.push(user);
  return user;
};
const get = (id) => users.find((user) => user.id === id);

const disconnect = (id) => users.filter((user) => user.id !== id);

module.exports = {
  join,
  get,
  disconnect,
};
