import React from 'react'
import { View } from 'react-native'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

export default function TeacherList(){
    return (
    <View  style={styles.container}>
        <PageHeader title="Proffys Disponiveis"/>

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16
            }}
        
        >
        <TeacherItem /> 
        <TeacherItem /> 
        <TeacherItem /> 
        <TeacherItem /> 
        <TeacherItem /> 
        </ScrollView>
    </View>
    
    )
}