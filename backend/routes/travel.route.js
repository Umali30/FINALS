const express = require('express');
const travelRoute = express.Router();
// model
let TravelModel = require('../models/Travels');
travelRoute.route('/create-travel').post((req, res, next) => {
  TravelModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
travelRoute.route('/').get((req, res, next) => {
  TravelModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 travelRoute.route('/edit-travel/:id').get((req, res, next) => {
  TravelModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
travelRoute.route('/update-travel/:id').put((req, res, next) => {
  TravelModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Travel Log successfully updated!')
    }
  })
})
// Delete
travelRoute.route('/delete-travel/:id').delete((req, res, next) => {
  TravelModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
//About US
travelRoute.route('/aboutus-travel/:id').get((req, res, next) => {
  TravelModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 //Places
 travelRoute.route('/places-travel/:id').get((req, res, next) => {
  TravelModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
module.exports = travelRoute;