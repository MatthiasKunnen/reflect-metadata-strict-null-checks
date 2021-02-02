import 'reflect-metadata';

export function logType() {
    return (target: any, propertyKey: string) => {
        console.log(propertyKey, Reflect.getMetadata('design:type', target, propertyKey));
    };
}

export class NullableArray {

    @logType()
    array: Array<string>;

    @logType()
    arrayNullable?: Array<string> | null;
}
