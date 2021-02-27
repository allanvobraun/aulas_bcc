"use strict";
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Kernel_1 = require("src/discordBot/Kernel");
typeorm_1.createConnection().then(function (connection) {
    var dicordBot = Kernel_1["default"].getInstance();
    dicordBot.listen();
})["catch"](function (error) { return console.log(error); });
