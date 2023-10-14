import {useContext} from 'react';
import {AppContext} from './AppProvider';
import {AppContextTypes} from './AppProvider.types';

export const useAppContext = (): AppContextTypes => useContext(AppContext);
