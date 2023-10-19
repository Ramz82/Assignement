//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Montserrat_400Regular, Poppins_400Regular } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import FontLoader from './FontLoader';
// create a component
const MyComponent = () => {
    
    return (
        <FontLoader>
        <View style={styles.container}>
            
            <View style={styles.leftbar}>

            </View>
            <View style={styles.leftbar1}>
                <Text style={styles.h1}>RAMZA BATOOL</Text>
                <Text style={styles.h2}>Software Engineer</Text>
                <Text style={styles.h3}>ABOUT ME</Text>
                <Text style={styles.paragraph}>
                I am a dedicated software engineer 
                with a passion for creating innovative 
                solutions and a proven track record of 
                delivering high-quality software that meets
                both user and business needs.
                </Text>
            </View>
            <View style={styles.langdiv}>
                <Text style={{fontWeight:'bold'}}>LANGUAGE</Text>
                <View style={styles.lang1}>
                    <Text style={{fontSize:10,marginTop:10 ,fontWeight:'bold'}}>English</Text>
                    <View style={styles.img}/>
                    <View style={styles.img}  />
                    <View style={styles.img}  />
                    <View style={styles.img2} />
                    
                </View>
                <View style={styles.lang2}>
                    <Text style={{fontSize:10,marginTop:10,fontWeight:'bold'}}>Urdu</Text>
                    <View style={styles.img}  />
                    <View style={styles.img}  />
                    <View style={styles.img}  /> 
                    <View style={styles.img}  />
                    
                </View>
            </View>
            <View style={styles.skildiv}>
                <Text style={{fontWeight:'bold'}}>SKILLS</Text>
                <View style={styles.skill1}>
                    <Text style={{fontSize:7,marginTop:5 ,fontWeight:'bold'}}>Python</Text>
                    <View style={styles.pbar}></View>
                    
                </View>
                
                <View style={styles.skill2}>
                    <Text style={{fontSize:7,marginTop:5,fontWeight:'bold'}}>React-Native </Text>
                    <View style={styles.pbar1}></View>
                </View>
                <View style={styles.skill3}>
                    <Text style={{fontSize:7,marginTop:5,fontWeight:'bold'}}>Software Testing</Text>
                    <View style={styles.pbar2}></View>
                </View>
                <View style={styles.skill4}>
                    <Text style={{fontSize:7,marginTop:5,fontWeight:'bold'}}>C Skills   </Text>
                    <View style={styles.pbar3}></View>
                </View>
            </View>
            <View style={styles.bar1}>

</View>
 <View style={styles.bar2}>

</View>
<Image
        style={styles.img1}
        resizeMode='center'
        
        source={require('./assets/1.png')}
      />
      
      <View style={styles.rightbar}>
                <Text style={styles.rightbarh1}>CONTACT</Text>
                <Text style={styles.rightbarh2}>+92 0331-590127</Text>
                <Text style={styles.rightbarh3}>www.ramza_portfolio.com</Text>
                <Text style={styles.rightbarh4}>ramzabatool@gmail.com </Text>
                
                <View style={styles.iconcontainer}>
                    <Icon name="facebook" style={styles.iconText} color="#1877f2" /> 
                    <Icon name="twitter" style={styles.iconText} color="#1da1f2" /> 
                    <Icon name="instagram" style={styles.iconText} color="#e4405f" /> 
                <Text style={styles.rightbarh5}>
                    @Ramza_Batool28
                </Text>
                </View>
            </View>
            <View style={styles.edudiv}>
            <Text style={{fontWeight:'bold'}}>EDUCATION</Text>
            <Text style={styles.heading}>SSC  ( 2016-2018 )</Text>
            <Text style={{fontSize:5,marginTop:2,lineHeight:7}}>I have done my
            ssc from POF model high school gudwal wah cantt </Text>
            <Text style={styles.heading}>HSSC ( 2018-2020 )</Text>
            <Text style={{fontSize:5,marginTop:2,lineHeight:7}}>I have done my HSSC from  scholars science college wah cantt 2018-2020
            </Text>
            <Text style={styles.heading}>SOFTWARE ENGINEERING (2021-2024)</Text>
            <Text style={{fontSize:5,marginTop:2,lineHeight:7}}>I am currently studying software engineering 
            at COMSATS University Islamabad </Text>
            </View>
            <View style={styles.expdiv}>
            <Text style={{fontWeight:'bold'}}>EXPERIENCE</Text>
            <Text style={styles.heading}>FREELANCER (2022)</Text>
            <Text style={{fontSize:5,marginTop:2,lineHeight:7}}>i am working as a freelancer at fiverr 
            from previous year{"\n"}And now have done many project in different fields. </Text>
            <Text style={styles.heading}>INTERNSHIP (2023)</Text>
            <Text style={{fontSize:5,marginTop:2,lineHeight:7}}>In this year
            i have done an intership at IBM online, {"\n"}and got expertise i different fields. </Text>
            <Text style={styles.heading}>DEVELOPER (2023)</Text>
            <Text style={{fontSize:5,marginTop:2,lineHeight:7}}>i am 
            working as a developer with a forign company named DigitalWorld and working in react-native project </Text>

            </View>
            <View style={styles.refdiv}>
            <Text style={{fontWeight:'bold',marginLeft:-4}}>REFERENCES</Text>
            <Text style={styles.headingref}>Dr. Saleem Khan</Text>
            <Text style={{fontSize:5,marginTop:-2,paddingVertical:2,paddingHorizontal:1,width:100,lineHeight:7}}>
            Professor At CUI Attock.{"\n"}
            PHONE: 0313-0598326{"\n"}
            Email: Dr.Saleem@cuiatk.edu.pk

            </Text>
            <Text style={styles.headingref}>Dr. Khalid Mehmood</Text>
            <Text style={{fontSize:5,marginTop:-2,paddingVertical:2,paddingHorizontal:1,lineHeight:7}}>
            HOD CS Department At CUI Attock.{"\n"}
            PHONE: 0313-0598326{"\n"}
            Email: Dr.khalid@cuiatk.edu.pk
            </Text>
            </View>
        </View>
        </FontLoader>
       
       
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width:365,
        alignSelf:'center',
        backgroundColor:'white',
        flex:1,
        padding:2,
       fontFamily:'Montserrat_900Black',
    },
    leftbar:{
        position: 'absolute',
        left:0,
        top:25,
        width: 150,
        height:700,
        backgroundColor: '#C0D3CB',
    },
    rightbar:{
        position: 'absolute',
        right:0,
        top:22,
        width: 150,
        height:200,
      
    },
    leftbar1:{
        position: 'absolute',
        left:60,
        top:25,
        width: 120,
        height:300,
        backgroundColor: 'rgba(255, 240, 240, 0.80)',
    },
    bar1:{
        position: 'absolute',
        left:15,
        top:380,
        width: 20,
        height:150,
        backgroundColor: 'rgba(255, 240, 240, 0.80)',
    }
    , 
    bar2:{
        position: 'absolute',
        left:15,
        top:550,
        width: 20,
        height:150,
        backgroundColor: 'rgba(255, 240, 240, 0.80)',
    },
    img1:{
        position:'absolute',
        top:50,
        left:20,
        width:195,
        height:100,
        borderWidth:5,
        borderColor:'#C0D3CB',
    }
    ,h1:{
        
        fontSize:20,
        position:'absolute',
        top:150,
        left:10,
        fontFamily:'Montserrat_900Black',
        
    }
    ,h2:{
        position:'absolute',
        top:200,
        left:10,
        fontFamily:'Montserrat_900Black',
        fontSize:9,
    },h3:{
        
        fontSize:12,
        fontWeight:'900',
        position:'absolute',
        top:215,
        left:10,
        
    }
    ,paragraph:{
        width:80,
        fontSize:5.6,
        fontWeight:'100',
        position:'absolute',
        top:235,
        left:10,
        color:'black',
        
    }
    ,rightbarh1:{
        
        fontSize:20,
        fontWeight:'bold',
        position:'absolute',
        top:50,
        left:30,
        fontFamily:'Montserrat_900Black',
        
    }
    ,rightbarh2:{
        position:'absolute',
        top:80,
        left:35,
        fontSize:7,
    }
    
    ,rightbarh3:{
        position:'absolute',
        top:90,
        left:35,
        fontSize:7,
    }
    
    ,rightbarh4:{
        position:'absolute',
        top:100,
        left:35,
        fontSize:7,
    }
    ,
    iconcontainer:{
        position:'absolute',
        top:112,
        left:35,
        width:25,
        padding:0,
        height:10,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconText: {        
        fontSize:6,
        alignItems: 'center',
      }
      ,rightbarh5:{
        position:'absolute',
        top:0,
        left:32,
        fontSize:6,
    },
    langdiv:{
        position: 'absolute',
        left:40,
        top:380,
        width: 100,
        height:150,
        padding:10
    },
    lang1:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between"
    }
    ,
    lang2:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between"
    },
    img:{
        marginLeft:7,
        marginTop:15,
        zIndex:1,
        width:6,
        height:6,
        borderRadius:100,
        backgroundColor:'black'

    },img2:{
        marginLeft:5,
        marginTop:15,
        zIndex:1,
        width:6,
        height:6,
        borderRadius:100,
        backgroundColor:'rgba(255, 240, 240, 0.80)'

    },skildiv:{
        position: 'absolute',
        left:40,
        top:550,
        width: 100,
        height:100,
        padding:10
        
    },
    skill1:{
        display:'flex',
        flexDirection:"column",
        justifyContent:"space-between",
        height:25,
    }
    ,
    skill2:{
        display:'flex',
        flexDirection:"column",
        height:25,
        justifyContent:"space-between"
    }, skill3:{
        display:'flex',
        flexDirection:"column",
        height:25,
        justifyContent:"space-between"
    }
    ,
    skill4:{
        display:'flex',
        flexDirection:"column",
        height:25,
        justifyContent:"space-between"
    },
    pbar:{
        marginTop:7,
        width:90,
        height:4,
        backgroundColor:'#000000',
        borderRightWidth:4,
        borderRightColor:'#FFF0F0',
    }, pbar1:{
        marginTop:7,
        width:90,
        height:4,
        backgroundColor:'#000000',
        borderRightWidth:8,
        borderRightColor:'#FFF0F0',
    }, pbar2:{
        marginTop:7,
        width:90,
        height:4,
        backgroundColor:'#000000',
        borderRightWidth:20,
        borderRightColor:'#FFF0F0',
    }, pbar3:{
        marginTop:7,
        width:90,
        height:4,
        backgroundColor:'#000000',
        borderRightWidth:8,
        borderRightColor:'#FFF0F0',
    },edudiv:{
        position: 'absolute',
        right:0,
        top:390,
        width: 150,
        height:150,padding:10,
        
    }
    ,expdiv:{
        position: 'absolute',
        right:0,
        top:200,
        width: 150,
        height:150,
        padding:10,
        
    }
    ,refdiv:{
        position: 'absolute',
        right:0,
        top:560,
        width: 150,
        height:130,
        padding:12,
        
    }
    ,heading:{
        fontWeight:'bold',
        fontSize:7,
        marginTop:5,
        width:140,
        padding:2,
        backgroundColor: '#C0D3CB',
    }
    ,headingref:{
        fontWeight:'bold',
        fontSize:7,
        marginTop:5,
        width:150,
        marginLeft:-3,
        padding:2,
       
    }
});

//make this component available to the app
export default MyComponent;
