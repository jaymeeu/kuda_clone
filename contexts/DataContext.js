import React,{createContext, useState, useEffect} from 'react'
import ACCESS from '../assets/ACCESS.jpeg'
import GTBANK from '../assets/GTBANK.jpeg'
import SEND from '../assets/SEND.jpeg'

export const DataContext = createContext();

export const DataProvider = ({children})=>{

    useEffect(() => {
        setData_set(defaultData)
    }, [])

    const [data_set, setData_set] = useState({})

    const defaultData = {
        user: {
            firstname: 'Jamiu',
            lastname: 'Abdulrasaq',
        },
        transaction_history:[
            {
            date:'1 Jan 2022',
            transaction:[
                {
                    bank:SEND,
                    type:'out',
                    description:'ABDULRASAQ JAMIU',
                    amt: '25,050.00',
                    time:'12:00PM',
                    payment_method:"Money sent",
                    fee:'0.00'
                },
                {
                    bank:ACCESS,
                    type:'in',
                    description:'RASAQ JAMIU',
                    amt: '25,000.00',
                    time:'12:00PM',
                    payment_method:"Money recieved",
                    fee:'0.00'
                }]
            },
            {
                date:'2 Jan 2022',
                transaction:[
                    {
                        bank:SEND,
                        type:'out',
                        description:'ABDULRASAQ JAMIU',
                        amt: '25,050.00',
                        time:'12:00PM',
                        payment_method:"Money sent",
                        fee:'0.00'
                    }]
                },
                {
                    date:'3 Jan 2022',
                    transaction:[
                        {
                            bank:SEND,
                            type:'out',
                            description:'ABDULRASAQ JAMIU',
                            amt: '25,050.00',
                            time:'12:00PM',
                            payment_method:"Money sent",
                            fee:'0.00'
                        },
                        {
                            bank:ACCESS,
                            type:'in',
                            description:'RASAQ JAMIU',
                            amt: '25,000.00',
                            time:'12:00PM',
                            payment_method:"Money recieved",
                            fee:'0.00'
                        },{
                            bank:GTBANK,
                            type:'in',
                            description:'RASAQ JAMIU',
                            amt: '25,000.00',
                            time:'12:00PM',
                            payment_method:"Money recieved",
                            fee:'0.00'
                        }]
                    },
                    {
                        date:'4 Jan 2022',
                        transaction:[
                            {
                                bank:SEND,
                                type:'out',
                                description:'ABDULRASAQ JAMIU',
                                amt: '25,050.00',
                                time:'12:00PM',
                                payment_method:"Money sent",
                                fee:'0.00'
                            },
                            {
                                bank:ACCESS,
                                type:'in',
                                description:'RASAQ JAMIU',
                                amt: '25,000.00',
                                time:'12:00PM',
                                payment_method:"Money recieved",
                                fee:'0.00'
                            }]
                        },
                        {
                            date:'5 Jan 2022',
                            transaction:[
                                {
                                    bank:SEND,
                                    type:'out',
                                    description:'ABDULRASAQ JAMIU',
                                    amt: '25,050.00',
                                    time:'12:00PM',
                                    payment_method:"Money sent",
                                    fee:'0.00'
                                }]
                            },
                            {
                                date:'7 Jan 2022',
                                transaction:[
                                    {
                                        bank:SEND,
                                        type:'out',
                                        description:'ABDULRASAQ JAMIU',
                                        amt: '25,050.00',
                                        time:'12:00PM',
                                        payment_method:"Money sent",
                                        fee:'0.00'
                                    },
                                    {
                                        bank:ACCESS,
                                        type:'in',
                                        description:'RASAQ JAMIU',
                                        amt: '25,000.00',
                                        time:'12:00PM',
                                        payment_method:"Money recieved",
                                        fee:'0.00'
                                    },{
                                        bank:GTBANK,
                                        type:'in',
                                        description:'RASAQ JAMIU',
                                        amt: '25,000.00',
                                        time:'12:00PM',
                                        payment_method:"Money recieved",
                                        fee:'0.00'
                                    }]
                                },
            
        ]
    }

    return(
        <DataContext.Provider value={{
            data_set
        }}>
            {children}
        </DataContext.Provider>
    )
}
