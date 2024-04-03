import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from 'rebass';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { getMusic, removeMusic, updateMusic } from '../redux/action';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 3rem;
`;

const MusicItem = styled(Box)`
  padding: 3rem;
  display: grid; /* Change to display: grid */
  grid-template-columns: auto 200px; /* Set a fixed width for the buttons */
  grid-gap: 1rem; /* Add gap between columns */
  background-color: #1e1e2a;
  margin: 1rem;
  border-radius: 50px;
  color: #ffffff;
`;

const Content = styled(Box)`
  align-text:left;
`;

const TitleText = styled(Text)`
  padding:1rem;
  text-align: left; /* Align text to the left */
  font-weight: bold;
`;

const DescriptionText = styled(Text)`
  text-align: left;
  padding:1rem;
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

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left:auto;
  justify-content:center;
`;


const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #797993;
  background-color: #1E1E2A;
  color: #FFFFFF;
`;

const Submit = styled.button`
  margin: 1rem;
  font-weight:200;
  border-radius: 15px;
  color:#1E1E2A;
  width: 5rem;
  height: 2rem;
  background-color: #FFFFFF;
  border: none;
  transition:tranform 0.5s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1); 
  }
`;

const SongList = () => {
  const dispatch = useDispatch();
  const musicList = useSelector(state => state.musicData);
  const [updatedData, setUpdatedData] = useState({});
  const [showForm, setShowForm] = useState({});

  useEffect(() => {
    dispatch(getMusic());
  }, [dispatch]);

  const handleRemoveMusic = (item) => {
    dispatch(removeMusic(item));
  };

  const handleUpdateButtonClick = (item) => {
    setShowForm({ [item.id]: true });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (item) => {
    dispatch(updateMusic(item.id, updatedData));
    setShowForm({ [item.id]: false });
    setUpdatedData({});
  };

  return (
    <Container>
      <Box className='music_container'>
        {musicList.map((item) => (
          <MusicItem key={item.id}>
            <Content>
              <TitleText>Artist Name: {item.title}</TitleText>
              <DescriptionText>Title: {item.body}</DescriptionText>
            </Content>
            <ButtonContainer>
              <Button onClick={() => handleRemoveMusic(item)}>Remove</Button>
              <Button onClick={() => handleUpdateButtonClick(item)}>Update</Button>
              {showForm[item.id] &&
                <form onSubmit={() => handleSubmit(item)}>
                  <Input type="text" name="title" value={updatedData.title || item.title} onChange={handleInputChange} />
                  <Input type="text" name="body"   value={updatedData.body || item.body} onChange={handleInputChange} />
                  <Submit type="submit">Submit</Submit>
                </form>
              }
            </ButtonContainer>
          </MusicItem>
        ))}
      </Box>
    </Container>
  );
};

export default SongList;
