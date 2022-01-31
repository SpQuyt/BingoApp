import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StyledPicker from 'components/base/picker/StyledPicker';
import ModalizeManager from 'components/base/modal/ModalizeManager';
import { dataPicker } from 'utilities/staticData';
import { StyledButton } from 'components/base';
import ModalContent from './components/ModalContent';

const HomeScreen: FunctionComponent = () => {
    const modalize = ModalizeManager();
    const [valuePicker, setValuePicker] = useState(dataPicker[0]);
    const [currentValue, setCurrentValue] = useState(0);

    const handleConfirm = (item: string) => {
        setValuePicker(item);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.contScreen}>
                <StyledPicker
                    label="Test Picker"
                    currentValue={valuePicker}
                    dataList={dataPicker}
                    onConfirm={handleConfirm}
                />
                <StyledButton
                    title="Open Modal 1"
                    onPress={() => {
                        modalize.show(
                            'modalTest',
                            <ModalContent
                                currentValue={currentValue}
                                handleSetValue={setCurrentValue}
                                handleIncreaseNumber={() => setCurrentValue(currentValue + 1)}
                                closeModal={() => modalize.dismiss('modalTest')}
                                handleCallback={() => alert('Test callback from modal')}
                            />,
                            {
                                isCenter: true,
                                adjustToContentHeight: true,
                                disableScrollIfPossible: false,
                            },
                        );
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contScreen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        paddingHorizontal: 25,
    },
    contModalContent: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
