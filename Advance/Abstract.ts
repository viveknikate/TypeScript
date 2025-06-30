abstract class CommandLine {
    abstract command(): string;                 // this is just function declaration.
    execute(){
        console.log('executing command', this.command());
    }
}

// we can't create the object of abstract class as it only contains the declaration of function not their actually value
//  we can create the object of class which is extending the abstract class. like below

class git1 extends CommandLine {
    command(): string {
        return 'git1';
    }
}

class git2 extends CommandLine{
    command(): string {
        return "git2";
    }
}

new git1().execute();
new git2().execute();

// can't 
// new CommandLine().execute();