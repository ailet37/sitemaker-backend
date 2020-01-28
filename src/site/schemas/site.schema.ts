import * as mongoose from 'mongoose';

export const SiteSchema = new mongoose.Schema({
    title: String,
    type: String,
    color: String,
})