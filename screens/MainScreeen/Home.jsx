import React from 'react';
import {View} from "native-base";

import * as yup from "yup";
import CreateForm from "../Form/CreateForm";

const schema = yup.object().shape({
    sizeOfRoom: yup.number().required(),
    priceUnitFloor: yup.number().required(),
    priceUnitFloorInstall: yup.number().required()
})


const Home = ({navigation}) => {

    return (


        <View p={"24"}>
            <CreateForm/>
        </View>


    );
};

export default Home;

