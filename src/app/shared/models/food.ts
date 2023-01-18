export class Foods{
    id!: number;
    price!: number;
    name!: string;
    favorite: boolean = false;
    origins!: string[];
    star:number=0;
    tags?: string[];
    imageUrl!: string;
    cookTime!: string;
}