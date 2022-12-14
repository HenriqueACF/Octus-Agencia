import React from 'react'
import {ScrollView, StyleSheet, View} from "react-native";

import {
    Container,
    MyCardView,
    CardBlogView,
    CardBlogItem,
    CardFunction,
    CardFunctionRow,
    Touchable
} from './Dashboard.styles'
import {Header} from "../../components/Header/Header";
import {MyCard} from '../../components/Card/MyCard'
import {CardBlog} from "../../components/CardBlog/CardBlog";
import {Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export function Dashboard(){
    return(
        <Container>
            <Header/>
            <MyCardView>
                <MyCard/>
            </MyCardView>
            <CardFunction>
                <Ionicons name='card-outline' size={25}/>
                <CardFunctionRow>
                    <Text style={styles.subtitle}>Cartão de crédito</Text>
                    <Ionicons name='logo-usd' size={15} />
                </CardFunctionRow>
                <Text style={styles.textFatura}>Fatura atual</Text>
                <Text style={styles.textValor}>R$ 1432,75</Text>
                <Text style={styles.textFatura}>Limite disponível: R$ 4.098,25</Text>
                <Touchable style={{borderRadius:10}}>
                    <Text style={styles.textButton}>Parcelar fatura</Text>
                </Touchable>
            </CardFunction>
            <CardBlogView>
                <ScrollView
                    horizontal
                    contentContainerStyle={{paddingHorizontal:24}}
                    showsHorizontalScrollIndicator={false}
                >
                    <CardBlogItem>
                        <CardBlog
                            link='https://www.google.com/'
                            text={<Text style={styles.text}>Conheça os nossos serviços, que cabem no seu bolso</Text>}
                        />
                    </CardBlogItem>

                    <CardBlogItem>
                        <CardBlog
                            link='https://www.google.com/'
                            text={<Text style={styles.text}>Consorcio para realizar o sonho da casa propria</Text>}
                        />
                    </CardBlogItem>

                    <CardBlogItem>
                        <CardBlog
                            link='https://www.google.com/'
                            text={<Text style={styles.text}>Financiamento estudantil para fazer o curso dos seus sonhos
                                ou terminar aquela tão desejada especialização</Text>}
                        />
                    </CardBlogItem>
                </ScrollView>
            </CardBlogView>
        </Container>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#FFF'
    },
    subtitle:{
        fontSize:16,
        fontWeight: 'bold'
    },
    textFatura:{
        fontWeight: 'bold',
        marginTop:16
    },
    textValor:{
        fontSize:20,
        fontWeight:'bold'
    },
    textButton:{
        fontSize:14,
        fontWeight: "bold",
        color: 'white'
    }
})
