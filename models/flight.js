const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airline: { 
        type: String, 
        required: true, 
        enum: ['Southwest', 'United', 'Delta', 'American']
    },
    arrival: {
        type: Date,
        required: true
    }
},{
    timestamps: true
});

const flightSchema = new Schema({
    airline: { 
        type: String, 
        required: true, 
        enum: ['Southwest', 'United', 'Delta', 'American']
    },
    airport: { 
        type: String, 
        default: 'DCA', 
        enum: ['DCA', 'SFA', 'LAX', 'DFW']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: () => {
          const oneYear = new Date();
          oneYear.setFullYear(oneYear.getFullYear() + 1);
          return oneYear;
        },
        required: true
      },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
