
/*
Recibe como parámetros tres variables idealmente de tipo numérico, y retorna el mayor. Compara caso por caso para determinar cuál es el mayor de los tres.
Su complejidad es O(1) ya que no importa el tamaño de los números, siempre se comparan tres números.
La mejora que se propone, es utilizar el método Math.max() para determinar el mayor de los tres números, ya que este método recibe un número indeterminado de parámetros y retorna el mayor de todos ellos.

*/
class GetMaxValueUseCase{
    static async execute(numericArray) {
        return Math.max(...numericArray);
    }
}


(async () => {
    try{
        console.log( await GetMaxValueUseCase.execute([1, 2, 3,999])); 
    } catch (error) {
        console.error(error.message);
    }
})();