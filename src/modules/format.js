const mongoose = require(`mongoose`);

const example = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    test: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    versionKey: false // __v
})



module.exports = mongoose.model('document', example)