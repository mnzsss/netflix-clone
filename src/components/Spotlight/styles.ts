import styled from 'styled-components'

interface ContainerProps {
  background: string
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  .backdrop-effect {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);

    &-infos {
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, #111 30%, transparent 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 60px;
      padding-bottom: 150px;
      padding-top: 70px;

      h1 {
        font-size: 60px;
        font-weight: bold;
        max-width: 40%;
      }

      .infos {
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;

        div + div {
          margin-left: 15px;
        }

        .year,
        .seasons,
        .points {
          display: inline-block;
        }

        .points {
          color: #46d369;
        }
      }

      > span {
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
      }

      .buttons {
        margin-top: 25px;
        display: flex;

        a {
          background: ${({ theme }) => theme.colors.buttonBackground};
          color: ${({ theme }) => theme.colors.text};
          align-items: center;
          appearance: none;
          border: 0;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          opacity: 1;
          padding: 0.8rem 2.4rem 0.8rem 2rem;
          position: relative;
          user-select: none;
          will-change: background-color, color;
          word-break: break-word;
          white-space: nowrap;
          font-weight: bold;
          text-decoration: none;
          transition: background ease 0.2s;

          svg {
            margin-right: 10px;
            width: 15px;
            height: 15px;
          }

          & + a {
            margin-left: 2rem;
          }

          &:hover {
            background: ${({ theme }) => theme.colors.buttonBackgroundHover};
          }

          &.watch {
            background: ${({ theme }) => theme.colors.text};
            color: ${({ theme }) => theme.colors.background};
            transition: opacity ease 0.2s;

            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }

  @media (max-width: 760px) {
    height: 80vh;

    .backdrop-effect {
      &-infos {
        padding: 70px 30px 150px 30px;

        h1 {
          font-size: 40px;
          max-width: 100%;
        }

        .infos {
          font-size: 16px;
        }

        > span {
          font-size: 14px;
          max-width: 100%;
        }

        .buttons {
          a {
            padding: 0.6rem 1rem 0.6rem 0.6rem;
            font-size: 16px;

            & + a {
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }
`

export const PlayButton = styled.a``
