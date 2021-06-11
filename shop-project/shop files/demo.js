let char = 'some text@';

for(let i = 0; i<char.length;i++){
    console.log(char.indexOf(`@ ${i}`));
}

