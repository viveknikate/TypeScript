var someLegacyVar;
someLegacyVar = 123;
someLegacyVar = " hello   ";
if (typeof someLegacyVar === 'string') {
    console.log(someLegacyVar.trim());
}
someLegacyVar = " hello   ";
someLegacyVar = 123;
if (typeof someLegacyVar === 'number') {
    console.log(someLegacyVar.toFixed(2));
}
