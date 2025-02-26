const minNumber = (num1, num2) => {
    // return Math.min(num1, num2)

    if (isNaN(num1) || isNaN(num2)) {
        return {
            status : 400,
            data : {
                error: `Both should be numbers`
            }
        }
    } else {
        return {
            status : 200,
            data : {
                Max: Math.min(num1, num2)
            }
        }
    }
    
}

const maxNumber = (num1, num2) => {
    // return Math.max(num1, num2)
    if (isNaN(num1) || isNaN(num2)) {
        return {
            status : 400,
            data : {
                error: `Both should be numbers`
            }
        }
    } else {
        return {
            status : 200,
            data : {
                Max: Math.max(num1, num2)
            }
        }
    }
}

const average = (num) => {
    let sum = 0
    for (let i = 0 ; i < num.length; i++ ) {
        sum += num[i]
    }

    return sum / num.length
}

// minNumber(num1, num2)

module.exports = {minNumber, maxNumber, average}