const mongoose = require('mongoose')

var d = new Date().setHours(24,0,0,0);
// const publishedEventTime = d.setHours(0,0,0,0);
// const unpublishedEventTime = d.setHours(24,0,0,0);

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
    },

    disabled:{
        type:Boolean,
        default:false
    },

    publishedAt:{
        type:Date,
        default: d
    }
},
{
    timestamps: true
}

)

module.exports = mongoose.model('event', EventSchema);