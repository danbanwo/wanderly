module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('itinerary', [
      {
        pictures: DataTypes.STRING,
        description: DataTypes.STRING,
        place: DataTypes.STRING,
        long: DataTypes.FLOAT,
        lang: DataTypes.FLOAT,
        total: DataTypes.INTEGER,
        category: DataTypes.STRING,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pictures: DataTypes.STRING,
        description: DataTypes.STRING,
        place: DataTypes.STRING,
        long: DataTypes.FLOAT,
        lang: DataTypes.FLOAT,
        total: DataTypes.INTEGER,
        category: DataTypes.STRING,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pictures: DataTypes.STRING,
        description: DataTypes.STRING,
        place: DataTypes.STRING,
        long: DataTypes.FLOAT,
        lang: DataTypes.FLOAT,
        total: DataTypes.INTEGER,
        category: DataTypes.STRING,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pictures: DataTypes.STRING,
        description: DataTypes.STRING,
        place: DataTypes.STRING,
        long: DataTypes.FLOAT,
        lang: DataTypes.FLOAT,
        total: DataTypes.INTEGER,
        category: DataTypes.STRING,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  }
}
