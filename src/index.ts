import realness from "./test";

interface Box {
	created: number;
	box: TextBox;
}
declare const boxes: Box[];
declare const createText: (text: string, noPush: boolean) => TextBox;
interface Command {
	name: string;
	description: string;
	aliases: string[];
	func: Callback;
	arguments: string[];
}
declare const addCommand: (command: Command) => void;
declare const addProvider: (provider: string, callback: Callback) => void;
declare const filterRichText: (text: string) => string;
declare const runCommand: (message: string) => void;

addCommand({
	name: "module-dev",
	description: "Testing module",
	aliases: ["test_module"],
	func: () => {
		createText("Hello!!!", false);
		createText(`Import: ${realness}`, false);
	},
	arguments: [],
});

export {};
