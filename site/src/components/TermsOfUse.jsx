import React from 'react';
import { Box, Typography } from '@mui/material';

export default function TermsOfUse() {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 6, px: 2, pb: 8 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
        Sangharsh Premier League – Terms of Use
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to the Sangharsh Premier League (SPL) website and associated platforms. By accessing or using any part of the SPL services, you agree to comply with and be bound by the following Terms of Use. If you do not agree to these terms, please do not use our services.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By accessing SPL’s website, applications, or participating in any SPL-related activities, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Use, as well as any additional guidelines or rules posted on the site.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        2. Eligibility
      </Typography>
      <Typography variant="body1" paragraph>
        Participation in SPL and use of our platforms are available only to individuals who meet eligibility criteria set forth by the league, including age restrictions and regional qualifications. By participating, you represent that you meet all eligibility requirements.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        3. User Conduct
      </Typography>
      <Typography variant="body1" paragraph>
        Users agree to use SPL platforms responsibly and respectfully. You shall not engage in any unlawful, abusive, defamatory, or disruptive behavior. The league reserves the right to remove content or ban users who violate community standards or the law.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        4. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All content, trademarks, logos, and materials provided by SPL are owned or licensed by the league. Unauthorized use, reproduction, or distribution of any SPL content is prohibited.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        5. Privacy
      </Typography>
      <Typography variant="body1" paragraph>
        SPL is committed to protecting your privacy. Personal information collected during registration or participation will be handled in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as described.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        6. Disclaimers & Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        SPL provides its services "as is" and makes no warranties or guarantees regarding availability, accuracy, or performance. The league shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        7. Termination
      </Typography>
      <Typography variant="body1" paragraph>
        SPL reserves the right to suspend or terminate user access for violation of these Terms or any applicable laws, without prior notice.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        8. Governing Law
      </Typography>
      <Typography variant="body1" paragraph>
        These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from use of SPL platforms shall be subject to the exclusive jurisdiction of courts in India.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        9. Changes to Terms
      </Typography>
      <Typography variant="body1" paragraph>
        SPL reserves the right to modify or update these Terms of Use at any time. Users are encouraged to review the Terms periodically. Continued use of the platforms after changes constitutes acceptance of the new terms.
      </Typography>

      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        10. Contact Information
      </Typography>
      <Typography variant="body1" paragraph>
        For questions or concerns regarding these Terms of Use, please contact the SPL support team via the official contact channels provided on our website.
      </Typography>

      <Typography variant="body1" paragraph sx={{ mt: 6, fontStyle: 'italic' }}>
        Thank you for being part of the Sangharsh Premier League. Together, let’s celebrate cricket, sportsmanship, and community spirit.
      </Typography>
    </Box>
  );
}