export const myObject: Record<string, string[]> = {};

if (!myObject.foo) {
    myObject.foo = [];
}

myObject.foo.push('bar');