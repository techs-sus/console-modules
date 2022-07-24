-- Compiled with roblox-ts v1.3.3
local TS = _G[script]
local realness = TS.import(script, script, "test").default
addCommand({
	name = "module-dev",
	description = "Testing module",
	aliases = { "test_module" },
	func = function()
		createText("Hello!!!", false)
		createText("Import: " .. realness, false)
	end,
	arguments = {},
})
return nil
