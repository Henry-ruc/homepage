---
layout: profile
permalink: /
title: "Home"
section: home
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="content-card about-card" aria-labelledby="about-heading">
  <h2 class="section-heading" id="about-heading">About Me</h2>
  <p class="intro">I design memory- and computationally-efficient algorithms for machine learning, with a focus on matrix sketching and streaming data.</p>
  <p>I am a Ph.D. student at the <a href="https://gsai.ruc.edu.cn/">Gaoling School of Artificial Intelligence</a>, <a href="https://www.ruc.edu.cn/">Renmin University of China</a>, advised by <a href="https://gsai.ruc.edu.cn/zhewei">Prof. Zhewei Wei</a>.</p>
  <p class="oxford-note"><span class="status-dot" aria-hidden="true"></span>I am currently visiting the <a href="https://www.ox.ac.uk/">University of Oxford</a>, hosted by <a href="https://www.cs.ox.ac.uk/people/graham.cormode/">Prof. Graham Cormode</a>.</p>
  <p>Previously, I received my B.Sc. in Mathematical Statistics from the School of Statistics at Renmin University of China in June 2023.</p>
  <p>My research centers on <strong>Sketch4ML</strong>: designing compact data structures for efficient learning. I am interested in reinforcement learning, online learning, unlearning, and the complexity and lower bounds of streaming algorithms.</p>
  <ul class="research-tags" aria-label="Research interests"><li>Matrix sketching</li><li>Online learning</li><li>Efficient ML</li><li>Streaming algorithms</li></ul>
  <p class="contact-note">Feel free to reach out via <a href="mailto:{{ site.author.email }}">email</a> — I am always happy to discuss research and collaborations.</p>
</section>
<section class="content-card" aria-labelledby="publications-heading">
  <div class="section-title-row"><h2 class="section-heading" id="publications-heading">Publications</h2><a class="section-link" href="{{ '/publications/' | relative_url }}">View all ↗</a></div>
  {% include profile-publications.html %}
</section>
