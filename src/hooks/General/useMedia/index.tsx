import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isBP1000 = useMediaQuery({
    query: '(max-width:1000px)',
  });

  const isBP960 = useMediaQuery({
    query: '(max-width:960px)',
  });

  const isBP950 = useMediaQuery({
    query: '(max-width:950px)',
  });

  const isBP896 = useMediaQuery({
    query: '(max-width:896px)',
  });

  const isBP875 = useMediaQuery({
    query: '(max-width:875px)',
  });

  const isBP860 = useMediaQuery({
    query: '(max-width:860px)',
  });

  const isBP746 = useMediaQuery({
    query: '(max-width:746px)',
  });

  const isBP700 = useMediaQuery({
    query: '(max-width:700px)',
  });

  const isBP640 = useMediaQuery({
    query: '(max-width:640px)',
  });

  const isBP540 = useMediaQuery({
    query: '(max-width:540px)',
  });

  const isBP524 = useMediaQuery({
    query: '(max-width:524px)',
  });

  const isBP510 = useMediaQuery({
    query: '(max-width:510px)',
  });

  const isBP380 = useMediaQuery({
    query: '(min-width:380px)',
  });

  const isBP254 = useMediaQuery({
    query: '(min-width:254px)',
  });

  return {
    isBP1000,
    isBP960,
    isBP950,
    isBP896,
    isBP875,
    isBP860,
    isBP700,
    isBP640,
    isBP746,
    isBP540,
    isBP524,
    isBP510,
    isBP380,
    isBP254,
  };
};
