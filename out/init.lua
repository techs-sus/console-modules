-- Compiled with roblox-ts v1.3.3
addCommand({
	name = "kill",
	description = "Kill a player",
	aliases = { "die" },
	func = function(player)
		local character = player.Character
		if character and character:IsA("Model") then
			character:BreakJoints()
		end
	end,
	arguments = { "Player" },
})
return nil
