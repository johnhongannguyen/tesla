import React from 'react';
import Button from './Button';
import {findAllByTitle} from '@testing-library/react';

const Item = ({title,desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink,twoButtons, first}) =>{
    return(
        <div className='item' style={{

        }}>
            <div className='item__container'>
                <div className='item__text'>
               
                    <p>{title}</p>
                    <div className='item__textDesc'>
                        <p>{desc}</p>

                    </div>
                </div>
                <div className='item__lowerThird'>
                    <div className='item__button'>
                        <Button imp='primary' text={leftBtnLink} link={leftBtnLink} />
                            
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Item;