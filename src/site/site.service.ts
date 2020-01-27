import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Block } from './interfaces/block.interface';
import { CreateBlockDTO } from './dto/create-block.dto';

@Injectable()
export class SiteService {

    constructor(@InjectModel('Block') private readonly blockModel: Model<Block>) { }

    async getBlocks(): Promise<Block[]> {
        const blocks = await this.blockModel.find().exec();
        return blocks;
    }

    async getBlock(blockID): Promise<Block> {
        const block = await this.blockModel
            .findById(blockID)
            .exec();
        return block;
    }

    async addBlock(CreateBlockDTO: CreateBlockDTO): Promise<Block> {
        const newBlock = await this.blockModel(CreateBlockDTO);
        return newBlock.save();
    }

    async editBlock(blockID, CreateBlockDTO: CreateBlockDTO): Promise<Block> {
        const editedBlock = await this.blockModel
            .findByIdAndUpdate(blockID, CreateBlockDTO, { new: true });
        return editedBlock;
    }

    async deleteBlock(blockID): Promise<any> {
        const deletedBlock = await this.blockModel
            .findByIdAndRemove(blockID);
        return deletedBlock;
    }

}