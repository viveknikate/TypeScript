let example: string | null = 'hello';

if(example != null){
    let example1: string = example.toUpperCase();
    ['a', 'b', 'c'].forEach((item) => {
        let example2: string = item + example.toUpperCase();            // to avoid this
        console.log(example2);
    });

    ['a', 'b', 'c'].forEach((item) => {
        let example2: string = item + example1.toUpperCase();            // store variable in local scope example1
        console.log(example2);
    })
}