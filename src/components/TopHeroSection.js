import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from 'rebass';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { addToMusic } from '../redux/action';
import { UseSelector } from 'react-redux';
const Wrapper = styled(Box)`
  top: 0; 
  left: 0; 
  right: 0;
  z-index: 1;  
  background-color: #1E1E2A;
  color: #FFFFFF;
  padding: 80px 20px;
  text-align: center;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  transition: padding 0.5s, border-radius 0.5s;
 
`;
const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #797993;
  background-color: #1E1E2A;
  color: #FFFFFF;
`;

const Button = styled.button`
  margin: 1rem;
  border-radius: 15px;
  width: 5rem;
  height: 2rem;
  background-color: #797993;
  border: none;
  transition:tranform 0.5s ease;
  &:hover {
    background-color: #606370;
    cursor: pointer;
    transform: scale(1.1); 
  }
`;
const Input_Container =styled(Box)`

display:flex;
flex-direction:column;
align-items:center;

`

const TopHeroSection = () => {
  const dispatch = useDispatch();
  const [formData, setFormData]= useState({
    body:'',
    title:''
  })

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();

    if (!formData.title.trim() || !formData.body.trim()) {
      alert('Do not send empty list as there are no empty songs.');
      return;
    }
    await dispatch(addToMusic(formData.title, formData.body))


    setFormData({
      body:'',
      title:''
    })

  }

  
 
  // const handleClick = () => {
  //   dispatch(addToMusic(product));
  // };

  const handleScroll = () => {
    const wrapper = document.getElementById('top-hero-wrapper');
    if (wrapper) {
      const scrollPos = window.scrollY;
      if (scrollPos > 100) {
        wrapper.style.padding = '20px';
        wrapper.style.borderBottomLeftRadius = '0%';
        wrapper.style.borderBottomRightRadius = '0%';
      } else {
        wrapper.style.padding = '80px 20px';
        wrapper.style.borderBottomLeftRadius = '50% 20%';
        wrapper.style.borderBottomRightRadius = '50% 20%';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Wrapper id="top-hero-wrapper">
      <Heading fontSize={[32, 48, 64]} mb={2} fontFamily="FF Dagny, sans-serif">
        Welcome to Musicify
      </Heading>
      <Text fontSize={[16, 20, 24]} mb={1}>
        Discover, Listen, and Enjoy!
      </Text>
      <form onSubmit={handleSubmit}>
        <Input_Container>
        <Input type='text' name='title'
         placeholder=' Artist name'
         value={formData.title}
         onChange={handleChange}/>
        <Input type='text' name='body'
         placeholder='Title'
         value={formData.body}
         onChange={handleChange}/>
      <Button type='submit'>
        Add music 
        </Button>
        </Input_Container>




      </form>
    </Wrapper>
  );
};

export default TopHeroSection;
