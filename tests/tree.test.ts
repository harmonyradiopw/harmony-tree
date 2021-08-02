import { Child, Tree } from "../src/index";
import { redBright, blueBright, greenBright, magentaBright } from "chalk";

test("Tree with Child with Array", () => {
    const tree = new Tree("Test Tree")
        .addChild(
            [
                "test child"
            ]
        )

    tree.send();
    expect(tree.treeToString()).toContain("Test Tree");
});

test("Tree with Child with object", () => {
    const tree = new Tree(
        "Test Tree 2"
    );
    const child = new Child(
        "Test Child 2"
    );
    tree.addChild([child]);

    tree.send();
    expect(tree.treeToString()).toContain("Test Child");
});

test("Tree with Child with color(s)", () => {
    const tree = new Tree(
        magentaBright("Test Tree 3")
    );
    const child = new Child(
        greenBright("Test Child 3")
    );
    tree.addChild([child]);

    tree.send();
    expect(tree.treeToString()).toContain("Test Child");
});

test("Tree with Child in Child in Child with color(s)", () => {
    const tree = new Tree(
        magentaBright("Test Tree 3")
    );
    const child = new Child(
        greenBright("Test Child 3")
    );
    const child2 = new Child(
        blueBright("Child number 2")
    )
    child.addChild([child2]);
    tree.addChild([child]);

    tree.send();
    expect(tree.treeToString()).toContain("Test Child");
});