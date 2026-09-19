const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB connection error:', err));




// const testTour = new Tour({
//   name: 'Darzling',
//   price: 1000,
// });

// testTour
  // .save()
  // .then((doc) => {
  //   console.log(doc);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
const app = require('./app');
// console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Runing the app on port ${port}....`);
});
