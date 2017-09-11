import {StyleSheet} from 'react-native';
import px2dp from '../util';

export default StyleSheet.create({
    buttonViewDisabled: {
        backgroundColor: '#e6e6e6',
        margin: 0,
        borderRadius: 6,
        justifyContent: 'center',
        alignSelf: 'center',
        height: px2dp(88),
        width: px2dp(500),
        marginTop: px2dp(45),
        borderWidth: 0,
    },

    buttonViewEnabled: {
        backgroundColor: '#ef0c35',
        margin: 0,
        borderRadius: 6,
        justifyContent: 'center',
        alignSelf: 'center',
        height: px2dp(88),
        width: px2dp(500),
        marginTop: px2dp(45),
        borderWidth: 0,
    },

    buttonEnableView: {
        backgroundColor: '#e6e6e6',
        margin: 0,
        borderRadius: 6,
        justifyContent: 'center',
        alignSelf: 'center',
        height: px2dp(88),
        width: px2dp(500),
        marginTop: px2dp(45)
    },

    buttonText: {
        fontSize: 15,
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
});