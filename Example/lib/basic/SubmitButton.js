import React, {Component, PropTypes} from 'react';
import {StyleSheet} from 'react-native';
import Button from 'apsl-react-native-button';
import px2dp from '../util';
import styles from '../style/Button';

// 登陆页等的底部动作按钮
export default class SubmitButton extends Component {
    static propTypes = {
        isEnabled: PropTypes.bool, // 是否启用
        onPress: PropTypes.func, // 点击事件
        text: PropTypes.string, // 按钮文本
    };

    render() {
        return (
            <Button
                style={styles.buttonViewEnabled}
                disabledStyle={styles.buttonViewDisabled}
                isDisabled={!this.props.isEnabled}
                onPress={this.props.onPress}
                textStyle={styles.buttonText}>
                {this.props.text}
            </Button>
        );
    }
}