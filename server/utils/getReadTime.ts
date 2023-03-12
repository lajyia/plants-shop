export const getReadTime = (letters: number): string =>{

    const speedRead = 220;

    const timeRead =  Math.round(letters / speedRead);

    const result = timeRead > 0 ? timeRead + ' ' + 'minutes' : '1 minutes';

    return result

}