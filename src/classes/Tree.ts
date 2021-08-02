import { Child } from "./Child";

export class Tree {
    /**
     * Name of the Tree Class
     */
    public name: string;

    /**
      * Children of the Tree
      */
    public children: Child[] = [];

    /**
     * Initialize a new Tree.
     * @param name Name of the Tree Class
     */
    constructor(name: string){
        this.name = name;
    }

    /**
     * Add a child to the tree
     * @param children 
     * @returns this
     */
    addChild(children: Child[] | string[]): this{
        for(const child of children){
            if(typeof child === "string"){
                this.children.push(new Child(child));
            }else {
                this.children.push(child);
            }
        }
        return this;
    }

    private getTreeData(name: string, children: Child[]){
        let out: string[] = [];
        let length = children.length;

        out.push(name);

        if(!length) return out;

        for(let i = 0; i < length; i++){
            const child = children[i];
            const last = i === length - 1;
            let character: string | null = "";

            if(last){
                character = "╰─ ";
            }else {
                character = "├─ ";
            }

            out = out.concat(this.getTreeData(child.name, child.children)?.map(x => {
                const char = character;
                character = null;
                return (
                    (char === null ? last ? this.getDividers("├─ ".length) : "│  " : char) + x
                );
            }));
        }

        return out;
    }

    getDividers(length: number){
        let dividers = "";
        for(let i = 0; i < length; i++){
            dividers += " ";
        }
        return dividers;
    }

    getChildrenToString() {
        return this.getTreeData(`● ${this.name}`, this.children);
    }

    /**
     * Convert Tree to string
     * @returns Tree String
     */
    treeToString(): string{
        return this.getChildrenToString().join("\n");
    }

    /**
     * Log the tree to the console
     * @returns void
     */
    send(): void{
        return console.log(this.treeToString());
    }
}