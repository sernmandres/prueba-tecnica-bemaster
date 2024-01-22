document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn");
    const numberInput = document.getElementById("number");
    const result = document.getElementById("resultado")
    btn.addEventListener("click", function() {
        const number = parseInt(numberInput.value);
            const getResult = allOddNumbersOf(number);

            result.textContent = "Números Impares: " + getResult.join(', ');
    });

    function allOddNumbersOf(number) {
        console.log("click");
        let allNumbers = [];
        for(let i = 1; i <= number; i++) {  
            if (i % 2 !== 0) {
                allNumbers.push(i);
            }  
        }
       return allNumbers
    }
});


