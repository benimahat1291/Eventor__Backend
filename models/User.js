const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    email_verified: {type: Boolean, required: true},
    family_name: { type: String, required: false },
    given_name: { type: String, required: false },
    locale: { type: String, required: false },
    name: { type: String, required: false },
    nickname: { type: String, required: false },
    picture: { type: String, required: false },
    sub: { type: String, required: false },
    updated_at: { type: String, required: false },

})


const User = mongoose.model("User", userSchema)

module.exports = User;

