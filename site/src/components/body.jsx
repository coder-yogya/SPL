import React from 'react';
import { Box, Typography, Grid, Divider, Stack } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import FemaleIcon from '@mui/icons-material/Female';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function Body() {
  return (
    <Box
      sx={{
        px: 6,
        py: 8,
        maxWidth: '100%',
        mx: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 3,
        boxShadow: '0 0 40px rgba(0, 200, 255, 0.08)',
        overflowX: 'hidden',
        '@media (max-width: 600px)': {
          px: 2,
          maxWidth: '100vw',
          overflowX: 'hidden'
        }
      }}
    >
      {/* Welcome, Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome to Sangharsh Premier League 2025
          </Typography>
          <Typography variant="h6" color="text.secondary">
            India’s biggest cricketing event — Where legends made and Champions Rise . Get ready for the ultimate showdown!
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Welcome to INDIA'S <b>CRICKET MAHAKUMBH !!!!!</b>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Box
              sx={{
                flex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '12px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                p: 1,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 80px rgba(0, 255, 255, 0.4)',
                }
              }}
            >
              <img src="/assets/images/logo.png" alt="Welcome 1" style={{ width: '100%', maxWidth: '100%', borderRadius: '12px' }} />
            </Box>
            <Box
              sx={{
                flex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '12px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                p: 1,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 80px rgba(0, 255, 255, 0.4)',
                }
              }}
            >
              <AnimatedImageCarousel />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <WhatshotIcon color="error" />
              <Typography variant="h5" fontWeight="600">Highlights</Typography>
            </Box>
            <Typography>50+ teams | Presence of VIPs | ₹10 lakh+ prize money</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <MicIcon color="primary" />
              <Typography variant="h5" fontWeight="600">Performances</Typography>
            </Box>
            <Typography>Cheerleaders, anchors, and models will grace the stage</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <EventIcon color="secondary" />
              <Typography variant="h5" fontWeight="600">Upcoming Events</Typography>
            </Box>
            <Typography>Match schedules releasing soon for 2025!</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 10 }} />

      {/* Introduction Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The Sangharsh Premier League (SPL) is more than just a cricket tournament — it's a nationwide celebration of passion, sportsmanship, and unity.
            From gully cricket legends to emerging national stars, SPL 2025 offers a platform for every player to shine under the spotlight.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            This event brings together communities, builds networks, and fosters talent by bridging the gap between local talent and national recognition.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '500px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              p: 1,
              mx: 'auto',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 80px rgba(0, 255, 255, 0.4)',
              },
              '@media (max-width: 600px)': {
                maxWidth: '90vw'
              }
            }}
          >
            <img src="/assets/images/cricket-equipment-digital-art.jpg" alt="Introduction" style={{ width: '100%', maxWidth: '100%', borderRadius: '12px' }} />
          </Box>
        </Grid>
      </Grid>

      {/* About the League */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            About the League
          </Typography>
          <Typography variant="body1" color="text.secondary">
            SPL is organized with the vision to promote grassroots cricket and identify raw talent from across the country. With 50+ teams, elite sponsors, and televised matches,
            SPL 2025 promises to be India’s grandest cricketing event yet. This edition also features high-profile collaborations, fan zones, and AI-powered match analytics powered by BYTE.ai.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Our goal is to foster unity and sportsmanship while encouraging youth to engage in professional-level sports from an early age.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '300px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              p: 1,
              mt: 'auto',
              mr: 'auto',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 80px rgba(0, 255, 255, 0.4)',
              },
              '@media (max-width: 600px)': {
                maxWidth: '90vw'
              }
            }}
          >
            <img src="/assets/images/logo.png" alt="About SPL" style={{ width: '100%', maxWidth: '100%', borderRadius: '12px' }} />
          </Box>
        </Grid>
      </Grid>

      {/* Teams Participating */}
      <Grid container spacing={4} direction="column" alignItems="center" sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Teams Participating
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            Coming Soon!!!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '350px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              p: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mx: 'auto',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 80px rgba(0, 255, 255, 0.4)',
              },
              '@media (max-width: 600px)': {
                maxWidth: '90vw'
              }
            }}
          >
            <img src="/assets/images/trophy.png" alt="Teams Participating" style={{ width: '100%', maxWidth: '100%', borderRadius: '12px' }} />
          </Box>
        </Grid>
      </Grid>

      {/* Why SPL Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why SPL?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The Sangharsh Premier League is more than just a tournament — it’s a revolution in Indian grassroots cricket. SPL gives wings to the dreams of thousands of young cricketers who are passionate, dedicated, and eager to make a mark.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Unlike typical leagues, SPL isn’t limited to the elite. We believe real talent exists in the gallis, towns, and remote areas of our nation. SPL creates a bridge between local and national for those unsung heroes to showcase their talent in front of the world.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            The journey from local to national fame starts here. With high-quality exposure, massive audience engagement, and strong community support, SPL is the perfect springboard for future cricketing legends.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            It's not just a game. It's an emotion, a movement, and a new beginning for players and fans alike. From intense rivalries to inspiring stories — SPL 2025 is where cricket truly lives.
          </Typography>
        </Grid>
      </Grid>

      {/* Media Coverage Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Media Coverage
          </Typography>
          <Typography variant="body1" color="text.secondary">
            SPL 2025 will be covered extensively by top national and regional media outlets. Live broadcasts, in-depth interviews, behind-the-scenes exclusives — it’s all happening here!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Join the action as we bring the energy of the game to every household across India and beyond.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/assets/images/media.png"
            alt="Media Coverage"
            sx={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              boxShadow: '0 0 40px rgba(255,255,255,0.1)',
              mx: 'auto'
            }}
          />
        </Grid>
      </Grid>


      {/* Merchandise Launch */}
      <Grid container spacing={4} direction="column" alignItems="center" sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Official Merchandise
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Get ready to wear your support! Official SPL 2025 jerseys, caps, wristbands and more launching soon.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="img"
            src="/assets/images/cricket-equipments-green-grass.jpg"
            alt="SPL Merchandise"
            sx={{
              width: '100%',
              maxWidth: '300px',
              borderRadius: '12px',
              boxShadow: '0 0 40px rgba(0,255,255,0.2)',
              mx: 'auto'
            }}
          />
        </Grid>
      </Grid>

      {/* SPL - More Than a League */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            SPL – Not Just a League, a Revolution
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Sangharsh Premier League is a cricket platform where the field resonates not just for runs and wickets, but also for change. Here, every player's bat tries to pierce through society's darkness, and every wicket inspires youth to stand up.
          </Typography>
        </Grid>
      </Grid>
      
      {/* SPL - Cricket With A Cause */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            SPL – Cricket With A Cause
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Where struggle becomes inspiration and cricket drives positive change.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sangharsh Premier League is not just a tournament but a social movement. It's a platform where cricket gives wings to youth dreams, bringing them from streets to stadiums, and every boundary or six becomes an echo of positive change in society.
          </Typography>
        </Grid>
      </Grid>
          
                {/* SPL's Contribution to Society */}
                <Grid container spacing={4} sx={{ mb: 10 }}>
                  <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            SPL's Contribution to Society
          </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <VolunteerActivismIcon color="secondary" />
            <Typography variant="h5" fontWeight="600">Awareness Campaigns</Typography>
          </Box>
          <Typography>
            Like "Beti Bachao", "Say No to Drugs", "Fitness First" – each season dedicated to a cause
          </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <SchoolIcon color="secondary" />
            <Typography variant="h5" fontWeight="600">Green Cricket</Typography>
          </Box>
          <Typography>
            Plastic-free events, environmentally friendly practices
          </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <GroupIcon color="secondary" />
            <Typography variant="h5" fontWeight="600">Inclusivity & Accessibility</Typography>
          </Box>
          <Typography>
            Space and respect for physically challenged players in SPL
          </Typography>
                  </Grid>
                </Grid>

      {/* Our Purpose */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Purpose is Transformation, Not Just Trophies
          </Typography>
          <Typography variant="body1" color="text.secondary">
            SPL's dream is to:
          </Typography>
          <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <li>
              <Typography variant="body1" color="text.secondary">
                Give identity to big talents from small towns
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Teach discipline, leadership and life values through sports
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Provide equal opportunities to youth from all backgrounds
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Increase dialogue and cooperation in society through sports
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      
      {/* Our Vision */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" color="text.secondary">
            SPL's purpose isn't just to give players opportunities, but to connect every section of society – youth, elderly, women, and children. Through cricket, we:
          </Typography>
          <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <li>
              <Typography variant="body1" color="text.secondary">
                Bridge divides between different communities and age groups
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Create safe, inclusive spaces for everyone to enjoy sports
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Build a foundation for social change through sports engagement
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>

      {/* Impact Highlights */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <GroupIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Social Unity</Typography>
          </Box>
          <Typography>
            Promote social cohesion and community bonding.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <SchoolIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Youth Empowerment</Typography>
          </Box>
          <Typography>
            Inspire youth toward a drug-free, sports-oriented lifestyle.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <SportsCricketIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Talent Showcase</Typography>
          </Box>
          <Typography>
            Work towards getting local talent national and international recognition.
          </Typography>
        </Grid>
      </Grid>

      {/* What We're Doing for Youth */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What We're Doing for Youth
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <SportsCricketIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Making Cricket Accessible to All</Typography>
          </Box>
          <Typography sx={{ mb: 3 }}>
            Whether players are rich or ordinary – SPL's field is equal for all
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <SchoolIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Career Counseling and Scouting</Typography>
          </Box>
          <Typography sx={{ mb: 3 }}>
            Connecting SPL performers with scouts and selectors to help them reach higher levels
          </Typography>
      
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <GroupIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Mentorship Program</Typography>
          </Box>
          <Typography>
            Guidance from experienced players and coaches
          </Typography>
        </Grid>
      </Grid>
      
      {/* What We're Bringing to Society */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What We're Bringing to Society
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <SchoolIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Youth Empowerment</Typography>
          </Box>
          <Typography sx={{ mb: 3 }}>
            Teaching leadership, discipline, and teamwork through sports.
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <SportsCricketIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Free Coaching Camps</Typography>
          </Box>
          <Typography>
            Free training for economically disadvantaged players.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <FemaleIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Women in Cricket</Typography>
          </Box>
          <Typography sx={{ mb: 3 }}>
            Providing a platform for female players and promoting women's cricket.
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <FitnessCenterIcon color="primary" />
            <Typography variant="h5" fontWeight="600">Health Awareness</Typography>
          </Box>
          <Typography>
            Community outreach on fitness, diet, and mental health.
          </Typography>
        </Grid>
      </Grid>

      {/* Cricket Meets Culture */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Cricket Meets Culture: SPL Festival
          </Typography>
          <Typography variant="body1" color="text.secondary">
            SPL is not just a series of matches, it's a cricket carnival featuring:
          </Typography>
          <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <li>
              <Typography variant="body1" color="text.secondary">
                Cultural performances
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Food stalls
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Local art promotion
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Felicitation of local heroes – teachers, doctors, soldiers
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      
      {/* Every Match Has Purpose */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Every Match Has Purpose
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The purpose of each match is not just winning, but raising a voice for social causes – whether it's girls' education, cleanliness campaigns, or mental health awareness.
          </Typography>
        </Grid>
      </Grid>

      {/* SPL's Language */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            SPL's Language – Passion, Equality and Struggle
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We believe that real players are recognized not just by runs, but by passion. SPL is the platform where:
          </Typography>
          <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <li>
              <Typography variant="body1" color="text.secondary">
                A child from a humble home can become a star
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Where walls of caste, class, and money are broken down
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                And where every youth gets a voice and an opportunity
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      
      {/* SPL Taglines */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Slogans
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
            <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
              "Every struggle is a new beginning"
            </Typography>
            <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
              "Play, Grow, Change – with SPL"
            </Typography>
            <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
              "SPL – Where Cricket Connects with Society"
            </Typography>
            <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
              "From Struggle to Stardom – SPL's Journey"
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
      {/* Our Dream */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Dream
          </Typography>
          <Typography variant="body1" color="text.secondary">
            "Every street player becomes a field hero" – SPL enters the field with this dream. Our goal is to find hidden stars from small towns and villages and help them reach IPL and Team India.
          </Typography>
        </Grid>
      </Grid>

      {/* Beyond Cricket */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            A Platform Where Cricket Exists, But Is More Than Just Cricket
          </Typography>
          <Typography variant="body1" color="text.secondary">
            SPL is a family festival – where matches are accompanied by music, colors, laughter, and emotions.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Every year, thousands of spectators gather at SPL, hundreds of players join, and millions of hearts are won.
          </Typography>
        </Grid>
      </Grid>

      {/* Join Us */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Your Support – Our Strength
          </Typography>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <VolunteerActivismIcon color="secondary" />
            <Typography variant="h5" fontWeight="600">Join Us Today!</Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            If you want to be part of SPL – as a player, volunteer, coach, or sponsor – join us today.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontStyle: 'italic' }}>
            Because change doesn't come just by thinking – it comes through playing!
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Footer */}
      <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ width: '100%' }}
        >
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <EmailIcon fontSize="small" />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flexWrap: 'wrap', wordBreak: 'break-word' }}
            >
              sangharshpremeirleauge@sangharshpremeirleauge.com
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <PhoneIcon fontSize="small" />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flexWrap: 'wrap', wordBreak: 'break-word' }}
            >
              +91 8707568153
            </Typography>
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <a href="https://www.facebook.com/profile.php?id=61576604489146" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ color: '#1144c7' }} />
            </a>
          <a href="https://www.instagram.com/sangharshpremierleague/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: '#e54179' }} />
          </a>
          <a href="https://x.com/2025spl" target="_blank" rel="noopener noreferrer">
            <XIcon sx={{ color: '#000000' }} />
          </a>
          <a href="https://www.youtube.com/@SangharshPremierLeague" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon sx={{ color: '#FF0000' }} />
          </a>
        </Box>
        <Box mt={2} display="flex" justifyContent="center" alignItems="center" gap={1}>
          <CopyrightIcon fontSize="small" />
          <Typography variant="body2" color="text.secondary">
            2025 Sangharsh Premier League. All rights reserved.
          </Typography>
        </Box>
      </Box>

      {/* Sponsors Section */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>Sponsors & Partners</Typography>
        <Box
          component="img"
          src='/assets/images/sponsor1.png'
          alt="Sponsor"
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            objectFit: 'cover',
            mb: 2,
            border: '2px solid rgba(0, 200, 255, 0.4)',
            boxShadow: '0 0 20px rgba(0, 200, 255, 0.4)'
          }}
        />
        <Typography variant="body1" color="text.secondary">
          Sponsored by <strong>Sangharsh Seva Samiti</strong><br />Dr. Sandeep Sraogi
        </Typography>
      </Box>
    </Box>
  );
}

// AnimatedImageCarousel with always-on cycling and fade animation
function AnimatedImageCarousel() {
  const images = [
    "/assets/images/india.png",
    "/assets/images/image.jpg",
    "/assets/images/rani.png",
  ];
  const captions = [
    "Universe's heart INDIA",
    "India's heart UTTAR PRADESH",
    "Battle Queen RANI LAKSHMI BAI",
  ];
  const [index, setIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400); // short fade-out before changing
    }, 4000); // every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        p: 1,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 0 80px rgba(0, 255, 255, 0.4)',
        }
      }}
    >
      <img
        src={images[index]}
        alt="Carousel"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          maxWidth: '100%',
          borderRadius: '12px',
          transition: 'opacity 0.5s ease-in-out',
          opacity: fade ? 1 : 0
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          mt: 1,
          fontWeight: 'bold',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {captions[index]}
      </Typography>
    </Box>
  );
}