import { Chapter } from "./chapter";

export class Book {
    id?: number;
    title: string;
    type: string[];
    chapter?: Chapter[];
    user_id?: number;
}