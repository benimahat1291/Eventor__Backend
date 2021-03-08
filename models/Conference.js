const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conferenceSchema = new Schema({
    EndDate: { type: String, required: false },
    StartDate: {type: String, required: false},
    organization: {type: String, required: false},
    location: {type: String, required: false},
    confType: {type: String, required: false},
    title: {type: String, required: false},
    description: {type: String, required: false},
    email: {type: String, required: false},
    attendingCount: {type: Number},
    registeredUsers:[{type: String}]
    
})

const Conference = mongoose.model("Conference", conferenceSchema)

module.exports = Conference;