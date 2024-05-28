export type Categories = Category[];

export interface Category {
    id: number;
    slug: string;
    name: string;
    parent_id: number;
    status: string;
    created_at: any;
    updated_at: any;
    deleted_at: any;
    children: Children[];
}

export interface Children {
    id: number;
    slug: string;
    name: string;
    parent_id: number;
    status: string;
    created_at: any;
    updated_at: any;
    deleted_at: any;
}