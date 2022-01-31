import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledText, StyledTouchable } from 'components/base';
import { getPropsFromNumOfCells, generateFakeBoardData, checkWinningConditions } from 'utilities/helper';
import { NUM_OF_CELLS } from 'utilities/staticData';
import { ICellData } from 'utilities/interfaces';
import { scale } from 'react-native-size-matters';
import { Themes } from 'assets/themes';
import Cell from './components/Cell';

const PlayGameScreen = () => {
    const { cellSize, cellTextFontSize } = getPropsFromNumOfCells(NUM_OF_CELLS);
    const fakeData: Array<ICellData> = generateFakeBoardData(NUM_OF_CELLS);
    const [currentBoardData, setCurrentBoardData] = useState(fakeData);
    const [winningBoard, setWinningBoard] = useState<Array<ICellData>>([]);

    useEffect(() => {
        const resultWinningCondition = checkWinningConditions(currentBoardData);
        if (resultWinningCondition) {
            setWinningBoard(resultWinningCondition);
        }
    }, [currentBoardData]);

    const handlePressCell = (currentIndex: number) => {
        const newCurrentBoardData = currentBoardData.map((boardItem, boardIndex) => {
            if (boardIndex === currentIndex && !boardItem.isChosen) {
                return {
                    ...boardItem,
                    isChosen: true,
                };
            }
            return boardItem;
        });
        setCurrentBoardData(newCurrentBoardData);
    };

    const handleResetBoardGame = () => {
        setWinningBoard([]);
        setCurrentBoardData(generateFakeBoardData(NUM_OF_CELLS));
    };

    const renderCellItem = ({ item, index }: ListRenderItemInfo<ICellData>) => {
        return (
            <Cell
                item={item}
                index={index}
                handlePressCell={handlePressCell}
                cellSize={cellSize}
                cellTextFontSize={cellTextFontSize}
                disabled={winningBoard?.length > 0}
                customCellStyle={
                    winningBoard.find((winningItem) => winningItem?.value === item?.value)
                        ? { backgroundColor: Themes.COLORS.winning }
                        : {}
                }
            />
        );
    };

    return (
        <SafeAreaView style={styles.contScreen}>
            <FlatList
                data={currentBoardData}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={renderCellItem}
                numColumns={Math.sqrt(NUM_OF_CELLS)}
                style={{ maxHeight: cellSize * Math.sqrt(NUM_OF_CELLS) }}
                bounces={false}
            />
            {winningBoard?.length > 0 ? (
                <View style={styles.contWinning}>
                    <StyledText originValue="You are the winner" />
                    <StyledTouchable onPress={handleResetBoardGame} customStyle={styles.btnReset}>
                        <StyledText originValue="Reset board game" />
                    </StyledTouchable>
                </View>
            ) : null}
        </SafeAreaView>
    );
};

export default PlayGameScreen;

const styles = StyleSheet.create({
    contScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contWinning: {
        alignItems: 'center',
        padding: scale(10),
    },
    btnReset: {
        padding: scale(10),
        borderWidth: 1,
        marginTop: scale(10),
    },
});
