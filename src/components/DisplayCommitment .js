import React, { Component } from 'react';
import { takeRightWhile, last } from 'lodash';
import { View, Heading, Title, TouchableOpacity, TextInput } from '@shoutem/ui';
import CircleButton from './CircleButton';

const CommitDay = ({ done, style }) => {
    <View style={style} styleName={ done ? 'done' : 'undone'}>
    </View>
};


class DisplayCommitment extends Component {
    render() {
        const { id, commitment, onEdit, onDone, style } = this.props;
        return (
            <View style={style.main}>
                <View styleName="sm-gutter-top lg-gutter-left lg-gutter-right">
                    <Heading style={style.text}>Did you</Heading>
                    <TouchableOpacity style={style.textCommitment} onPress={this.onEdit}>
                        <Heading styleName="variable">{commitment}</Heading>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default DisplayCommitment;