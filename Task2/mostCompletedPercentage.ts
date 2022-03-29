import { PlayersData } from './PlayersData.dto';

const isWhatPercentOf = (numA, numB) => {
  return (numA / numB) * 100;
};

export const mostCompletedPercentage = (data: PlayersData[]) => {
  const filteredPassesByReceiver = Object.values(
    data.reduce((acc, pass) => {
      if (!acc[pass.receiver]) {
        acc[pass.receiver] = [pass];
      } else {
        acc[pass.receiver].push(pass);
      }
      return acc;
    }, {})
  );

  const result = filteredPassesByReceiver.reduce((acc, passes) => {
    const completed = passes.filter((e) => e.result === 'complete');
    const percent = Number(
      isWhatPercentOf(completed.length, passes.length).toFixed(2)
    );

    if (acc['value'] && acc['value'] < percent) {
      acc['value'] = percent;
      acc['player'] = completed[0].receiver;
    }

    if (!acc['value']) {
      acc['value'] = percent;
      acc['player'] = completed[0].receiver;
    }

    return acc;
  }, {});

  result['value'] = result['value'] + '%';

  return result;
};
