# Security Policy

## Production Security Checklist

Before deploying this website to production, ensure you complete the following security measures:

### Environment Variables

1. **Never commit `.env` files** - These are git-ignored for security
2. **Use `.env.example` as a template** - Copy to `.env.local` and fill with actual values
3. **Configure environment variables in your hosting platform** (Vercel, Netlify, etc.)

### Required Environment Variables

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Your Agency Name"

# Contact Form (Formspree or Custom API)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Security
SESSION_SECRET=your-secret-key-here-change-this
```

### Security Headers

This project includes security headers in `next.config.js`:

- **HSTS** - Forces HTTPS connections
- **CSP** - Content Security Policy to prevent XSS attacks
- **X-Frame-Options** - Prevents clickjacking
- **X-Content-Type-Options** - Prevents MIME sniffing
- **Referrer-Policy** - Controls referrer information
- **Permissions-Policy** - Restricts browser features

### Deployment Best Practices

1. **Enable HTTPS** - Always use SSL/TLS certificates
2. **Update dependencies regularly** - Run `npm audit` and `npm update`
3. **Use strong CSP** - Adjust Content-Security-Policy based on your needs
4. **Enable CORS properly** - Only allow trusted origins
5. **Monitor for vulnerabilities** - Use GitHub Dependabot alerts

### Contact Form Security

- Use Formspree or similar service for form handling
- Never expose email credentials in frontend code
- Implement rate limiting on form submissions
- Add CAPTCHA for spam prevention if needed

### Reporting Security Issues

If you discover a security vulnerability, please email security@yourcompany.com

**Please do not report security vulnerabilities through public GitHub issues.**
