import { PlayersData } from './PlayersData.dto';

export const longestDistancePass = (data: PlayersData[]) => {
  const filtered = data.filter((player) => player.result === 'complete');
  const maxValueOfY = Math.max(...filtered.map((player) => player.distance), 0);
  return filtered.reduce((acc, player) => {
    if (player.distance === maxValueOfY) {
      acc['player'] = player.receiver;
      acc['value'] = player.distance;
    }
    return acc;
  }, {});
};
