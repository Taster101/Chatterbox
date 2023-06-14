const { Schema, model } = require('mongoose');
const  commentSchema  = require('./Comments')


const memorySchema = new Schema (
    { 
        userId: {
            type: String,

        },
        title: {
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

        Comments: [commentSchema]

    }
);

const Memory = model('Memory', memorySchema);

module.exports = Memory;