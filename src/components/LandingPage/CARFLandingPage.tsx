import React from 'react';
import { SupportButton } from '@backstage/core-components';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { CARFLandingPageCard } from './CARFLandingPageCard';
import TollgateVector from '../../img/TollgateVector.png';
import StatusVector from '../../img/StatusVector.png';
import ReportVector from '../../img/ReportVector.png';
import UserGuideVector from '../../img/UserGuideVector.png';
import {
  PageWithHeader
} from '@backstage/core-components';

const cardsData = [
  {
    cardImageRoute: `${TollgateVector}`,
    backgroundColor: '#e3f1e9',
    cardText: 'See the pre-requisites for each tollgate.',
    cardTitle: 'Tollgate Pre-Requisites',
    cardLink: '#',
  },
  {
    cardImageRoute: `${StatusVector}`,
    backgroundColor: '#fff5e2',
    cardText:
      'Tollgate status for all applications in scope for architecture review.',
    cardTitle: 'Tollgate Status',
    cardLink: '#',
  },
  {
    cardImageRoute: `${ReportVector}`,
    backgroundColor: '#dff0fc',
    cardText: 'Sprints, Findings, Certified Architecture and other reports.',
    cardTitle: 'Self Serve Reports',
    cardLink: '#',
  },
  {
    cardImageRoute: `${UserGuideVector}`,
    backgroundColor: '#f2e1f3',
    cardText: 'Guidance on how to complete each tollgate pre-requisites.',
    cardTitle: 'User Guide',
    cardLink: '#',
  },
];
export const CARFLandingPage = () => {
  return (
    <PageWithHeader
      title={`CARF`}
      subtitle={'Cloud Architecture Review'}
      themeId="home"
    >
      <Container maxWidth="xl" style={{ width: '100%', padding: '0px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: '25px',
            backgroundColor: '#0C2340',
          }}
        >
          <div style={{ backgroundColor: '#ffff', marginTop: '50px' }}>
            {' '}
            <SupportButton />
          </div>
        </div>
        <Typography
          component="div"
          style={{
            width: '100%',
            padding: '30px 0px 80px 186px',
            backgroundColor: '#0C2340',
            color: '#ffff',
          }}
        >
          <Box fontSize="h2.fontSize" textAlign="left">
            Architecture Review Framework
          </Box>

          <Box fontSize="h5.fontSize" textAlign="left" style={{ width: '70%' }}>
            Ensures that any solutions being delivered are well designed,
            architected, must be of high quality and meet all applicable Bank
            standards
          </Box>
        </Typography>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '70px',
            margin: '0px auto',
          }}
        >
          {cardsData.map(cardData => (
            <CARFLandingPageCard
              cardImageRoute={cardData.cardImageRoute}
              backgroundColor={cardData.backgroundColor}
              cardText={cardData.cardText}
              cardTitle={cardData.cardTitle}
            />
          ))}
        </Box>
      </Container>
      </PageWithHeader>
  );
};
