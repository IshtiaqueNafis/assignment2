import React, {useState} from 'react';
import {Text, View} from "native-base";
import {CreateFormStyles} from "./CreateForm.styles";
import {Formik} from "formik";
import {Alert, Button, Switch, TextInput} from "react-native";
import {roomValidationSchema} from "../../utils/schema";

const CreateForm = () => {
    const [label, setLabel] = useState("Enter Room size in square feet");
    const [isEnabled, setIsEnabled] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggleInputSwitch = () => {

        setIsEnabled(previousState => !previousState);
        if (isEnabled) {
            setLabel("Enter Room size in square meters");
        } else {
            setLabel("Enter Room size in square feet");
        }

    }


    return (
        <View style={CreateFormStyles.loginContainer}>

            <Switch
                trackColor={{false: "#767577", true: "#81b0ff"}}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleInputSwitch}
                value={isEnabled}

            />
            <Text>Room cost Calculator</Text>
            <Formik
                validationSchema={roomValidationSchema}
                initialValues={{roomSize: '', priceFloor: '', priceFloorInstall: ''}}
                onSubmit={values => {
                    let title = "";
                    const last = label.charAt(label.length - 1);

                    const flooring = values.roomSize * values.priceFloor;
                    const installation = values.roomSize * values.priceFloorInstall;
                    const totalCost = flooring + installation;
                    const tax = totalCost * 0.13;

                    const result = `flooring cost is ${flooring}\n installation cost is ${installation}\n total cost is ${totalCost}\n tax is ${tax.toFixed(2)}                     
                    `


                    if (last === "t") {
                        title = "Calculation based on feet "
                    } else {
                        title = "Calculation based on Meters"
                    }
                    Alert.alert(title, result
                    );

                }}
            >
                {({
                      handleChange,
                      handleBlur,
                      errors,
                      touched,
                      handleSubmit,
                      values,
                      isSubmitting,
                      isValid,
                      dirty,
                      resetForm
                  }) => (
                    <>
                        <TextInput
                            name="roomSize"
                            placeholder={label}
                            style={CreateFormStyles.textInput}
                            onChangeText={handleChange('roomSize')}
                            onBlur={handleBlur('roomSize')}
                            value={values.roomSize}
                            keyboardType={'number-pad'}
                        />
                        {(errors.roomSize && touched.roomSize) &&
                            <Text style={CreateFormStyles.errorText}>{errors.roomSize}</Text>
                        }
                        <TextInput
                            placeholder="Enter price for flooring"
                            style={CreateFormStyles.textInput}
                            onChangeText={handleChange('priceFloor')}
                            onBlur={handleBlur('priceFloor')}
                            value={values.priceFloor}
                            keyboardType={'number-pad'}
                        />
                        {(errors.priceFloor && touched.priceFloor) &&
                            <Text style={CreateFormStyles.errorText}>{errors.priceFloor}</Text>
                        }


                        <TextInput

                            placeholder="Enter price for flooring installation"
                            style={CreateFormStyles.textInput}
                            onChangeText={handleChange('priceFloorInstall')}
                            onBlur={handleBlur('priceFloorInstall')}
                            value={values.priceFloorInstall}
                            keyboardType={'number-pad'}
                        />
                        {(errors.priceFloorInstall && touched.priceFloorInstall) &&
                            <Text style={CreateFormStyles.errorText}>{errors.priceFloorInstall}</Text>
                        }
                        <Button onPress={handleSubmit} title="Submit" disabled={!isValid || !dirty || isSubmitting}/>
                        <Button onPress={() => resetForm()} title="Reset"/>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default CreateForm;
