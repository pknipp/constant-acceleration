const sentence = () => {

  let vi, vf;
  let [aMax, tMax, vMax] = [9, 9, 9];

  let a = (1 + Math.floor(aMax * Math.random())) * (Math.random() < 0.1 ? -1 : 1);
  let t = 1 + Math.floor(tMax * Math.random());

  // case = 0 (one v = 0), 1 (x = 0), or 2 (generic)
  let Case = Math.floor(3 * Math.random());

  if (!Case) {
    [vi, vf] = Math.random() < 0.5 ? [0, a * t] : [-a * t, 0];
  } else {
    vi = (1 + Math.floor(vMax * Math.random())) * (Math.random() < 0.5 ? -1 : 1);
    vf = Case === 1 ? -vi : vi + a * t;
  }
  let x = (2 * vi + a * t) * t / 2;

  let vfWords = Math.abs(vf) + " m/s" + (vf > 0 ? " forwards" : " backwards");
  let phrases = [
      [1, [" accelerates", " accelerating"], ` at ${a} m/s/s`, "acceleration", a + ' m/s/s'],
      [1, [" moves", " moving"],  ` ${!x ? " to its initial position" : (Math.abs(x) + " m" + ((x > 0) ? " forwards" : " backwards"))}`, "displacement", x + ' m'],
      [1, [" moves", " moving"], ` for ${t} s`, "duration", t + ' s'],
      [0, [" starts", " starting"], !vi ? " from rest" : ((vi > 0 ? " forwards" : " backwards") + " at " + Math.abs(vi) + " m/s"), "initial velocity", vi + ' m/s'],
      [2, [!vf ? " stops" : " reaches " + vfWords, !vf ? " stopping" : " reaching " + vfWords], "", "final velocity", vf + ' m/s']
  ];
  for (let i = phrases.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [phrases[i], phrases[j]] = [phrases[j], phrases[i]];
  }
  let word1 = phrases[0][0] < phrases[1][0] ? " before" : phrases[0][0] > phrases[1][0] ? " after" : " while";
  let word2 = Math.sign(phrases[2][0] - phrases[0][0]) === Math.sign(phrases[1][0] - phrases[0][0]) ? " and" :
              phrases[2][0] === phrases[0][0] ? " while" :
              phrases[2][0] > phrases[1][0] ? " before" : " after";
  let sentence = "An object" + phrases[0][1][0] + phrases[0][2] + word1 + phrases[1][1][1] + phrases[1][2] + word2+ phrases[2][1][1] + phrases[2][2] + ".";
  sentence += `  Calculate the ${phrases[3][3]} of this process. Answer: ${phrases[3][4]}.  The "missing quantity" for this problem is the ${phrases[4][3]}, which equals ${phrases[4][4]}.`;
  return sentence;
}

// console.log(sentence());
