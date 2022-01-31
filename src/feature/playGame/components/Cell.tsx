import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { ICellData } from 'utilities/interfaces';
import { Themes } from 'assets/themes';
import { StyledTouchable, StyledText } from 'components/base';

interface ICellProps {
    item: ICellData;
    index: number;
    cellSize: number;
    cellTextFontSize: number;
    handlePressCell(index: number): void;
    disabled?: boolean;
    customCellStyle?: StyleProp<ViewStyle>;
}

const Cell = (props: ICellProps) => {
    const { item, index, cellSize, cellTextFontSize, handlePressCell, disabled = false, customCellStyle = {} } = props;
    return (
        <StyledTouchable
            activeOpacity={0.8}
            onPress={() => handlePressCell(index)}
            customStyle={[
                styles.contCellNormal,
                { width: cellSize },
                item.isChosen ? { backgroundColor: Themes.COLORS.primary } : {},
                customCellStyle,
            ]}
            disabled={disabled}
        >
            <StyledText
                originValue={`${item?.value}`}
                customStyle={[{ fontSize: cellTextFontSize }, item.isChosen ? { color: Themes.COLORS.white } : {}]}
            />
        </StyledTouchable>
    );
};

export default Cell;

const styles = StyleSheet.create({
    contCellNormal: {
        aspectRatio: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
