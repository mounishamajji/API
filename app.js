const express = require ('express');

const app = express ();

const userRouter = require('./router/user-router');
const tourRouter = require('./router/tour-router');
const morgan = require('morgan');

if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'));
}

app.use(express.json()); //middleware




app.use(express.static(`./public`))
//creating own middleware
app.use((req,res,next) => {
    console.log('created the own middleware');
    next();
});

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// app.get('/', (req,res) => {
//     res.status(200)
//     .json({message:'Hello to the server', app:'Natours'});
// }



//Routes for users



//Routes for tours

// app.get('/api/v1/tours',getAllTour);
// app.get('/api/v1/tours/:id',getTour)
// app.post('/api/v1/tours',createTour)
// app.patch('/api/v1/tours/:id',updateTour )
// app.delete('/api/v1/tours/:id',deleteTour)


//routes for users




app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);


module.exports = app;