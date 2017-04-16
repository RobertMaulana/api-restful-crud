'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Memos",
      [{
        judul_memo: "Rapat Kenegaraan",
        isi_memo: "Undangan rapat kenegaraan di balai pusat pemerintah DKI Jakarta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        judul_memo: "Sidang interpelasi",
        isi_memo: "Undangan sidang interpelasi di banggar DPR RI",
        createdAt: new Date(),
        updatedAt: new Date(),
      }]
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete(
      "Memos",
      null,
      {}
    )
  }
};
