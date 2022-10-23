module.exports = (sequelize, Sequelize) => {
    const Photo = sequelize.define("photo", {
      url: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING
      },
      likes: {
        type: Sequelize.INTEGER
      },
      category: { // Gallery or Photography
        type: Sequelize.STRING
      },
      createdat: {
        // allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedat: {
        // allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
    return Photo;
  };