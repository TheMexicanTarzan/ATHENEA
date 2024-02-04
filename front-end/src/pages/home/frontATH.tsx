import React from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Text, Heading, Button, Center, Badge, useColorModeValue } from '@chakra-ui/react';

function Home() {
  const kWCount = 25.5; // Ejemplo de un contador de kW
  const ethCount = 0.005; // Ejemplo de un contador de ETH

  const handleWallet = () => {
    // Lógica para manejar el botón "Wallet"
    console.log('Wallet clicked');
  };

  const handleCheckFNT = () => {
    // Lógica para manejar el botón "Revisar FNT"
    console.log('Revisar FNT clicked');
  };

  const handleCheckBalance = () => {
    // Lógica para manejar el botón "Check Balance"
    console.log('Check Balance clicked');
  };

  const buttonBgColor = useColorModeValue('blue.500', 'blue.700');
  const buttonHoverBgColor = useColorModeValue('blue.600', 'blue.800');
  

  return (
    <Center>
      <Card
        h="500px"
        w="700px"
        backgroundColor="#121831"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        borderWidth={2}
        borderColor="#24F082"
        borderRadius="md"
        boxShadow="md"
        p={4}
      > <Image
      h="200px"
      w="200px"
      src="./img/icono.png"
      borderRadius="md"
    />
       

        <Stack spacing={4} ml={{ base: 0, sm: 4 }}>
          <CardBody>
            <Heading size='lg' color="#24F082">
              Protocol
            </Heading>
            <Text py='2' color="black">
              Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
            </Text>
          </CardBody> 

          <Stack direction="row" justifyContent="space-between" align="center" mt="auto">
            <Button
              variant='solid'
              colorScheme='blue'
              _hover={{ bg: buttonHoverBgColor, transform: 'scale(1.05)' }}
              onClick={handleWallet}
            >
              Wallet
            </Button>
            <Button
              variant='solid'
              colorScheme='blue'
              _hover={{ bg: buttonHoverBgColor, transform: 'scale(1.05)' }}
              onClick={handleCheckFNT}
            >
              Revisar FNT
            </Button>
            <Button
              variant='solid'
              color="#24F082"
              _hover={{ bg: buttonHoverBgColor, transform: 'scale(1.05)' }}
              onClick={handleCheckBalance}
            >
              Check Balance
            </Button>
          </Stack> <Image
          h="200px"
          w="200px"
          src="./img/icono.png"
          borderRadius="md"
        />

          <Stack direction="row" justifyContent="space-between">
            <Badge colorScheme="yellow">kW: {kWCount.toFixed(2)}</Badge>
            <Badge colorScheme="purple">ETH: {ethCount.toFixed(4)}</Badge>
          </Stack>
        </Stack>
      </Card>
    </Center>
  );
}

export { Home };
