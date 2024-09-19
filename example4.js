function appendToResult(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}

function deleteLastCharacter() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = '오류';
    }
}

// 키보드 입력 처리
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // 숫자와 연산자 입력 처리
    if ('0123456789+-*/'.includes(key)) {
        appendToResult(key);
    }

    // Enter 키로 계산
    if (key === 'Enter') {
        calculateResult();
    }

    // C 키로 초기화
    if (key.toUpperCase() === 'C') {
        clearResult();
    }


    // Backspace 키로 마지막 문자 삭제
    if (key === 'Backspace') {
        const resultField = document.getElementById('result');
        resultField.value = resultField.value.slice(0, -1);
    }
});
