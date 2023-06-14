const { Schema, model } = require('mongoose');
const  commentSchema  = require('./comments')

const memorySchema = new Schema (
    {
        
        
        userId: {
            type: String,


        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        img: {
        type: String,
        },
        memory: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
            get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),

        },
        likes: {
            type: Number,

        },
        tag: {
            type: String,

        },

        comments: [commentSchema]

    }
);

const Memory = model('memory', memorySchema);

module.exports = Memory;
