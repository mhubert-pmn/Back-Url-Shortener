const mysql = require('mysql');
const { ObjectId } = mysql.Schema;
const userSchema = new mysql.Schema(
    {
        idUser:{
            type: Number,
            required: true,
            maxlength: 50,
            unique: true
        },

        pseudo:{
            type: String,
            required: true,
            maxlength: 60
        },

        email:{
            type: String,
            required: true
        },

        password:{
            type: String,
            required: true
        }

    })

module.exports = mysql.model('User', userSchema);