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

addCommand({
	name: "tp",
	description: "tp some players to a player",
	aliases: [],
	func: (players: Player[], player: Player) => {
		const cframe =
			player.Character &&
			player.Character.FindFirstChild("HumanoidRootPart") &&
			(player.Character.FindFirstChild("HumanoidRootPart") as BasePart)!.CFrame;
		if (!cframe) {
			return createText("Failed finding target player cframe", false);
		}
		players.forEach((player) => {
			const character = player.Character;
			if (character && character.IsA("Model")) {
				const hrp = character.FindFirstChild("HumanoidRootPart");
				if (hrp) {
					(hrp as BasePart).CFrame = cframe;
				}
			}
		});
	},
	arguments: ["Players", "Player"],
});

export {};
