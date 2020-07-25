import * as S from './styled';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>TypeScript, NextJs e Styled Components</S.Description>
    <S.Illustrator
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com códigos."
    />
  </S.Wrapper>
);

export default Main;
