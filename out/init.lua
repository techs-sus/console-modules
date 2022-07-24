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
return nil
