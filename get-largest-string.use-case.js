
class GetLargestStringUseCase {
    static async execute(stringsArray) {
        const allStrings = stringsArray.every(element => typeof element === 'string');
        if(!allStrings) throw new Error('All elements should be strings');
        if (!Array.isArray(stringsArray) || stringsArray.length === 0) throw new Error('Array should not be empty');
        return stringsArray.reduce((largest, current) => 
            current.length > largest.length ? current : largest
        );
    }

}


(async () => {
    try{
        console.log(await GetLargestStringUseCase.execute(['a', 'ab', 'abc', 'abcde', 'abcde', 'asfasfasf' ])); 
    } catch (error) {
        console.error(error.message);
    }
})();