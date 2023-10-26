const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
  };

  async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
  }

  async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight });
  }
  
  async function create(req, res) {
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }


  function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
  }
  