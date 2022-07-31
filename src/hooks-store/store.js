import { useState } from 'react';

//usually custom hooks are used to give every comp that uses it its own state 'slice'
//here since we are defining these outside of the hook below it it is created and once and shared with every comp that uses it 
let globalState = {};
let listeners = [];
let actions = {};

//adds a listener for setState when the component using this hook initially renders (mounts)
//and removing it when it unMounts (is removed from the dom)
const useStore = () => {
    const setState = useState(globalState)[1];

    useEffect(() => {
    listeners.push(setState);
    return () => {
        listeners = listeners.filter(li => li !== setState)
    }
    }, [setState]);

};