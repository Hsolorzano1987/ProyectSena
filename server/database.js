const mongoose = require('mongoose');

const URI = 'mongodb+srv://heralfservice:QXQtqJkESmleib57@cluster0.5bass.mongodb.net/test';

mongoose.connect(URI)

.then(db => console.log('DB is connected'))

.catch(err => console.error(err));

module.exports = mongoose;