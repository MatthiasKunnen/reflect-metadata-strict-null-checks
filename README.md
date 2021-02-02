# Reflect metadata with and without `strictNullChecks`
The value of `strictNullChecks` has an effect on the type reflected. Try it out by and running `yarn run start`.

## Example
Given the following class

```TypeScript
export class NullableArray {

    @logType()
    array: Array<string>;

    @logType()
    arrayNullable?: Array<string> | null;
}
```

**`strictNullChecks` enabled:**  
Results in the `array` property being `Array` and `arrayNullable` being `Object`.

**`strictNullChecks` disabled:**  
Results in the `array` property being `Array` and `arrayNullable` being `Array`.
