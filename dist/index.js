"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedCommand = exports.Message = exports.Credentials = exports.NowPlayingInfo = exports.Browser = exports.TVClient = exports.AppleTV = void 0;
exports.scan = scan;
exports.parseCredentials = parseCredentials;
const credentials_1 = require("./lib/credentials");
Object.defineProperty(exports, "Credentials", { enumerable: true, get: function () { return credentials_1.Credentials; } });
const appletv_1 = require("./lib/appletv");
Object.defineProperty(exports, "AppleTV", { enumerable: true, get: function () { return appletv_1.AppleTV; } });
const tvclient_1 = require("./lib/tvclient");
Object.defineProperty(exports, "TVClient", { enumerable: true, get: function () { return tvclient_1.TVClient; } });
const browser_1 = require("./lib/browser");
Object.defineProperty(exports, "Browser", { enumerable: true, get: function () { return browser_1.Browser; } });
const now_playing_info_1 = require("./lib/now-playing-info");
Object.defineProperty(exports, "NowPlayingInfo", { enumerable: true, get: function () { return now_playing_info_1.NowPlayingInfo; } });
const message_1 = require("./lib/message");
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return message_1.Message; } });
const supported_command_1 = require("./lib/supported-command");
Object.defineProperty(exports, "SupportedCommand", { enumerable: true, get: function () { return supported_command_1.SupportedCommand; } });
/**
* A convenience function to scan for AppleTVs on the local network.
* @param uniqueIdentifier  An optional identifier for the AppleTV to scan for. The AppleTV advertises this via Bonjour.
* @param timeout  An optional timeout value (in seconds) to give up the search after.
* @returns A promise that resolves to an array of AppleTV objects. If you provide a `uniqueIdentifier` the array is guaranteed to only contain one object.
*/
function scan(uniqueIdentifier, timeout) {
    let browser = new browser_1.Browser();
    return browser.scan(uniqueIdentifier, timeout);
}
/**
* A convenience function to parse a credentials string into a Credentials object.
* @param text  The credentials string.
* @returns A credentials object.
*/
function parseCredentials(text) {
    return credentials_1.Credentials.parse(text);
}
