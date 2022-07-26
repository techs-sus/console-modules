-- Compiled with roblox-ts v1.3.3
addCommand({
	name = "kill",
	description = "Kill some players",
	aliases = { "die" },
	func = function(players)
		local _arg0 = function(player)
			local character = player.Character
			if character and character:IsA("Model") then
				character:BreakJoints()
			end
		end
		for _k, _v in ipairs(players) do
			_arg0(_v, _k - 1, players)
		end
	end,
	arguments = { "Players" },
})
addCommand({
	name = "tp",
	description = "tp some players to a player",
	aliases = {},
	func = function(players, to_player)
		local cframe = to_player.Character and (to_player.Character:FindFirstChild("HumanoidRootPart") and (to_player.Character:FindFirstChild("HumanoidRootPart")).CFrame)
		if not cframe then
			return createText("Failed finding target player cframe", false)
		end
		local _arg0 = function(player)
			createText("Attempting to teleport " .. (player.Name .. (" to " .. to_player.Name)), false)
			local character = player.Character
			if character then
				local hrp = character:FindFirstChild("HumanoidRootPart")
				if hrp then
					hrp.CFrame = cframe
				end
			end
		end
		for _k, _v in ipairs(players) do
			_arg0(_v, _k - 1, players)
		end
	end,
	arguments = { "Players", "Player" },
})
return nil
