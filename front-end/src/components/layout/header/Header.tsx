import { Card, CardHeader, CardBody, CardFooter,  Image,Stack, Text, Heading, Button, Center } from '@chakra-ui/react'
import { Account } from './account';
import styles from './Header.module.scss';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={styles.header}>
       <Image h="90px" w="90px"
    
    src="./img/icono.png"
    
  />
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
