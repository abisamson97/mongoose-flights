const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    getTicket
  };

  async function create(req, res) {

    try {
    await Ticket.create({ ...req.body, flight: req.params.id })
      res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  async function getTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { flight })

  }