export declare class Tree {
    /**
     * Name of the Tree Class
     */
    name: string;

    /**
      * Children of the Tree
      */
    children: Child[];

    /**
     * Initialize a new Tree.
     * @param name Name of the Tree Class
     */
    constructor(name: string);

    /**
     * Add a child to the tree
     * @param children 
     * @returns this
     */
    addChild(children: Child[] | string []): this;

    /**
     * Convert Tree to string
     * @returns Tree String
     */
    treeToString(): string;

    /**
     * Log the tree to the console
     * @returns void
     */
    log(): void;
}

export declare class Child {
    /**
     * Name of the Children Class
     */
    name: string;

    /**
      * Children of the Child
      */
    children: Child[];

    /**
     * Initialize a new Child in the Tree.
     * @param name Name of the Children Class
     */
    constructor(name: string);

    /**
     * Add a child to the branch
     * @param children 
     * @returns this
     */
    addChild(children: Child[] | string []): this;
}