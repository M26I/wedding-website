// File: CardStyles.js
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;

  .card {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 20px;
    transform-style: preserve-3d;
    perspective: 1000px;

    @media only screen and (max-width: 375px) {
      width: 260px;
      height: 260px;
    }

    &:hover {
      .box {
        transform: rotateY(180deg);
      }
    }

    .box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: 1s ease;

      .imgBox {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: rotateY(0deg);
        transition: 1s ease;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        h2 {
          color: #ffffff;
          font-size: 40px;
          font-weight: bold;
          letter-spacing: 1px;
          text-align: center;
          transform: translateZ(50px); /* Adjust the translateZ value for better visibility */
        }
      }

      .contentBox {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1D3539;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transform: rotateY(180deg);

        display: flex;
        align-items: center;
        justify-content: center;

        div {
          transform-style: preserve-3d;
          padding: 20px;
          background: #ffffff;
          transform: translateZ(100px);

          h2 {
            color: #1D3539;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 1px;
          }

          p {
            line-height: 1.5;
          }
          
        }
        
      }
    }
  }
`;
