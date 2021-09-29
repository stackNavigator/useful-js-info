const romanToInt = (digits) => {
    const weakNumbers = {
        'I': 1,
        'X': 10,
        'C': 100,
    };
    const strongNumbers = {
        'V': 5,
        'L': 50,
        'D': 500,
        'M': 1000,
    };
    
    let number = 0;
    for (let i = 0; i < digits.length; i++) {
        if (!digits[i + 1]) {
            number += strongNumbers[digits[i]] || weakNumbers[digits[i]];
            break;
        }

        if (strongNumbers[digits[i]]) {
            number += strongNumbers[digits[i]];
            continue;
        }

        number += strongNumbers[digits[i+1]]
            ? strongNumbers[digits[i+1]] - weakNumbers[digits[i]]
            : weakNumbers[digits[i]] + weakNumbers[digits[i]];
        
        i++;
    }

    return number;
}

const testSuites = [
    'III',
    'IV',
    'IX',
    'XXIX',
    'LVIII',
    'X',
    'MCMXCIV'
];

testSuites.forEach(suite => console.log(romanToInt(suite)));
