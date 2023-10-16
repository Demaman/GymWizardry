import styled from "styled-components";

interface ExerciseCardProps {
  name: string;
  image_url: string;
  category: string;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 200px;

  /* Use the 'img' selector to target the 'img' tag inside 'Card' */
  img {
    width: 200px;
    height: 230px;
  }

  h3 {
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: var(--text-dark-second);
  }

  div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        > div {
            width: 170px;
            height: 1px;
            margin: 0px 8px; /* Correct the 'magin' typo */
            background: var(--shapes);
          }
    }
`;

export function ExerciseCard(props: ExerciseCardProps) {
  return (
    <Card>
      <img src={props.image_url} alt={props.name} />
      <div>
          <h3>{props.name}</h3>
          <div></div>
      </div>
    </Card>
  );
}
