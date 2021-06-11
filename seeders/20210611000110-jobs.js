'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('jobs', [{
      jobTitle: 'Class A Driver',
      jobCat: 'Transportation',
      employer: 'Swift Transportation',
      desc: 'Over the Road Trucker',
      skills: 'Class A CDL',
      location: 'Phoenix, AZ',
      website: 'https://www.swifttrans.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
