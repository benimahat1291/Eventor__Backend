const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    confId: { type: String, required: true },
    endTime: { type: String, required: false },
    sessDesc: { type: String, required: false },
    sessName: { type: String, required: false },
    sessPresenter: { type: String, required: false },
    sessionDate: { type: String, required: false },
    startTime: { type: String, required: false },

})

const Session = mongoose.model("Session", SessionSchema)

module.exports = Session;

