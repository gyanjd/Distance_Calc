const express = require('express');
const router = express.Router();
const config = require('config');
const { body, validationResult } = require('express-validator');

const Distance = require('../models/Distance');

router.post('/',[
  body('name', 'Please add name').not().isEmpty(),
  body('unq_id', 'Please add ID').not().isEmpty(),
  body('distance', 'Please add Distance').not().isEmpty(),
  body('d_time', 'Please add Time').not().isEmpty(),
  body('d_date', 'Please add Date').not().isEmpty(),

], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, unq_id, distance, d_time, d_date } = req.body;

  try {

    distances = new Distance({
      name,
      unq_id,
      distance,
      d_time,
      d_date
    });

    await distances.save();
    res.json('Added');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});


router.get('/', async (req, res) => {
  try {

    let start_time = req.query.start_time.split(':');
    let s_hour = parseInt(start_time[0], 10);
    let s_min = (s_hour * 60) + parseInt(start_time[1], 10);

    let end_time = req.query.end_time.split(':');
    let e_hour = parseInt(end_time[0], 10);
    let e_min = (e_hour * 60) + parseInt(end_time[1], 10)

    const distances = await Distance.find({ unq_id : req.query.id, d_date : req.query.date });
    let find_distances = 0;
    distances.forEach(function(dist){
      let sp = dist.d_time.split(':');
      let hour = parseInt(sp[0], 10);
      let min = (hour * 60) + parseInt(sp[1], 10);
      if((s_min <= min) && (min <= e_min)){
          find_distances += parseInt(dist.distance, 10);
      }
    })
    res.json(find_distances);
  } catch (err) {
    res.status(500).send('Server Error');
  }
})

module.exports = router;