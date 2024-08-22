const personFactory = function (name, indicator) {
  return {
    name,
    indicator,
  };
};

const player1 = personFactory('player1', 'X');
