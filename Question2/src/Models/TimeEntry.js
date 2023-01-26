const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId


const WorksnapsTimeEntry = new mongoose.Schema({
    student: {
    type:objectId,
    ref: 'student'
    },
    timeEntries: {
        type:Date,
        required:true
     }
    });

    module.exports= mongoose.model("time",WorksnapsTimeEntry)
    