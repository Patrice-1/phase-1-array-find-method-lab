// code your solution here
function superbowlWin(array) {
  let winningYear = array.find((entry) => entry.result === "W");
  return winningYear ? winningYear.year : undefined;
}