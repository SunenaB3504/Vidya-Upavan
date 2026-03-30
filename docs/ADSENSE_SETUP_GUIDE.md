# 💰 AdSense Setup Guide — Vidya Upavan GitHub Pages App

## Overview
Google AdSense will display relevant ads on the GitHub Pages companion app, generating passive income for every page view. At 10K monthly visitors, this adds ₹1,500–4,500/month supplementary to YouTube AdSense.

---

## Step 1 — Eligibility Check

Before applying, confirm:
- [x] GitHub Pages app is live at a public URL (confirmed ✅)
- [ ] App has had at least **1-2 weeks** of organic traffic (Google verifies this)
- [ ] App has **original content** (not just a link aggregator) — ✅ Guides + Quizzes qualify
- [ ] You already have a **Google AdSense account** (linked to YouTube channel's Gmail)

> [!NOTE]
> If you already monetise the YouTube channel, a Google AdSense account is already active. Skip Step 2.

---

## Step 2 — Create AdSense Account (if not yet done)

1. Go to [adsense.google.com](https://adsense.google.com)
2. Sign in with the **same Gmail** as the YouTube channel
3. Enter the website URL: `https://sunenab3504.github.io/Marathi-Sanskrit-App/nia-language-adventure-index.html`
4. Select **India** as country
5. Accept AdSense Terms
6. Submit — Google will review and approve (typically 2–4 weeks)

---

## Step 3 — Add AdSense Code to the App

Once approved, Google provides a **Publisher ID** like `ca-pub-XXXXXXXXXXXXXXXX`.

Add the following to `<head>` in `nia-language-adventure-index.html`:

```html
<!-- Google AdSense — DPDP/COPPA Compliant (Non-Personalized Ads) -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
<!-- Force Non-Personalized Ads for child audience compliance -->
<script>
  (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
</script>
```

> [!IMPORTANT]
> The `requestNonPersonalizedAds = 1` line is **mandatory** for DPDP Act 2023 and COPPA compliance. This disables behavioral tracking and serves only contextual ads.

---

## Step 4 — Create Ad Units

Log into AdSense → **Ads** → **By ad unit** → **Create new ad unit** for each placement:

### Ad Unit 1 — "Below Navigation" (Recommended)
- **Type**: Display ad (Responsive)
- **Name**: `vidya-upavan-below-nav`
- **Size**: Responsive (auto-adjusts for mobile and desktop)

### Ad Unit 2 — "Above Footer" (Recommended)
- **Type**: Display ad (Responsive)
- **Name**: `vidya-upavan-above-footer`

---

## Step 5 — Place Ad Units in the App

### Ad Unit 1 — Below the nav tabs (around line 930 in index.html):
```html
<!-- AdSense Unit 1: Below Navigation -->
<div style="text-align:center;padding:8px 0;background:#fff;">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXXX"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

### Ad Unit 2 — Above the community footer:
```html
<!-- AdSense Unit 2: Above Footer -->
<div style="text-align:center;padding:8px 0;background:#f9f4ff;">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="YYYYYYYYYY"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

---

## Step 6 — W-8BEN Tax Form (Critical — Do This Immediately)

Google withholds **24–30% tax** on ad earnings if this form isn't submitted.

1. Log into AdSense → **Payments** → **Manage settings**
2. Under **United States tax info**, click **Add tax info**
3. Select **Individual** → **Non-US person** → Fill W-8BEN
4. This exempts India from US withholding tax under the India-US tax treaty
5. **Deadline**: Complete within 1 year of first payment to avoid back-withholding

---

## Step 7 — Payment Setup

1. AdSense → **Payments** → **Add payment method**
2. Select **Wire Transfer** → Add your **Indian bank account** (IFSC code required)
3. AdSense pays monthly when balance exceeds **$100 / ₹8,300**
4. First payment arrives 21–30 days after end of first qualifying month

---

## Revenue Expectations

| Monthly Page Views | Estimated CPM | Monthly Ad Revenue |
| :--- | :--- | :--- |
| 1,000 | ₹300 | ₹300 |
| 5,000 | ₹400 | ₹2,000 |
| 10,000 | ₹450 | ₹4,500 |
| 50,000 | ₹500 | ₹25,000 |

---

## Checklist Summary

- [ ] AdSense account linked to YouTube Gmail
- [ ] App URL submitted to AdSense for approval
- [ ] Publisher ID (`ca-pub-XXXXXXXX`) copied and added to `<head>`
- [ ] NPA flag (`requestNonPersonalizedAds = 1`) added
- [ ] Ad Unit 1 (below nav) created and pasted in app
- [ ] Ad Unit 2 (above footer) created and pasted in app
- [ ] W-8BEN form submitted in AdSense payment settings
- [ ] Indian bank account added to AdSense payments
- [ ] Committed and pushed to GitHub
