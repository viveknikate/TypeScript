type CSSValue = 
    | number
    | string
    | `${number}px`
    | `${number}em`
    | `${number}rem;`


// create type combination of size & color
// size = small or medium or large
// color = primary or secondary

type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';

type CombineType = `${Size}-${Color}`;

function Check(input: CombineType){
    console.log(input);
}

Check('small-secondary')
Check('small-primary')
Check('medium-primary');
// Check('werelwj')            // ERRor