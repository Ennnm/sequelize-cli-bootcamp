module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tripList = [
      {
        name: 'Christmas PH',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'New Year PH',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const trips = await queryInterface.bulkInsert(
      'trips',
      tripList,
      { returning: true },
    );

    const attractionsList = [
      {
        name: 'Sentosa',
        trip_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'ECP',
        trip_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const attractions = await queryInterface.bulkInsert(
      'attractions',
      attractionsList,
      { returning: true },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('trips', null, {});
    await queryInterface.bulkDelete('attractions', null, {});
  },
};
