import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../../components/Button/Button';

const home = (props) => {
    return (
        <Aux>
            <div align='center' style={{marginRight: '10px', marginLeft: '10px'}} >
                <h5>Welcome to <i style={{color: 'indigo'}} >SILVER-1</i> App</h5>
                <div style={{fontSize: '20px', minHeight:'25vh'}} >
                    This hbcdhcs jdvbdcjscjdv dncjw jnjdnjdnv fbvdjc dfjv jdcj dsjcdjvjdjkc jnjdvdekfr j jr gjr j jg jgr gjr
                    grkgnrjef fjv rjberj vf revr
                    verv efjef jef j bjr vjf f
                    vw
                    v,;eg kef ljerb ejr rwj vjejvdj djdjdnjvjd vjd d jdv jd 
                </div>

                <div style={{fontSize: '20px', minHeight:'25vh'}} >
                    <h4> <u> Features </u> </h4>
                </div>

                <div align='center' >
                    <Button btncolour='indigo' btnname='Get Started' actionType='link' iconname='directions_bike' whereto='/register' />
                </div>
            </div>
        </Aux>
    );
}

export default home