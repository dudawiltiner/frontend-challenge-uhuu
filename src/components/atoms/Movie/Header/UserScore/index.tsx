import { theme } from '@/../stitches.config';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import * as S from './styles';
import { UserScoreProps } from './types';

export default function UserScore({ percentage }: UserScoreProps) {
  return (
    <S.Container>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        className="circular-progress"
        background
        styles={buildStyles({
          rotation: 0.25,
          pathTransitionDuration: 0.5,
          pathColor: `${theme.colors.green}`,
          textColor: `${theme.colors.green}`,
          trailColor: 'transparent',
          backgroundColor: 'rgba(255, 255, 255, 0.10)',
        })}
      />
      <S.Text>Avaliação dos usuários</S.Text>
    </S.Container>
  );
}
