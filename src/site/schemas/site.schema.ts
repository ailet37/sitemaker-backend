import * as mongoose from 'mongoose';

export const SiteSchema = new mongoose.Schema({
    type: String,
    color: String,
})