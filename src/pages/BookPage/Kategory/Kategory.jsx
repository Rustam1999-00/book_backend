import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Search from '../../../assets/images/Searchimg.png'
import { HomeFromWerapper,HomeFromWerapperForm,HomeFromWerapperTitle,HomeFromLider,HomeFromInput,HomeFromButton } from './HomeFormStyled'



// ==================================


import { KategoryWrapper, KategorTitle, KategoryList, KategoryItem, KategoryButton, KategoryCardList, KategoryCardItem, KategoryCardP,KategoryCardNavLink } from './KategoryStyled'

function Kategory() {

    const localData = localStorage.getItem('token')
    const inputRef=useRef()
    const [card,setCard]=useState([])

    const hendleSubmit = (evt)=>{
        evt?.preventDefault();
        const inputVal = inputRef.current?.value
        console.log(inputVal);
       const Search = async()=>{
         const data = await axios.get( 'http://localhost:5000/book/search?book='+inputVal , {
            headers: {
                Authorization: localData
            }
        })
            console.log(data);
            if(data.status === 201){
                setCard(data.data)
            }
       }
       Search()
    }
    useEffect(()=>{
        hendleSubmit()
  },[])

// ================================


    const hendleOpen = () => {
        fetch('http://localhost:5000/book/genreId/1', {

            method: 'GET',
            headers: {
                Authorization: localData
            },

        })
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((err) => console.log(err))
        console.log(card);
    }
    const hendleOpen2 = () => {
        fetch('http://localhost:5000/book/genreId/2', {

            method: 'GET',
            headers: {
                Authorization: localData
            },

        })
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((err) => console.log(err))
        console.log(card);
    }
    const hendleOpen3 = async () => {
        await fetch('http://localhost:5000/book/genreId/3', {

            method: 'GET',
            headers: {
                Authorization: localData
            },

        })
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((err) => console.log(err))
        console.log(card);
    }
    const hendleOpen4 = async () => {
        await fetch('http://localhost:5000/book/genreId/4', {

            method: 'GET',
            headers: {
                Authorization: localData
            },

        })
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((err) => console.log(err))
        console.log(card);
    }
    return (
        <>
        <HomeFromWerapper>
<HomeFromWerapperForm  onChange={hendleSubmit}>
     <HomeFromWerapperTitle>Qidirish</HomeFromWerapperTitle>
      <HomeFromLider >
        <HomeFromInput ref={inputRef} type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
        <HomeFromButton type='submit'> <img src={Search} width='19' height='19' alt='Search img' />Izlash</HomeFromButton>
      </HomeFromLider>
     </HomeFromWerapperForm>
     </HomeFromWerapper>
            <KategoryWrapper>
                <KategorTitle>Asosiy kategoriyalar</KategorTitle>
                <KategoryList>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen}>
                            Temuriylar davri
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen2} >
                            Jadid adabiyoti
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen3}>
                            Sovet davri
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen4}>
                            MustaqilKategoryItemk davri
                        </KategoryButton>
                    </KategoryItem>
                </KategoryList>



            </KategoryWrapper>
            <KategoryCardList>
                {
                    card.map((cards) => (
                        <KategoryCardItem>
                             <KategoryCardNavLink to={'/BooksSinglePage'+cards.genre_id+cards.title }>
                            <img src={'http://localhost:5000/' + cards.image} width='250' height='300' alt='cardimg'/>
                            <KategorTitle>
                                {cards.title}
                            </KategorTitle>
                            <KategorTitle>
                                {cards.price}
                            </KategorTitle>
                            </KategoryCardNavLink>
                        </KategoryCardItem>
                    ))
                }

            </KategoryCardList>

        </>
    )
}

export default Kategory
