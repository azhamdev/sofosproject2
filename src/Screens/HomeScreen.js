import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from 'native-base'
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#9E579D",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#FFF",
               height:"22%",
               borderBottomLeftRadius:50,
               borderBottomRightRadius:50,
               paddingHorizontal:10,
               paddingTop:50
           }}>
            <View style={{
              flexDirection:"row",
              alignItems:"center",
              marginTop:10,
            }}>
              <Image
                source={require('../../assets/favicon2.png')}
                  style={{height:100,width:100}}
              />
              <View style={{
                flexDirection:"column",
                alignItems:"center",
                width:"100%"
              }}>
                <View style={{width:"50%"}}>
                  <Text style={{
                    fontSize:21,
                    color:"#9E579D",
                    fontWeight:"bold"
                  }}>
                    SOFOSROBOTICS
                  </Text>
                </View>
                <View style={{width:"50%"}}>
                  <Text style={{
                    fontSize:20,
                    color:"#9E579D",
                    fontWeight:"bold"
                  }}>
                    ROBOTICS & AUTOMATIONS
                  </Text>
                </View>
              </View>
            </View>
           </View>
           <ScrollView>
            <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center"
                }}>
                    <View style={{width:"50%",paddingTop:20, paddingBottom:10}}>
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:25,
                              color:"#FFF"
                          }}>Recommended</Text>
                    </View>
              </View>
              <ScrollView 
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={{height:400}}
                  >
                      <LinearGradient
                          colors={["#9E579D", "transparent"]}
                          style={{
                              position:"absolute",
                              left:0,
                              right:0,
                              height:350,
                              marginTop:100,
                              top:-100
                          }}
                      />
                      <TouchableOpacity 
                          onPress={()=>navigation.navigate("Detail")}
                          style={{
                              height:250,
                              elevation:2,
                              backgroundColor:"#FFF",
                              marginLeft:20,
                              marginTop:20,
                              borderRadius:15,
                              marginBottom:10,
                              width:160
                          }}
                      >
                          <Image
                              source={require('../../assets/images/1.png')}
                          />
                          <View style={{
                              flexDirection:"row",
                              paddingTop:10,
                              paddingHorizontal:10
                          }}>
                              <Text style={{
                                  fontWeight:"bold"
                              }}>ROBOT AVG KAIBO</Text>
                          </View>
                          <Text style={{
                              paddingHorizontal:10,
                              fontWeight:"bold",
                              color:"#9E579D",
                              paddingTop:3
                          }}>
                              Rp 5.000.000
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=>navigation.navigate("Detail")}
                          style={{
                              height:250,
                              elevation:2,
                              backgroundColor:"#FFF",
                              marginLeft:20,
                              marginTop:20,
                              borderRadius:15,
                              marginBottom:10,
                              width:160
                          }}
                      >
                          <Image
                              source={require('../../assets/images/1.png')}
                          />
                          <View style={{
                              flexDirection:"row",
                              paddingTop:10,
                              paddingHorizontal:10
                          }}>
                              <Text style={{
                                  fontWeight:"bold"
                              }}>ROBOT AVG KAIBO</Text>
                          </View>
                          <Text style={{
                              paddingHorizontal:10,
                              fontWeight:"bold",
                              color:"#9E579D",
                              paddingTop:3
                          }}>
                              Rp 5.000.000
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=>navigation.navigate("Detail")}
                          style={{
                              height:250,
                              elevation:2,
                              backgroundColor:"#FFF",
                              marginLeft:20,
                              marginTop:20,
                              borderRadius:15,
                              marginBottom:10,
                              width:160
                          }}
                      >
                          <Image
                              source={require('../../assets/images/1.png')}
                          />
                          <View style={{
                              flexDirection:"row",
                              paddingTop:10,
                              paddingHorizontal:10
                          }}>
                              <Text style={{
                                  fontWeight:"bold"
                              }}>ROBOT AVG KAIBO</Text>
                          </View>
                          <Text style={{
                              paddingHorizontal:10,
                              fontWeight:"bold",
                              color:"#9E579D",
                              paddingTop:3
                          }}>
                              Rp 5.000.000
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=>navigation.navigate("Detail")}
                          style={{
                              height:250,
                              elevation:2,
                              backgroundColor:"#FFF",
                              marginLeft:20,
                              marginTop:20,
                              borderRadius:15,
                              marginBottom:10,
                              width:160
                          }}
                      >
                          <Image
                              source={require('../../assets/images/1.png')}
                          />
                          <View style={{
                              flexDirection:"row",
                              paddingTop:10,
                              paddingHorizontal:10
                          }}>
                              <Text style={{
                                  fontWeight:"bold"
                              }}>ROBOT AVG KAIBO</Text>
                          </View>
                          <Text style={{
                              paddingHorizontal:10,
                              fontWeight:"bold",
                              color:"#9E579D",
                              paddingTop:3
                          }}>
                              Rp 5.000.000
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=>navigation.navigate("Detail")}
                          style={{
                              height:250,
                              elevation:2,
                              backgroundColor:"#FFF",
                              marginLeft:20,
                              marginTop:20,
                              borderRadius:15,
                              marginBottom:10,
                              width:160
                          }}
                      >
                          <Image
                              source={require('../../assets/images/1.png')}
                          />
                          <View style={{
                              flexDirection:"row",
                              paddingTop:10,
                              paddingHorizontal:10
                          }}>
                              <Text style={{
                                  fontWeight:"bold"
                              }}>ROBOT AVG KAIBO</Text>
                          </View>
                          <Text style={{
                              paddingHorizontal:10,
                              fontWeight:"bold",
                              color:"#9E579D",
                              paddingTop:3
                          }}>
                              Rp 5.000.000
                          </Text>
                      </TouchableOpacity>
              </ScrollView>
              <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center"
                }}>
                  <View style={{width:"50%", paddingBottom:10}}>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:25,
                        color:"#FFF"
                      }}>Build Your Robot</Text>
                  </View>
              </View>
              <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center"
                }}>
                <TouchableOpacity 
                  onPress={()=>navigation.navigate("Mekanik")}>
                    <View style={{
                      alignItems:"center",
                      justifyContent:"center",
                      height:100,
                      width:100,
                      borderRadius:15,
                      backgroundColor:"#FFFFFF",
                      marginLeft:20
                    }}>
                        <FontAwesome5 name="robot" size={50} color="black" />
                        <Text style={{
                          fontSize:12,
                          paddingTop:5
                        }}>ROBOTICS</Text>
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>navigation.navigate("Mekanik")}>
                    <View style={{
                      alignItems:"center",
                      justifyContent:"center",
                      height:100,
                      width:100,
                      borderRadius:15,
                      backgroundColor:"#FFFFFF",
                      marginLeft:20
                    }}>
                        <MaterialCommunityIcons name="robot-industrial" size={50} color="black" />
                        <Text style={{
                          fontSize:12,
                          paddingTop:5
                        }}>AUTOMATIONS</Text>
                    </View> 
                </TouchableOpacity>
              </View>
              <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center"
                }}>
                  <View style={{width:"50%", paddingBottom:10}}>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:25,
                        color:"#FFF"
                      }}>Produk Lainnya</Text>
                  </View>
              </View>
              <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center"
                }}>
                <TouchableOpacity 
                  onPress={()=>navigation.navigate("Mekanik")}>
                    <View style={{
                      alignItems:"center",
                      justifyContent:"center",
                      height:100,
                      width:100,
                      borderRadius:15,
                      backgroundColor:"#FFFFFF",
                      marginLeft:20
                    }}>
                        <Entypo name="blackboard" size={50} color="black" />
                        <Text style={{
                          fontSize:12,
                          paddingTop:5
                        }}>CONSULT & TRAINING</Text>
                    </View> 
                </TouchableOpacity>
              </View>
            </ScrollView>
        </View>
    )
}
export default HomeScreen;