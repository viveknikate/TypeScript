const center = {
    x: 10,
    y: 20,
    z: 30,
};

type Point = typeof center;

const point1: Point = {
    x: 1,
    y: 2,
    z: 3,
};

const response = {
    "name" : "Vivek",
    "email" : "vivek@me.com",
    "phone" : "1234567890",
    "age" : 20,
}

type responseType = typeof response;

function handle(res: responseType){
    console.log(res.name, " ", res.email);
}