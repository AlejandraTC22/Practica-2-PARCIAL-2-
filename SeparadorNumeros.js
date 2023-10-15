export class NumberSeparator 
{
    generateRandomNumbers(count) 
    {
        const numbers = [];
        for (let i = 0; i < count; i++) 
        {
            numbers.push(Math.floor(Math.random() * 100) + 1);
        }
        return numbers;
    }

    separateNumbers(numbers) 
    {
        const even = [];
        const odd = [];
        numbers.forEach((number) => 
        {
            if (number % 2 === 0) 
            {
                even.push(number);
            } 
            
            else 
            {
                odd.push(number);
            }
        });
        return { even, odd };
    }
}



