import styled from "styled-components";

export const Container = styled.main `
width:100%;
max-width:80%;
margin:120px auto 0;

display:flex;
flex-direction: row;
justify-content: space-between;
align-items:center;

`
export const Column = styled.div`
flex:1;

`
export const Title = styled.h2`
width:360px;
font-family: Open Sans;
font-size: 2rem;
font-weight: 700;
line-height: 43.58px;
color: rgba(255, 255, 255, 1);

`
export const Wrapper = styled.div`
max-width:320px;
margin:auto;

`
export const TitleForm = styled.h2
`
font-family: Open Sans;
font-size: 1.8rem;
font-weight: 700;
line-height: 43.58px;
color: rgba(255, 255, 255, 1);
`
export const SubTitleForm = styled.p`
font-family: Open Sans;
font-size: 1.12rem;
font-weight: 400;
line-height: 24.51px;
color: rgba(255, 255, 255, 1);
margin:14px 0;

`
export const Termo = styled.p`
align-items:left;
font-family: Open Sans;
font-size: 1rem;
font-weight: 400;
line-height: 24.51px;
color: rgba(255, 255, 255, 1);
margin-top:20px;
`
export const TitleLogin = styled.div`
width:185px;
font-family: Open Sans;
font-size: 0.87rem;
font-weight: 400;
line-height: 19px;
color: rgba(255, 255, 255, 1);
margin-top:1rem;

a{
text-decoration:none;
color: rgba(0, 255,0, 1);

}

`