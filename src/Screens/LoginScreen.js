import { Box, Button, Heading, Image, Input, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import Colors from '../Color';
import { Entypo, Ionicons } from '@expo/vector-icons';

function LoginScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image flex={1} alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/coverlogin.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="5"
        px="6"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={5} pt="6">
          {/* EMAIL */}
          <Input
            InputLeftElement={
              <Entypo name="mail" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl="2"
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="********"
            w="70%"
            type="password"
            pl="2"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button 
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%" 
          rounded={50} 
          bg={Colors.main}
          onPress={() => navigation.navigate("Bottom")}
        >
          LOGIN
        </Button>
        <Pressable mt={0.1} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.lightBlack}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;