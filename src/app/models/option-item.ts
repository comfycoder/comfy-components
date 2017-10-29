export class OptionItem {
    id: string;
    caption: string;
    name: string;
    value: number;
    weight: number;
    helpText: string;

    constructor(
        id: string,
        caption: string,
        name: string,
        value: number,
        weight: number,
        helpText: string
    ) {
        this.id = id;
        this.caption = caption;
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.helpText = helpText;
    }
}
