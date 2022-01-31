/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import AsyncStorage from '@react-native-community/async-storage';
import AlertMessage from 'components/base/AlertMessage';
import i18next from 'i18next';
import { DevSettings, Platform } from 'react-native';
import Picker from 'react-native-picker';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import codePush from 'react-native-code-push';
import Config from 'react-native-config';
import { scale } from 'react-native-size-matters';
import { BOARD_WIDTH } from './staticData';
import { ICellData } from './interfaces';

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';

export function wait(timeout: number): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

export function logger(msg: string, isWarning?: boolean, params?: any): void {
    if (__DEV__ && !isWarning) {
        if (params) console.log(msg, params);
        else console.log(msg);
    }
    if (__DEV__ && isWarning) {
        if (params) console.warn(msg, params);
        else console.warn(msg);
    }
}

export function initPicker(params?: any) {
    Picker.init({
        pickerTextEllipsisLen: 10,
        pickerCancelBtnText: i18next.t('common.cancel'),
        pickerConfirmBtnText: i18next.t('common.confirm'),
        ...params,
    });
}

export const addMenuClearAsyncStorage = () => {
    if (__DEV__) {
        DevSettings.addMenuItem('Clear AsyncStorage', () => {
            AsyncStorage.clear();
            DevSettings.reload();
        });
    }
};

export function generatePersistConfig(key: string, whitelist: string[]) {
    return {
        key,
        whitelist,
        version: 1,
        debug: __DEV__,
        storage: AsyncStorage,
        stateReconciler: autoMergeLevel2,
    };
}

export const renderAlert = (message: string, callback: () => void) => {
    AlertMessage(i18next.t(message), '', callback, undefined, false);
};

export const getCodePushInfo = () => {
    if (!__DEV__) {
        codePush.sync({
            updateDialog: undefined,
            installMode: codePush.InstallMode.IMMEDIATE,
            deploymentKey:
                Platform.OS === 'android'
                    ? Config.CODEPUSH_ANDROID_DEVELOPMENT_KEY
                    : Config.CODEPUSH_IOS_DEVELOPMENT_KEY,
        });
    }
};

export const getPropsFromNumOfCells = (numOfCells: number) => {
    return {
        cellSize: BOARD_WIDTH / Math.floor(Math.sqrt(numOfCells)),
        cellTextFontSize: scale(25 - Math.floor(Math.sqrt(numOfCells))),
    };
};

export const generateFakeBoardData = (numOfCells: number) => {
    // In case value is 0, we set default value to 1
    const numOfCellsEachEdge = Math.floor(Math.sqrt(numOfCells)) || 1;
    const unShuffled = [];
    for (let i = 0; i < numOfCells; i++) {
        unShuffled.push({
            value: i + 1,
            isChosen: false,
        });
    }
    const shuffled = unShuffled
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }, index) => {
            return {
                ...value,
                col: Math.floor(index / numOfCellsEachEdge),
                row: index % numOfCellsEachEdge,
            };
        });
    return shuffled;
};

const checkVerticalLines = (boardData: Array<ICellData>) => {
    const numOfCellsEachEdge = Math.floor(Math.sqrt(boardData.length)) || 1;
    for (let colIndex = 0; colIndex < numOfCellsEachEdge; colIndex++) {
        const isTrueEachStepArr: Array<ICellData> = [];
        for (let rowIndex = 0; rowIndex < numOfCellsEachEdge; rowIndex++) {
            const currentItem = boardData.find((boardItem) => boardItem.row === rowIndex && boardItem.col === colIndex);
            if (currentItem?.isChosen) {
                isTrueEachStepArr.push(currentItem);
            }
        }
        if (isTrueEachStepArr?.length === numOfCellsEachEdge) {
            return isTrueEachStepArr;
        }
    }
    return undefined;
};

const checkHorizontalLines = (boardData: Array<ICellData>) => {
    const numOfCellsEachEdge = Math.floor(Math.sqrt(boardData.length)) || 1;
    for (let rowIndex = 0; rowIndex < numOfCellsEachEdge; rowIndex++) {
        const isTrueEachStepArr: Array<ICellData> = [];

        for (let colIndex = 0; colIndex < numOfCellsEachEdge; colIndex++) {
            const currentItem = boardData.find((boardItem) => boardItem.row === rowIndex && boardItem.col === colIndex);
            if (currentItem?.isChosen) {
                isTrueEachStepArr.push(currentItem);
            }
        }
        if (isTrueEachStepArr?.length === numOfCellsEachEdge) {
            return isTrueEachStepArr;
        }
    }
    return undefined;
};

const checkDiagonalLines = (boardData: Array<ICellData>) => {
    const numOfCellsEachEdge = Math.floor(Math.sqrt(boardData.length)) || 1;
    const isFirstDiagonTrueEachStepArr: Array<ICellData> = [];
    const isSecondDiagonTrueEachStepArr: Array<ICellData> = [];
    for (let rowIndex = 0; rowIndex < numOfCellsEachEdge; rowIndex++) {
        const currentItem = boardData.find((boardItem) => boardItem.row === rowIndex && boardItem.col === rowIndex);
        if (currentItem?.isChosen) {
            isFirstDiagonTrueEachStepArr.push(currentItem);
        }
    }
    if (isFirstDiagonTrueEachStepArr?.length === numOfCellsEachEdge) return isFirstDiagonTrueEachStepArr;
    for (let rowIndex = numOfCellsEachEdge - 1; rowIndex > 0; rowIndex--) {
        const currentItem = boardData.find((boardItem) => boardItem.row === rowIndex && boardItem.col === rowIndex);
        if (currentItem?.isChosen) {
            isSecondDiagonTrueEachStepArr.push(currentItem);
        }
    }
    if (isSecondDiagonTrueEachStepArr?.length === numOfCellsEachEdge) return isSecondDiagonTrueEachStepArr;
    return undefined;
};

export const checkWinningConditions = (boardData: Array<ICellData>) => {
    const resultVertical = checkVerticalLines(boardData);
    if (resultVertical) return resultVertical;
    const resultHorizontal = checkHorizontalLines(boardData);
    if (resultHorizontal) return resultHorizontal;
    const resultDiagonal = checkDiagonalLines(boardData);
    if (resultDiagonal) return resultDiagonal;
    return undefined;
};
