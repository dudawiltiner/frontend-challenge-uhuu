import { styled } from '@/../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  alignItems: 'top',
  gap: '8px',
  margin: '72px 112px 0px 527px',
});

export const ScoreContainer = styled('div', {
  width: '100%',
  height: '60px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: '12px',
});

export const OverviewContainer = styled('div', {
  marginTop: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const CrewContainer = styled('div', {
  maxWidth: '600px',
  marginTop: '16px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'left',
  alignItems: 'top',
  gap: '32px',
});

export const Crew = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  alignItems: 'top',
  gap: '8px',
});
