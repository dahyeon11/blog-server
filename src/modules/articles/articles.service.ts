import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '../prisma/prisma.service';
import { article, Prisma } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return `This action returns all articles`;
  }

  async getArticles(id?: number, keyword?: string): Promise<article[]> {
    let options = {};
    if(id) {
      Object.assign(options, {
        id: id
      });
    };
    if(keyword) {
      Object.assign(options, {
        title: {
          contains: keyword
        }
      });
    };
    const article = await this.prisma.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: options
    })
    return article
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
