import { Account } from '@gear-js/react-hooks';
import { Heading } from '@chakra-ui/react';
import { AccountButton } from '../account-button';
import styles from './Wallet.module.scss';


type Props = {
  balance: Account['balance'];
  address: string;
  name: string | undefined;
  onClick: () => void;
};

function Wallet({ balance, address, name, onClick }: Props) {
  return (
    <div className={styles.wallet}style={{ boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.5)',borderRadius:"20px"}}>
      <p className={styles.balance} >
      <Heading textColor="white" textShadow="1px 1px 2px black" >
  {balance.value} 
</Heading> 
      </p><Heading   textColor="#00F01E" textShadow="1px 1px 2px black" style={{ marginRight: '20px' }}>{balance.unit}</Heading>
      <AccountButton address={address} name={name} onClick={onClick} />
    </div>
  );
}

export { Wallet };
