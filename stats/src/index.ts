import { MatchReader } from './MatchReader';
import {CsvFileReader} from "./CsvFileReader";
import { MatchResult } from './MatchResult';


//console.log(reader.data);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`man united win ${manUnitedWins} games`);
