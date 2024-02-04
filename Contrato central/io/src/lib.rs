#![no_std]

use gstd::{ prelude::*, ActorId };
use gmeta::{In,Out,InOut,Metadata};

#[derive(Encode, Decode, TypeInfo,  Clone)]
pub enum Action {
    CollectPhotons, 
}


#[derive(Default, Encode, Decode, Clone, TypeInfo)]
pub struct CustomInput {
    firstfield: String,
    secondfield: u128,
    owners: ActorId,
   
}

#[derive(Encode, Decode, TypeInfo, Hash, PartialEq, PartialOrd, Eq, Ord, Clone, Copy, Debug)]
pub enum  Event {
    
    CollectPhotons
}

#[derive(Encode, Decode, TypeInfo)]
pub enum FTEvent {
    Ok,
    Err,
    Balance(u128),
    PermitId(u128),
}

#[derive(Debug, Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum FTAction {
    Mint(u128),
    Burn(u128),
    Transfer {
        from: ActorId,
        to: ActorId,
        amount: u128,
    },
    Approve {
        to: ActorId,
        amount: u128,
    },
    TotalSupply,
    BalanceOf(ActorId),
}

#[derive(Default, Clone, Encode, Decode, TypeInfo)]
pub struct IoAtenea {
   pub firstfield: String,
   pub secondfield: u128,
   pub owners: Vec<(ActorId,u128)>
   
}

#[derive(Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct InitStruct {
   
    
    pub ft_program_id: ActorId,
    pub nft_program_id: ActorId
}


pub struct ContractMetadata;

impl Metadata for ContractMetadata{
     type Init = In<InitStruct>;
     type Handle = InOut<Action,Event>;
     type Others = ();
     type Reply=();
     type Signal = ();
     type State = Out<IoAtenea>;

}