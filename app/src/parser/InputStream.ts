export default class InputStream {

    val: string;
    pos: number;

    constructor(input: string) {
        this.val = input;
        this.pos = 0;
    }

    read() : string {
        let c = this.val[this.pos];
        this.pos += 1;
        return c || null;
    }

    peek() : string {
        return this.val[this.pos] || null;
    }
}
