const router = require('express').Router();

router.get('/', (req,res)=> {
  //get all notes from db
  res.json(`got your ${req.method} request`)
})

router.post('/', (req,res)=> {
  //add a note to the db
  res.json(`got your ${req.method} request`)
});

module.exports = router;
