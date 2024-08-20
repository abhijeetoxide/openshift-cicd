"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('Hello from OpenShift with TypeScript!');
});
const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
exports.server = server;
