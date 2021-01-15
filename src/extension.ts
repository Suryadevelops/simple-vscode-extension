import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vstodo" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand("vstodo.helloWorld", () => {
			vscode.window.showInformationMessage("Hello World from VStodo!");
		})
	);

	vscode.commands.registerCommand("vstodo.askQuestion", async () => {
		const answer = await vscode.window.showInformationMessage(
			"How was are your day?",
			"good",
			"bad"
		);
		if (answer === "bad") {
			vscode.window.showInformationMessage("Oh sorry to hear that");
		} else {
			vscode.window.showInformationMessage("Nice to hear that")
		}
	});
}

export function deactivate() { }
