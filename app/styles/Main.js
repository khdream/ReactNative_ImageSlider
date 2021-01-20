import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    
    container:{
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'flex-start',
        width : width(100),
        backgroundColor: '#fff'
    },
    
    IndicatorIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
