# Quick Start Guide - Portfolio Website

##  Your Portfolio is Ready!

The development server is now running at: **http://localhost:3000**

##  What's Been Created

###  Complete Portfolio Structure
- **Navigation**: Sticky header with smooth scrolling
- **Hero Section**: Animated landing page with your name
- **About Section**: Bio, skills, and technologies
- **Projects Section**: 4 sample projects with hover effects
- **Certificates Section**: Certifications and achievements display
- **Contact Section**: Contact form with social media links

###  Design Features
- **Color Scheme**: Professional blue and white theme
- **Animations**: Framer Motion for smooth transitions
- **Responsive**: Works on mobile, tablet, and desktop
- **Interactive**: Hover effects, scroll animations, and transitions

##  Immediate Customization Tasks

### Priority 1: Essential Information

1. **Update Hero Section** (\components/Hero.tsx\ - Line 47)
   - Current: "Hi, I'm Ysmael Noche"
   - Update tagline: "Front-End Developer | Building beautiful..."

2. **Update Contact Info** (\components/Contact.tsx\)
   - Email (Line 70): your.email@example.com
   - Phone (Line 82): +1 (555) 123-4567
   - Location (Line 94): Your City, Country

3. **Social Media Links** (Multiple files)
   - GitHub: https://github.com (Update with your profile)
   - LinkedIn: https://linkedin.com (Update with your profile)
   - Twitter/X: https://twitter.com (Update with your profile)

### Priority 2: Content

4. **Update About Section** (\components/About.tsx\ - Lines 56-63)
   - Replace placeholder bio text with your story
   - Update skills if needed

5. **Replace Projects** (\components/Projects.tsx\ - Lines 7-47)
   - Replace 4 sample projects with YOUR actual projects
   - Add project images to \public\ folder
   - Update GitHub and live URLs

6. **Update Certificates** (\components/Certificates.tsx\)
   - Replace sample certificates with YOUR certifications (Lines 6-27)
   - Replace achievements with YOUR accomplishments (Lines 29-45)
   - Add certificate images to \public\ folder

### Priority 3: Images & Media

7. **Add Your Photos**
   - Create a \public/images\ folder
   - Add profile photo (About section placeholder)
   - Add project screenshots
   - Add certificate images
   - Add any videos you want to showcase

##  Where to Add Images

\\\
public/
 images/
    profile.jpg          # Your profile photo
    project1.jpg         # Project screenshots
    project2.jpg
    cert1.jpg           # Certificate images
    ...
 videos/
     project-demo.mp4    # Project demo videos
\\\

Then reference in components:
\\\	sx
<img src="/images/profile.jpg" alt="Profile" />
\\\

##  Customize Colors (Optional)

If you want to change from blue to another color:

1. **Edit \pp/globals.css\** (Lines 5-10)
   - Change CSS variables

2. **Find & Replace in all files**:
   - \lue-600\  \purple-600\ (or any Tailwind color)
   - \lue-400\  \purple-400\
   - \lue-50\  \purple-50\

##  Form Setup (Optional)

The contact form currently logs to console. To make it functional:

### Option 1: Email Service (e.g., EmailJS)
1. Sign up at emailjs.com
2. Install: \
pm install @emailjs/browser\
3. Update \Contact.tsx\ handleSubmit function

### Option 2: Backend API
1. Create your own backend endpoint
2. Update form submission to POST to your API

### Option 3: Formspree
1. Sign up at formspree.io
2. Update form action attribute

##  Testing Checklist

- [ ] View at http://localhost:3000
- [ ] Test navigation (click all nav links)
- [ ] Check mobile responsiveness (resize browser)
- [ ] Test all hover effects
- [ ] Click all links to verify they work
- [ ] Submit contact form (check console)
- [ ] Scroll through all sections

##  File Reference

| Component | Purpose | Key Lines to Edit |
|-----------|---------|-------------------|
| \pp/page.tsx\ | Main page structure | Generally leave as-is |
| \pp/layout.tsx\ | Site metadata | Lines 8-11 (title/description) |
| \components/Navigation.tsx\ | Header navigation | Lines 8-14 (nav items) |
| \components/Hero.tsx\ | Landing section | Lines 47-51, 103-115 |
| \components/About.tsx\ | About section | Lines 56-71, 73-75 |
| \components/Projects.tsx\ | Projects showcase | Lines 7-47 (projects array) |
| \components/Certificates.tsx\ | Credentials | Lines 6-45 (both arrays) |
| \components/Contact.tsx\ | Contact form | Lines 70, 82, 94 (contact info) |

##  Next Steps

1.  Base website is created and running
2.  Update all personal information (use guide above)
3.  Add your images to \public\ folder
4.  Update all URLs and links
5.  Customize colors if desired
6.  Setup contact form backend
7.  Deploy to Vercel/Netlify when ready

##  Tips

- Save files and see changes instantly (hot reload)
- Use browser DevTools to inspect elements
- Test on mobile: DevTools  Toggle device toolbar
- Take your time customizing - this is YOUR portfolio!

##  Need Help?

If you encounter errors:
1. Check the terminal for error messages
2. Make sure all files are saved
3. Try stopping server (Ctrl+C) and restart: \
pm run dev\

---

**Ready to customize? Start with updating your contact information in \components/Contact.tsx\!**
