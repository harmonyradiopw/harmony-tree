export class Child {
    /**
     * Name of the Children Class
     */
     public name: string;

     /**
      * Children of the Child
      */
     public children: Child[] = [];
 
     /**
      * Initialize a new Child in the Tree.
      * @param name Name of the Children Class
      */
     constructor(name: string){
         this.name = name;
     }
 
     /**
     * Add a child to the tree
     * @param children 
     * @returns this
     */
     addChild(children: Child[] | string[]){
        for(const child of children){
            if(typeof child === "string"){
                this.children.push(new Child(child));
            }else {
                this.children.push(child);
            }
        }
        return this;
     }
}