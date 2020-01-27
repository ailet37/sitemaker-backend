import { Document } from 'mongoose';

export interface Block extends Document {
    readonly type: string;
    readonly color: string;
}