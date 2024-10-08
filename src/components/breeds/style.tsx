import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const PostWrapper = styled.div<{ backgroundimage: string }>`
  display: flex;
  flex-direction: column;
  width: 390px;
  border-radius: 10px;
  .dog-image {
    cursor: pointer;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
    height: 250px;
    background-image: url(${(props) => props.backgroundimage});
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
  }
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 310px;
  overflow-y: auto;
`;

export const InfoField = styled.div`
  display: flex;
  flex-direction: column;
  color: #49464f;
`;

export const Heading = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const SubHeading = styled.div`
  font-size: 14px;
`;

export const LoaderAndFinishPostsStyle = styled.div`
  text-align: center;
`;

export const TotalBreedsText = styled.div`
  padding: 40px 40px 0px 40px;
`;
