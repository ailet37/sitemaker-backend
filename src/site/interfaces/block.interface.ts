import { Document } from 'mongoose';

export interface Block extends Document {
    readonly title: string;
    readonly type: string;
    readonly color: string;
}