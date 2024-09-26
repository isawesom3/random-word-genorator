let sounds = ["bl", "ue", "r", "ed", "or", "an", "ge", "yel", "low", "gr", "een", "pur", "ple"];
while(true)
{
let newSound = prompt("Type in a sound or leave blank to continue")
if (!newSound)
{
break;
}
sounds.push(newSound)
}
let numSounds = Math.floor(Math.random() * 5) + 2;
let word = "";

for (let i = 0; i < numSounds; i++)
{
let index = Math.floor(Math.random() * sounds.length);
let sound = sounds[index];
word += sound;
sounds.splice(index, 1);
}
alert(word);
//bruh
/*bruh*/
