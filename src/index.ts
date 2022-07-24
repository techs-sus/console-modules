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
	name: "kill",
	description: "Kill some players",
	aliases: ["die"],
	func: (players: Player[]) => {
		players.forEach((player) => {
			const character = player.Character;
			if (character && character.IsA("Model")) {
				character.BreakJoints();
			}
		});
	},
	arguments: ["Players"],
});

export {};
