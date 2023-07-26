export const INCR_QTY = 'INCR_QTY';
export const DECR_QTY = 'DECR_QTY';

export const incrementQty = ()=>{
    return {type : INCR_QTY}
}

export const decrementQty = ()=>{
    return {type : DECR_QTY}
}