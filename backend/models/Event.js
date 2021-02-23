const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    title:{
        type:String,
        // required:true
    },
    description:{
        type:String,
        // required:true,
    },
    category:{
        type:String,
        enum: ['music', 'choreography','art','craft'],
        default: 'uncategorized'
    },
    prodImage:{
        type:String
    },


    date:{
        type:Date,
        default:Date.now
    }
},
{
    timestamps: true
}

)

module.exports = mongoose.model('event', EventSchema);