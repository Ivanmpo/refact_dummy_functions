

/*
se propone crear el módulo use-case para encapsular el caso de uso y poder utilizarlo en cualquier parte de la aplicación.
Además, se agrega el type number[] para definir el tipo de dato que se espera recibir.

*/

export class SumEvenParNumbersTsUseCase {
    static async execute(numericArray: number[]): Promise<number> {
        return numericArray.reduce((sum: number, num: number) => num % 2 === 0 ? sum + num : sum, 0);
    }
}

