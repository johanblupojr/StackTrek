function countParticipantsLeft(participants, rounds) {
  let remainingParticipants = participants;
  
  for (let i = 0; i < rounds.length; i++) {
    const groupSize = rounds[i];
    remainingParticipants = (groupSize * Math.floor(remainingParticipants / groupSize));
  }
  
  return remainingParticipants;
};

const participants = 15;
const rounds = [4, 2, 5, 3, 2];
const result = countParticipantsLeft(participants, rounds);
console.log(result); // Output: 8