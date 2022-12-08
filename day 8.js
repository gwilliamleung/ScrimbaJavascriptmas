/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function validTime(str) {
    const timeParts = str.split(':');
    if(timeParts.length !== 2){
        return false
    }
    const hours = parseInt(timeParts[0],10);
    const minute = parseInt(timeParts[1],10);
    
    if (hours == null || minutes == null ){
        return false
    }
    if (hours < 0 || hours > 23){
        return false
    }
    if (minutes < 0 || minutes > 59){
        return false
    }

    return true
}




describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});