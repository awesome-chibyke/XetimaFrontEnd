/* eslint-disable no-unused-vars */
import { useSelector, useDispatch  } from "react-redux";
import React, { useState, useEffect} from "react";
import { activateTwoFactorAction } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import DynamiicModal from "../components/DynamiicModal";
import Try from "../components/Try";
import Try_ from "../components/Try_";
import { Markup } from 'interweave';

const Dashboard = () => {

    const dispatch = useDispatch();
    const allStateObject = useSelector(state => state);
    let {login:loginData, activate_twofactor} = allStateObject;
    const { barCode, otpauth_url } = activate_twofactor;

    let splittedValue = []; console.log(barCode)
    if(barCode !== null){
        splittedValue = barCode.split(',');
    }

    const activateTwoFactorHandler = (loginData) =>{
        if(loginData.isLogged === true){
            dispatch(activateTwoFactorAction(loginData));
        }    
    }  
    
    const [displaySecondModal, setDisplaySecondModal] = useState('none');
    const [displayFirstModal, setDisplayFirstModal] = useState('none');


    if(loginData.isLogged === false){ window.location.href = '/login' }
    return (
        <>
            {loginData.isLogged === false ? <DelayedRedirect to={`/login`} delay={500} />  :'' }
            <div>
                <section className="bg-dark-body bg-food-white pt-120 pb-20" style={{width:"100%", height:"auto", backgroundColor:"white"}}>
                    <div className="text-center">
                        <h3 className="text-white">Welcome To Xetima</h3>

                        <button  className="text-white" className="btn btn-success" onClick={() => setDisplayFirstModal(displayFirstModal === 'none' ? 'block': 'none') }>Open Modal</button>
                         <br /><br />

                        <button  className="text-white" className="btn btn-success" onClick={() => setDisplaySecondModal(displaySecondModal === 'none' ? 'block': 'none') }>Open Modal</button>
                            <br></br>
                        <span className="btn btn-success mt-4 mb-4" onClick={() => activateTwoFactorHandler(loginData)}> Activate Two Factor</span>

                            <div>
                            {/* src={`data:image/png;base64,${splittedValue.length > 0 ? splittedValue[1] : ''}`} */}
                            <image style={{width:"100px"}} src={otpauth_url} />
                            </div>                        
                            {/* <image style={{width:"100px"}} src={`data:image/png;base64,${splittedValue.length > 0 ? splittedValue[1] : ''}`} /> */}
                            <DynamiicModal
                            widthSize={'100%'}
                            marginLeft={'0%'}
                            marginRight={'0%'}
                            contents={<Try />}
                            headerTitleText={'Dynamic Modal'}
                            displayModal={displayFirstModal}
                            closeModal={setDisplayFirstModal}
                            
                            optionForStyleOrClass={'use_style'}
                        />

                        <DynamiicModal
                            widthSize={'100%'}
                            marginLeft={'0%'}
                            marginRight={'0%'}
                            contents={<Try_/>}
                            headerTitleText={'Another One'}
                            displayModal={displaySecondModal}
                            closeModal={setDisplaySecondModal}
                            optionForStyleOrClass={'use_class'}
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;