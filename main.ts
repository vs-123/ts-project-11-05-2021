/*
* PROJECT: ts-project-11-05-2021
* DESCRIPTION: Given a string, remove all of its vowels regardless of the case.
* AUTHOR: Vahin Sharma
*/

function removeVowels(input: string): string {
  const vowels: string[] = "aeiouAEIOU".split("");
  return input.split("").filter(character => vowels.indexOf(character) == -1).join("");
}

const tests = {
  "hello world": "hll wrld",
  "testing": "tstng",
  "yo wassup how ya doing": "y wssp hw y dng",
  
  "Shingle color was not something the couple had ever talked about.": "Shngl clr ws nt smthng th cpl hd vr tlkd bt.",
  "It was the first time he had ever seen someone cook dinner on an elephant.": "t ws th frst tm h hd vr sn smn ck dnnr n n lphnt.",
  "Watching the geriatric men’s softball team brought back memories of 3 yr olds playing t-ball.": "Wtchng th grtrc mn’s sftbll tm brght bck mmrs f 3 yr lds plyng t-bll.",
}

let marks: number = 0;

for (const question in tests) {
  const answer = removeVowels(question);
  
  console.log(`Input: ${question}`)
  
  if (answer == tests[question]) {
    console.log("Passed");
    ++marks;
  } else {
    console.log(`Expected '${tests[question]}', instead got '${answer}'`);
  }
  
  console.log()
}

console.log(`Score: ${marks} out of ${Object.keys(tests).length}`);
