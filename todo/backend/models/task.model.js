module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING
      },
      ownerName: {
        type: Sequelize.STRING
      },
      ownerMail: {
        type: Sequelize.STRING
      },
      finished: {
        type: Sequelize.BOOLEAN, 
        allowNull: false, 
        defaultValue: false 
      },
      changedTimes: {
        type: Sequelize.INTEGER,
      }
    });
  
    return Task;
  };