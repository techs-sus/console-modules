/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />
export interface Box {
	created: number;
	box: TextBox;
}
declare const boxes: Box[];
declare const createText: (text: string, noPush: boolean) => TextBox;
export interface Command {
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
export {};
