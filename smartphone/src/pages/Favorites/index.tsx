import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

export default function Favorites(){
    return (
        <View  style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>

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