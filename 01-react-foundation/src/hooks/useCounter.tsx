
import { useState } from 'react';

interface Options {
    initialValue?: number;
}

export const useCounter = ({ initialValue = 0 }: Options) => {

    const [ count, setCount ] = useState<number>(initialValue);

    const increaseBy = ( value: number ) => {
        const newVAlue = count + value;

        // if ( newVAlue>=0 ) {
        //     setCount ( count + value );
        // }

        if ( newVAlue<1 ) return;
        setCount ( count + value );

    }

    return {
        // Properties
        count,

        // Methods
        increaseBy,

    }

}
