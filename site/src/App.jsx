import * as React from 'react';
import "./App.css";
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DescriptionIcon from '@mui/icons-material/Description';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Body from './components/body.jsx';
import Register from './components/Register.jsx';
import AuctionRegister from './components/AuctionRegister.jsx';
import Teams from './components/Teams.jsx';
import Schedules from './components/Schedules.jsx';
import Variants from './components/News.jsx';
import TermsOfUse from './components/TermsOfUse.jsx';
import Documentation from './components/Docs.jsx';
import ContactUs from './components/Contact.jsx';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Navigation',
  },
  {
    title: 'Home',
    icon: <SportsCricketIcon />,
    segment: 'home',
  },
  {
    segment: 'Register',
    title: 'Register',
    icon: <GroupAddIcon />,
    children: [
      {
        segment: 'Auctioneer',
        title: 'Auctioneer',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Players',
        title: 'Players',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    title: 'Schedules',
    icon: <EventNoteIcon />,
    segment: 'schedules',
  },
  {
    title: 'Teams',
    icon: <EmojiEventsIcon />,
    segment: 'teams',
  },
  {
    title: 'News',
    icon: <NewspaperIcon />,
    segment: 'news',
  },
  {
    segment: 'about',
    title: 'About',
    icon: <InfoIcon />,
    children: [
      {
        segment: 'documentation',
        title: 'Documentation',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'terms-of-use',
        title: 'Terms of Use',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'contact',
    title: 'Contact',
    icon: <ContactPageIcon />,
  },
];

function getTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#0073ff',
      },
      background: {
        default: mode === 'dark' ? '#031d44' : '#e3f2fd',
        paper: mode === 'dark' ? '#052659' : '#bbdefb',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#000000',
        secondary: mode === 'dark' ? '#b0c4de' : '#555555',
      },
    },
  });
}

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  return React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);
}

export default function App () {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const theme = React.useMemo(() => getTheme(mode), [mode]);
  const router = useDemoRouter('/home');

  const toggleTheme = () => {
    setMode((prev) => {
      const nextMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextMode);
      return nextMode;
    });
  };

  const BrandingContent = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Grid container alignItems="center" spacing={1} style={{ flexGrow: 1 }}>
        <Grid item>
          <img src="/assets/images/logo.png" alt="SPL Logo" style={{ height: 36, width: 36, borderRadius: '50%' }} />
        </Grid>
        <Grid item>
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              display: 'none',
            }}
            className="spl-heading-full"
          >
            Sangharsh Premier League
          </span>
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              display: 'inline',
            }}
            className="spl-heading-short"
          >
            SPL 2025
          </span>
        </Grid>
      </Grid>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: theme.palette.text.primary,
          fontSize: '1.5rem',
        }}
        type="button"
      >
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  );

  return (
    <>
      <style>
        {`
        @media (min-width: 600px) {
          .spl-heading-full {
            display: inline !important;
          }
          .spl-heading-short {
            display: none !important;
          }
        }
        `}
      </style>
      <AppProvider navigation={NAVIGATION} router={router} theme={theme}>
        <DashboardLayout
         branding={{
          logo: BrandingContent,
          title: '',
          homeUrl: '/home',
        }}
        >
          {router.pathname === '/home' && <Body />}
          {router.pathname.includes('Players') && <Register />}
          {router.pathname.includes('Auctioneer') && <AuctionRegister />}
          {router.pathname.includes('teams') && <Teams />}
          {router.pathname.includes('schedules') && <Schedules />}
          {router.pathname.includes('news') && <Variants />}
          {router.pathname.includes('terms-of-use') && <TermsOfUse />}
          {router.pathname.includes('documentation') && <Documentation />}
          {router.pathname.includes('contact') && (
            <>
              <ContactUs />
            </>
          )}
        </DashboardLayout>
      </AppProvider>
    </>
  )
}
