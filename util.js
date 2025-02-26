// Minimum number function
const minNumber = (num1, num2) => {
  // return Math.min(num1, num2)

  if (isNaN(num1) || isNaN(num2)) {
    return {
      status: 400,
      data: {
        error: `Both should be numbers`,
      },
    };
  } else {
    return {
      status: 200,
      data: {
        Max: Math.min(num1, num2),
      },
    };
  }
};

// maximum number function
const maxNumber = (num1, num2) => {
  // return Math.max(num1, num2)
  if (isNaN(num1) || isNaN(num2)) {
    return {
      status: 400,
      data: {
        error: `Both should be numbers`,
      },
    };
  } else {
    return {
      status: 200,
      data: {
        Max: Math.max(num1, num2),
      },
    };
  }
};

// average function
const average = (num) => {
  if (num.some(isNaN)) {
    return {
      status: 400,
      data: {
        error: `invalid input enter numbers`,
      },
    };
  } else {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }

    return {
      status: 200,
      data: {
        average: sum / num.length,
      },
    };
  }
};

// ascending function

const ascendingOrder = (num) => {
  if (num.some(isNaN)) {
    return {
      status: 400,
      data: {
        error: `Invalid input enter numbers`,
      },
    };
  } else {
    let a = num.length;

    for (let i = 0; i < a - 1; i++) {
      for (let j = 0; j < a - i - 1; j++) {
        if (num[j] > num[j + 1]) {
          let temp = num[j];
          num[j] = num[j + 1];
          num[j + 1] = temp;
        }
      }
    }

    return {
      status: 200,
      data: {
        ascending: num,
      },
    };
  }
};

// descending function
const descendingOrder = (num) => {
  if (num.some(isNaN)) {
    return {
      status: 400,
      data: {
        error: `Invalid input enter numbers`,
      },
    };
  } else {
    let a = num.length;

    for (let i = 0; i < a - 1; i++) {
      for (let j = 0; j < a - i - 1; j++) {
        if (num[j] < num[j + 1]) {
          let temp = num[j];
          num[j] = num[j + 1];
          num[j + 1] = temp;
        }
      }
    }

    return {
      status: 200,
      data: {
        desending: num,
      },
    };
  }
};

// minNumber(num1, num2)

module.exports = {
  minNumber,
  maxNumber,
  average,
  ascendingOrder,
  descendingOrder,
};
