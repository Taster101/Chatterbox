const { Schema, model } = require('mongoose');

const memorySchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        memory: {
            type: String,
            required: true,
            trim: true
        },
    }
);

const Memory = model('Memory', memorySchema);

module.exports = Memory;