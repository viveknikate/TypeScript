type padding1 = 'small' | 'medium' | 'large' | string;

// its not giving auto complete
const padd1: padding1 = 'small';
const padd2: padding1 = '80px';

// to give autoc complete while typing
type padding2 = 'small' | 'medium' | 'large' | (string & {});
const padd3: padding2 = 'large';
const padd4: padding2 = 'medium';