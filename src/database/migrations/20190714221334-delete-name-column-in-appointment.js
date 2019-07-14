module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('appointments', 'name');
  },
};
