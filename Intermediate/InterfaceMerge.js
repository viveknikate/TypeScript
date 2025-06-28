"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleRequest(req) {
    console.log(req.body);
    console.log(req.json);
}
handleRequest({ body: 1, json: 2 });
