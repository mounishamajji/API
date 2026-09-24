
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });


mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB connection error:', err));


  //read json file

  const tours = JSON.parse(
    fs.readFileSync(  `./dev-data/data/tours-simple.json`,'utf-8')
  );

  //IMPORT DATA INTO DB

  const importData = async () => {
    try{
       await Tour.create(tours);
       console.log('Data successfully loaded');
       
    }catch(err){
        console.log(err);
    }
    process.exit();
  };

  //DELETE ALL DATA FROM DB

   const deleteData = async () => {
    try{
       await Tour.deleteMany();
       console.log('Data successfully deleted!');
       
    }catch(err){
        console.log(err);
    }
    process.exit();
  };
  if(process.argv[2] === '--import'){
    importData();
  }else if(process.argv[2] === '--delete'){
    deleteData();
  }

