const sentence = () => {
    const word1s = ["before", "while", "after"];
    const word2s= ["before", "and", "after"];
    let phrases = [
        [1, [" accelerates", " accelerating"], " at 1 m/s/s", "acceleration"],
        [1, [" moves", " moving"],  " 2 m forwards", "displacement"],
        [1, [" moves", " moving"], " for 3 s", "duration"],
        [0, [" starts", " starting"], " backwards at 4 m/s", "initial velocity"],
        [2, [" reaches", " reaching"], " 5 m/s backwards", "final velocity"]
    ];
    for (let i = phrases.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [phrases[i], phrases[j]] = [phrases[j], phrases[i]];
    }
    let word1 = phrases[0][0] < phrases[1][0] ? " before" : phrases[0][0] > phrases[1][0] ? " after" : " while";
    let word2 = Math.sign(phrases[2][0] - phrases[0][0]) === Math.sign(phrases[1][0] - phrases[0][0]) ? " and" :
                phrases[2][0] === phrases[0][0] ? " while" :
                phrases[2][0] > phrases[1][0] ? " before" : " after";
    let sentence = "An object" + phrases[0][1][0] + phrases[0][2] + word1 + phrases[1][1][1] + phrases[1][2] + word2 + phrases[2][1][1] + phrases[2][2] + ".";
    sentence += `  Calculate the ${phrases[3][3]} of this process.`;
    return sentence;
}

for (let i = 0; i < 30; i++) {
  console.log(i, sentence());
  console.log();
};
