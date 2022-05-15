import { JSONValue } from '../../../types'
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional,  IsString, IsObject } from "class-validator";

export class CreateArticleDto {
    @IsNumber()
    user_id: number;

    @IsNumber()
    category_id: number;

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsObject()
    @IsOptional()
    raw_contentstate: JSONValue;

    @IsString()
    @IsOptional()
    thumbnail_image?: string;

    @IsString()
    @IsOptional()
    image?: string;
}
