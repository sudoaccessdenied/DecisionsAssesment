export interface AddProductForm<T>
{
    defaultValue:T;
    caption:string;
    type:string;
    mandatory:boolean;
    validationMessage:string;
    options?: {key: string, value: string}[];   
}