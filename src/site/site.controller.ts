import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { SiteService } from './site.service';
import { CreateBlockDTO } from './dto/create-block.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';


@Controller('site')
export class SiteController {

    constructor(private SiteService: SiteService) { }

    @Get('blocks')
    async getBlocks(@Res() res) {
        const blocks = await this.SiteService.getBlocks();
        return res.status(HttpStatus.OK).json(blocks);
    }

    @Get('blocks/:blockID')
    async getBlock(@Res() res, @Param('blockID', new ValidateObjectId()) blockID) {
        const block = await this.SiteService.getBlock(blockID);
        if (!block) throw new NotFoundException('Block does not exist!');
        return res.status(HttpStatus.OK).json(block);
    }

    @Post('/block')
    async addBlock(@Res() res, @Body() CreateBlockDTO: CreateBlockDTO) {
        const newBlock = await this.SiteService.addBlock(CreateBlockDTO);
        return res.status(HttpStatus.OK).json(newBlock);
    }

    @Put('/blocks/:blockID')
    async editBlock(@Res() res, @Param('blockID', new ValidateObjectId()) blockID,
        @Body() createBlockDTO: CreateBlockDTO
    ) {
        const editedBlock = await this.SiteService.editBlock(blockID, createBlockDTO);
        if (!editedBlock) throw new NotFoundException('Block does not exist!');
        return res.status(HttpStatus.OK).json(editedBlock);
    }

    @Delete('/blocks/:blockID')
    async deleteBlock(@Res() res, @Param('blockID', new ValidateObjectId()) blockID) {
        const deletedBlock = await this.SiteService.deleteBlock(blockID);
        if (!deletedBlock) throw new NotFoundException('Block does not exist!');
        const blocks = await this.SiteService.getBlocks();
        return res.status(HttpStatus.OK).json(blocks);
    }
}