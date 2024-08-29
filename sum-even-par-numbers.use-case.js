
/*
La función realiza una sumatoria de todos los números pares que se encuentren, deseablemente, dentro de un array de números. 
Se propone utilizar la funcion reduce, cambiar el nombre de la funcion a una mas descriptiva y el nombre de la variable también. 
*/
class SumEvenParNumbersUseCase{
    static async execute(numericArray) {
        return numericArray.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
    }
}



(async () => {
    try{
        console.log(await SumEvenParNumbersUseCase.execute([1,2,3,4,5,6,7,8,9,10])); 
    } catch (error) {
        console.error(error.message);
    }
})();