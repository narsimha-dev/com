import React,{Fragment} from 'react';
import { MainContext } from './MainContext';
import ThardFile from './ThardFile';
import { User } from './User';

export default function SecondFile(){
        return ( 
            <Fragment>
            <MainContext.Consumer>
                {g=>(<h1>{g.message}</h1>)}
            </MainContext.Consumer>
            <ThardFile/>
            <User/>
            </Fragment>
         );
    }