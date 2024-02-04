import { Card, CardHeader, CardBody, CardFooter,  Image,Stack, Text, Heading, Button, Center } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import './BalanceEffect.css';
import './MetalicBackground.css';

function Logo() {
  return (
    <Link className="metaliccard" to="/">
        <Image
    
    src="./img/icono.png"
    
  />
    </Link>
  );
}

export { Logo };
