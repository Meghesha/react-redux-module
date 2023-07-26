export const PRINT_GOOD_MORNING = 'PRINT_GOOD_MORNING';
export const PRINT_GOOD_AFTERNOON = 'PRINT_GOOD_AFTERNOON';
export const PRINT_GOOD_EVENING = 'PRINT_GOOD_EVENING';

export const printGoodMorning = ()=>{
    return {type : PRINT_GOOD_MORNING}
}
export const printGoodAfternoon = ()=>{
    return {type : PRINT_GOOD_AFTERNOON}
}
export const printGoodEvening = ()=>{
    return {type : PRINT_GOOD_EVENING}
}