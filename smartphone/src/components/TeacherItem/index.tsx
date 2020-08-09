import React from 'react'
import { View, Image, Text } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'


import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

export default function TeacherItem(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri:'https://avatars0.githubusercontent.com/u/61329950?s=400&u=b1d454fdc4c0abdaaf9569866607b14a6a7e6677&v=4'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Breno Mendes</Text>
                    <Text style={styles.subject}>Historia</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                focused on enabling me to reach the level of FullStack developer focusing on JavaScript technologies 
            </Text>

        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'  '}
                <Text style={styles.priceValue}>R$ 20,00</Text>
            </Text>
        
        <View style={styles.buttonsContainer}>
            <RectButton style={styles.favoriteButton}>
                <Image source={heartOutlineIcon} />
            </RectButton>

            <RectButton style={styles.contactButton}>
                <Image source={whatsappIcon} />
                <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
        </View>

        </View>           
        </View>
    )
}