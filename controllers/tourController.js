const Tour = require('./../models/tourModel');



exports.getAllTours = async (req,res) => {
    try{
       const tours = await Tour.find();
    res.status(200).json({
        status:'success',
        requestedAt:req.requestedAt,
        results:tours.length,
        data:{
            tours
        }
    });
    }catch(err){
        res.status(404).json({
            status:'fail',
            meassage:err.message
        })
    }
   
}

// const fs = require('fs');
// const tours = JSON.parse(
//     fs.readFileSync('./dev-data/data/tours-simple.json','utf-8')
// );


// exports. checkID = (req,res,next,val) => {
//     console.log(    `Tour id is${val} `);
//   if(req.params.id * 1 > tours.length){
//          return res.status(404).json({
//             status : "Not found",
//             message : "Invalid Id"
//         })
//     }
//         next();
    
// }
// exports.checkbody = (req,res,next) => {
//     if(!req.body.name ||!req.body.price ){
//         return res.status(400).json({
//             status : 'fail',
//             message: 'missing name or price'
//         })
//     }
//     next();
// }
//  exports. getAllTour =  (req,res) => {
//     console.log(req.requestTime);
//     res.status(200)
//     .json({
//         status:'success',
//         requestedAt:req.requestTime,
//         results:tours.length,
//         data:{
//             tours
//         }
//     });
// } 
// exports.getTour =  (req,res) => {
//     console.log(req.params);
//     const id = req.params.id * 1;
//     const tour = tours.find(el => el.id === id);
//     if(!tour){
//         return res.status(404).json({
//             "status": "fail",
//             "message":"invalid Id"
//         });
//     }
    
//     res.status(200)
//     .json({
//         status:'success',
//         data : {
//             tour
//         }
        
        
//     });
// }  
// exports. createTour = (req,res) => {
//     // console.log(req.body);

//     const newId = tours[tours.length - 1].id+1;
//     const newTour = Object.assign({id:newId} , req.body);
//     tours.push(newTour);
//     fs.writeFile('./dev-data/data/tours-simple.json',JSON.stringify(tours),err => {
//       return res.status(201).json({
//         status :'success',
//         data:{
//             tours: newTour
//         }
//        })
//     })
    
// }

// exports.getTour = async (req,res) => {
//     try{
//      const tour = await Tour.findById(req.params.id);
//      res.status(200).json({
//         status:'success',
//         data:{
//             tour
//         }
//      });
//     }
//     catch(err){
//      res.status(404).json({
//         status:'fail',
//         message:err
//      });
//     }
// }
exports.getTour = async (req,res) => {
    try{
     const tour = await Tour.findById(req.params.id);
     res.status(200).json({
        status:'success',
        data:{
            tour
        }
     });
    }
    catch(err){
     res.status(404).json({
        status:'fail',
        message:err
     });
    }
}

exports.getTourDetails= async (req,res) => {
    try{
     const tour = await Tour.findById(req.params.id);
     res.status(200).json({
        status:'success',
        data:{
            "name":tour.name,
            "price":tour.price
        },
     });
    }
    catch(err){
     res.status(404).json({
        status:'fail',
        message:err
     });
    }
}









exports.createTour = async (req,res) => {
    try{
     const newTour = await Tour.create(req.body);
    
    return res.status(201).json({
        status:"success",
        data:{
           tour: newTour,
        }
    });
    }catch(err){
        return res.status(400).json({
            status:'fail',
            message:err.message,
        })
    }
    
}


exports. updateTour = async (req,res) => {
   try{
      const tour = await Tour.findByIdAndUpdate(req.params.id , req.body,{
        new:true,
        runValidators:true,
      })

    res.status(200).json({
        status:"success",
        data : {
            tour 
        }
    });
   }
   catch(err){
    res.status(404).json({
       status:'fail',
       message:err
    })
   }
    
}
exports.deleteTour = async (req,res) => {
try{
    
    const tour = await Tour.findByIdAndDelete(req.params.id)


     res.status(204).json({
        status:"success",
        data : null
    });
}
catch(err){
    res.status(404).json({
        status:'fail',
        message:err
    })
}
   
}