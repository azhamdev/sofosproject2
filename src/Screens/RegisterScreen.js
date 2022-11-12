import { Box, Button, Heading, Image, Input, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import Colors from '../Color';
import { FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';

function RegisterScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image flex={1} alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/coverregister.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="10"
        px="6"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>REGISTER</Heading>
        <VStack space={5} pt="6">
          {/* USERNAME */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="username"
            w="70%"
            pl="2"
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
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
          SIGN UP
        </Button>
        <Pressable mt={0.1} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.lightBlack}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;