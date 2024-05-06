const User = require('./User');
const Workout = require('./Workout');

//Workout belongs to user 
Workout.belongsTo(User, {
    //foreignKey: 'userId', 
    onDelete: 'CASCADE'
});

User.hasMany(Workout, {
  //  foreignKey: 'workoutId'
  onDelete: 'CASCADE'
})
module.exports = {
    User, Workout
}
