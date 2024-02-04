import React from 'react';
import { Card, CardBody, Image, Stack, Text, Heading, Button, Center, Badge, useColorModeValue } from '@chakra-ui/react';
import { ComprarNFT } from './ComprarNFT';
import{CollectPhotons} from './CollectPhotons';

function Home() {
  const kWCount = 25.5;
  const ethCount = 100.005;

  const handleWallet = () => {
    console.log('Wallet clicked');
  };

  const handleCheckFNT = () => {
    console.log('Revisar NFT clicked');
  };

  const handleCheckBalance = () => {
    console.log('Check Balance clicked');
  };

  const buttonBgColor = useColorModeValue('#1A1A1A', '#1A1A1A');
  const buttonHoverBgColor = useColorModeValue('#333333', '#333333');

  return (
    <Center>
      <Card
        h="500px"
        w="1081px"
        backgroundColor="black"
        direction={{ base: 'column', sm: 'row' }}
        borderRadius={20}
        boxShadow="2px 6px 8px rgba(0, 0, 0, 0.5)"
        p={8}
      >
        <Stack spacing={7} ml={{ base: 0, sm: 4 }} textAlign="center" width="100%" maxWidth="1000px" mx="auto">
          <CardBody>
            <Heading size='lg' color="#00C595" textShadow="1px 1px 2px black" fontWeight="bold" borderRadius={20}>
              Overview Panel
            </Heading>
            <Text py='5' color="white" textShadow="1px 1px 2px black" boxShadow="2px 6px 8px rgba(0, 0, 0, 0.5)">
              Check how much energy apolo produces and see how much PT do you have
            </Text>
            <Image
              mx="auto"
              h="200px"
              w="350px"
              src="./img/lgb.png"
              borderRadius="md"
            />
            <Stack direction="row" justifyContent="space-between">
              <Badge colorScheme="yellow" fontSize="30px" fontWeight="bold" width="200px" textTransform="uppercase">
                kWh:
                 {kWCount.toFixed(2)}
              </Badge>
              <Badge colorScheme="purple" fontSize="30px" fontWeight="bold" width="200px" textTransform="uppercase">
                VARA: 
                {ethCount.toFixed(4)}
              </Badge>
            </Stack>
          </CardBody>

          <Stack direction="row" justifyContent="space-between">
            <ComprarNFT />
            <CollectPhotons/>

           
          </Stack>
        </Stack>
      </Card>
    </Center>
  );
}

export { Home };
