import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiOperation({
    summary: '새로운 글 등록',
    description: '새로운 글을 등록합니다.'
  })
  createArticles(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.createArticles(createArticleDto);
  }

  @Get('/:id?')
  @ApiOperation({
    summary: '작성글 불러오기',
    description: '작성글 목록 전체 혹은 일부, 키워드에 따른 필터링 결과를 불러옵니다.'
  })
  @ApiParam({
    name: 'id',
    description: '게시글 고유 번호',
    required: false,
    example: 1
  })
  @ApiQuery({
    name: 'keyword',
    description: '대, 소문자 구분 없는 검색 키워드',
    required: false,
    example: 'MySQL'
  })
  getArticles(@Param('id') id?: string, @Query('keyword') keyword?: string): Promise<Article[]> {
    return this.articlesService.getArticles(+id, keyword)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
