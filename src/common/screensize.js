import {Dimensions, PixelRatio} from 'react-native'
//设备的宽度,高度
const screenWidth = Dimensions.get('window').width;      
const screenHeight = Dimensions.get('window').height;  
//设计基准大小
const defaultWidth = 1280;
const defaultHeight = 752;

const DEFAULT_DENSITY = 1;  

//px转换成dp
const w2 = defaultWidth / DEFAULT_DENSITY;
const h2 = defaultHeight / DEFAULT_DENSITY;

//缩放比例
const _scaleWidth = screenWidth / defaultWidth;
const _scaleHeight = screenHeight / defaultHeight;

let fontScale = PixelRatio.getFontScale(); 
const scale = Math.min(_scaleWidth, _scaleHeight);
const _fontScale = scale * fontScale;

export  {_scaleWidth,_scaleHeight,_fontScale}