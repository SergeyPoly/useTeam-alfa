const variables = {
  backgroundColorCard: '#2C2B5F',
  textColorCardPrise: '#747BAA',
  textColorCardSum: '#8B79FF',

  backgroundColorMain: '#26254F',
  backgroundColorSecondary: '#2C2B5F',
  backgroundColorThird: '#35346C',

  textColorMain: '#fff',
  textColorSecondary: '#CAC9EF',
  textColorThird: '#8988B6',
  textColorWin: '#99E47F',
  textColorDef: '#F65164',
  textColorError: '#F65164',

  widthRightColumn: '75px',
};

export const flexRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'center'
};

export const CurrentTournamentCardStyle = {
  backgroundColor: variables.backgroundColorSecondary,
  borderRadius: '15px',
  margin: '10px',
};

export const CurrentTournamentCardBanner = url => {
  return {
    background: `no-repeat url(${url})`,
    height: '170px',
    borderRadius: '15px',
    backgroundSize: 'cover',
  };
};

export const CurrentTournamentCardDescription = {
  padding: '20px',
};

export const CurrentTournamentCardName = {
  color: variables.textColorMain,
  fontSize: '21px',
  width: '50%',
  height: '73px',
  wordWrap: 'break-word',
  overflow: 'hidden',
  margin:0,
  textAlign:'start'
};

export const CurrentTournamentCardNamePrize = {
  color: variables.textColorCardPrise,
  width: variables.widthRightColumn,
};

export const CurrentTournamentCardSum = {
  color: variables.textColorCardSum,
  fontSize: '18x',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  margin:0
};

export const CurrentTournamentCardGo = {
  color: '#99E47F',
  fontSize: '19px',
  align: 'center',
  margin:0
};

export const CurrentTournamentCardSlots = {
  color: variables.textColorCardPrise,
  width: variables.widthRightColumn,
};

export const CurrentTournamentCardCheckIn = {
  color: variables.textColorCardPrise,
  width: variables.widthRightColumn,
};
