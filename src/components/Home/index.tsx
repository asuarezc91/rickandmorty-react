import React, { useState, useEffect } from "react";
import { Box, ContentBox, Link, MainContainer, TextBox, TittleBox } from "./styles";

export const Home = () => {
    const [listCharacters, setCount] = useState([]);
    const fetchList = async () => {
        const apiCall = await fetch("https://rickandmortyapi.com/api/character/");
        const characters = await apiCall.json();
        console.log(characters.results);
        setCount(characters.results);
    };

    useEffect(() => {
        fetchList();
    }, []);


    return (
        <MainContainer>
            {listCharacters.map(item => (
                <Box>
                    <TittleBox>
                        {/* <TextBox>{item.name}</TextBox> */}
                    </TittleBox>
                    <ContentBox>
                        {/* <TextBox>Birth year: {item.name}</TextBox>
              <TextBox>Gender: {item.}</TextBox>
              <TextBox>Height:{item.}</TextBox> */}

                    </ContentBox>
                </Box>
            ))}
        </MainContainer>
    );




}; 