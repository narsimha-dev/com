import React from 'react';
import { MainContext } from './MainContext';

export default function ThardFile(){
    
        return ( 
            <MainContext.Consumer>
                {
                    a=>(<p>{a.message}</p>)
                }
            </MainContext.Consumer>
         );
    }