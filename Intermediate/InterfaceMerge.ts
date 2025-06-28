export interface Request {
  body: any;
}
export interface Request {
  json: any;
}

function handleRequest(req: Request) {
  console.log(req.body);
  console.log(req.json);
}

handleRequest({ body: 1, json: 2 });
