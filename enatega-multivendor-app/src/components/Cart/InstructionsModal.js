import React, { useState } from 'react'
import { View, Modal, Pressable, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import TextDefault from '../Text/TextDefault/TextDefault'
import { useStyles } from './styles'
import { scale } from '../../utils/scaling'
import { textStyles } from '../../utils/textStyles'
import { alignment } from '../../utils/alignment'


export const InstructionsModal = ({ theme }) => {
    const [visible, setVisible] = useState(true)
    const styles = useStyles(theme)

    return (<Modal
        visible={visible}
        animationType="slide"
        transparent={true}>
        <View style={styles.layout}>
            <Pressable style={styles.backdrop} onPress={() => { setVisible(false) }}>
            </Pressable>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        onPress={() => { setVisible(false) }}
                        style={styles.closeButton}>
                        <TextDefault bolder textColor={theme.newButtonText}>Done</TextDefault>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextDefault H2 bolder textColor={theme.color4}>Add message</TextDefault>
                    <TextDefault H5 bold textColor={theme.fontThirdColor} style={styles.secondaryText}>Special requests, allergies, dietary restriction</TextDefault>
                    <TextDefault H5 smaller textColor={theme.secondaryText} style={styles.ternaryText}>Kindly be advised that your message could also be visible to the courier partner responsible for delivering your order to the venue.</TextDefault>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Type here' allowFontScaling style={{ padding: scale(10), ...textStyles.H3, flex:1 }} maxLength={400} />
                    <TouchableOpacity style={alignment.MRxSmall} onPress={() => { }}>
                        <Ionicons name='close-circle-outline' size={scale(18)} color={theme.fontNewColor} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </Modal >)
}