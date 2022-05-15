import { JSONValue } from '../../../types'

export class Article {
    id: number;
    user_id: number;
    category_id: number;
    title: string;
    content: string;
    editorState?: JSONValue;
    thumbnail_image?: string;
    createdAt: Date;
    updatedAt: Date;
}

