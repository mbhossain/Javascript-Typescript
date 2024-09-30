const outputDivElement: HTMLElement | null = document.getElementById('output');
if (outputDivElement) {
    console.log = (message: any): void => {
        if (typeof message === 'object') {
            outputDivElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
        } else {
            outputDivElement.innerHTML += message + '\n';
        }
    };
}

interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

export const getDisplayName = <TItem extends Animal | Human>(
    item: TItem
): TItem extends Human ? { humanName: string } : { animalName: string } => {
    if ('name' in item) {
        return {
            animalName: item.name
        } as TItem extends Human ? { humanName: string } : { animalName: string };
    } else {
        return {
            humanName: item.firstName + ' ' + item.lastName
        } as TItem extends Human ? { humanName: string } : { animalName: string };
    }
};



const result = getDisplayName({ name: 'Cat' });
const result2 = getDisplayName({ firstName: 'Billal', lastName: 'Hossain' });
console.log(result);
console.log(result2);