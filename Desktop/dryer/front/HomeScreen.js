import  React, { useState } from 'react';
import { Button, Dimensions, View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ImageAll = props => {
    return(
        <>
            <Text style={style.OnOffText}>
                {props.text}
            </Text>
            <Image source={
                !props.control ?
                require("./assets/image/Off.png") :
                require("./assets/image/On.png")}
                style={style.OnOffImg} resizeMode="contain"/>
        </>
)}

const SubText = props => {
    return(
        <View style={style.subText}>
            <Text style={style.main}>{props.main}</Text>
            <Text style={style.sub}>{props.sub}</Text>
        </View>
    );
};

const TemHumImg = props => {
    return(
        <ImageBackground source={
            props.imgName === "temperature1" ?
            require("./assets/image/temperature1.png") :
            require("./assets/image/humidity1.png")} 
            style={style.temHumImg}
            resizeMode="contain">
            <Text style={style.imgInnerText}>{props.TemNumber}
                <Text style={{fontSize:20,}}>{props.unit}</Text>
            </Text>    
            </ImageBackground>
    );
};

export default function HomeScreen({ navigation }) {

    const [thermicRays, setThermicRays] = useState(0);
    const [blowing, setBlowing] = useState(1);
    const [learning, setLearning] = useState(0);

    let day = ['일', '월', '화', '수', '목', '금', '토'];
    var today = new Date();
    let dateFormat1 = (
                    today.getMonth()+1) + '월' + 
                    today.getDate() + "일" +   
                    day[today.getDay()] + "요일"
    let dateFormat2 = (
                    today.getHours() + ":" +
                    today.getMinutes() + ":" +
                    today.getSeconds() 
    )
                    

    return (
      <View style={style.homeMainBox}>
        <View style={style.homeInnerBox}>
            <View style={style.homeFirstBox}>
                <View style={{flexDirection:"row",marginTop: height/12.6811,marginBottom: height/30.7368}}>
                    <Text style={style.BoxTitle}>
                        Recipe Progress
                    </Text>
                    <Text style={style.BoxTitleMini}>
                        현재 건조기 상태
                    </Text>
                </View>
                <View style={style.OnOffBox}>
                    <ImageAll text="열선" control={thermicRays}/>
                    <ImageAll text="송풍" control={blowing}/>
                    <ImageAll text="배습" control={learning}/>
                </View>
                <View style={{}}>
                    <Image source={
                        require('./assets/image/wait.png')} 
                        resizeMode="contain"
                        style={style.waitImg}/>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", width:width/4.7, marginTop: height/21.3380}}>
                    <SubText main="Temperature" sub="온도"/>
                    <SubText main="Humidity" sub="습도"/>
                </View>
                <View style={{flexDirection:"row", width: width/4.7}}>
                    <TemHumImg TemNumber="18" imgName="temperature1" unit="°C"/>
                    <TemHumImg TemNumber="42" imgName="humidity1" unit="%"/>
                </View>
            </View>
            <View style={style.homeSecondBox}>
                <View>
                    <Text></Text>
                </View>
            </View>
        </View>
        {/* <Button
          onPress={() => navigation.navigate('Notifications')}
          title="test"
        /> */}
      </View>
    );
  }
  const style = StyleSheet.create({
    homeMainBox: {
        flex: 1, 
        alignItems: 'flex-end', 
        justifyContent: 'center', 
        backgroundColor: '#EFEAFF' 
    },
    homeInnerBox: {
        width : width/1.3011,
        height : height/1.1571,
        flexDirection: "row",
        marginRight: width/20

    },
    homeFirstBox : {
        backgroundColor : "#FFFFFF",
        width: width/3.3175,
        height: height/1.1571,
        marginRight: width/38.8888,
        borderRadius: 20,
        alignItems: "center"
    },
    homeSecondBox: {
        backgroundColor: "#FFFFFF",
        width: width/2.1406,
        borderRadius: 20, 
    },
    BoxTitle: {
        fontSize: height/29.7317,
        color: "black",
        fontWeight: "bold",
        marginRight: width/90.3333,
        marginLeft: width/380.2828,
    },
    BoxTitleMini: {
        fontSize: height/55,
        lineHeight: 60,
        color: "black",
        marginLeft: -10,
    },
    OnOffBox: {
        flexDirection: "row",
        width: width/6.5,
        height: height/20,
        marginTop: -19,
        // backgroundColor: "grey"r
    },
    OnOffImg: {
        width: width/41.7910,
        height: height/48.6666,
        marginLeft: width/270.3333,
        marginRight: width/78.6756
    },
    OnOffText: {
        fontSize: 16,
        color: "black",
    },
    waitImg: {
        width: width/5.7851,
        marginTop: height/38.9777,
        height: height/2.9107,
    },
    subText: {
        flexDirection: "row"
    },
    main: {
        fontSize: 25,
        fontWeight:"bold",
        marginRight: width/170,
        color: "black"
    },
    sub: {
        fontSize: 15,
        lineHeight: 40,
        marginRight: width/38,
        color: "black"
    },
    temHumImg: {
        width: width/10.7,
        height: height/5,
        marginLeft: width/300,
        marginRight: width/55.6666,
    },
    imgInnerText: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: height/14,
        marginLeft: width/33,
        color: "black"
    }
  })

   