/**
 *
 * FaqPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  Headtext,
  IntroContainer,
  LeftContainer,
  Line,
  MainContainer,
  RightContainer,
  Subtext,
} from './styles';

function FaqPage() {
  return (
    <>
      <section id="faq">
        <MainContainer>
          <LeftContainer>
            <IntroContainer>
              <Headtext>F.A.Qs</Headtext>
              <Subtext>Need help?? Chat with us!</Subtext>
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://wa.me/9080775818"
              >
                <div id="button" className="button" href="/">
                  <i
                    className="fa fa-whatsapp"
                    style={{ fontSize: '32px', color: 'white' }}
                  />{' '}
                  Whatsapp
                </div>
              </a>
            </IntroContainer>
          </LeftContainer>
          <RightContainer>
            <div className="accordion">
              <div className="accordion-item">
                <input type="checkbox" id="accordion1" />
                <label htmlFor="accordion1" className="accordion-item-title">
                  <span className="icon" />
                  What is SEO, and why is it important for online businesses?
                </label>
                <div className="accordion-item-desc">
                  SEO, or Search Engine Optimization, is the practice of
                  optimizing a website to improve its visibility on search
                  engines like Google. It involves various techniques to enhance
                  a sites ranking in search results. SEO is crucial for online
                  businesses as it helps drive organic traffic, increases
                  visibility, and ultimately leads to higher conversions
                </div>
              </div>
              <hr color="#040404" size="2" width="100%" />

              <div className="accordion-item">
                <input type="checkbox" id="accordion2" />
                <label htmlFor="accordion2" className="accordion-item-title">
                  <span className="icon" />
                  How long does it take to see results from SEO efforts?
                </label>
                <div className="accordion-item-desc">
                  The timeline for seeing results from SEO can vary based on
                  several factors, such as the competitiveness of keywords, the
                  current state of the website, and the effectiveness of the SEO
                  strategy. Generally, it may take several weeks to months
                  before noticeable improvements occur. However, long-term
                  commitment to SEO is essential for sustained success.
                </div>
              </div>
              <hr color="#040404" size="2" width="100%" />

              <div className="accordion-item">
                <input type="checkbox" id="accordion3" />
                <label htmlFor="accordion3" className="accordion-item-title">
                  <span className="icon" />
                  What are the key components of a successful SEO strategy?
                </label>
                <div className="accordion-item-desc">
                  A successful SEO strategy involves various components,
                  including keyword research, on-page optimization, quality
                  content creation, link building, technical SEO, and user
                  experience optimization. These elements work together to
                  improve a websites relevance and authority in the eyes of
                  search engines.
                </div>
              </div>
              <hr color="#040404" size="2" width="100%" />

              <div className="accordion-item">
                <input type="checkbox" id="accordion4" />
                <label htmlFor="accordion4" className="accordion-item-title">
                  <span className="icon" />
                  How does mobile optimization impact SEO?
                </label>
                <div className="accordion-item-desc">
                  Mobile optimization is crucial for SEO because search engines
                  prioritize mobile-friendly websites. With the increasing use
                  of smartphones, search engines like Google consider mobile
                  responsiveness as a ranking factor. Websites that provide a
                  seamless experience on mobile devices are more likely to rank
                  higher in search results.
                </div>
              </div>
              <hr color="#040404" size="2" width="100%" />

              <div className="accordion-item">
                <input type="checkbox" id="accordion5" />
                <label htmlFor="accordion5" className="accordion-item-title">
                  <span className="icon" />
                  What is the role of backlinks in SEO, and how can they be
                  acquired?
                </label>
                <div className="accordion-item-desc">
                  Backlinks, or inbound links from other websites to yours, play
                  a significant role in SEO. They are considered a vote of
                  confidence and can improve a sites authority. Quality over
                  quantity is crucial when acquiring backlinks. Strategies for
                  obtaining backlinks include creating high-quality content,
                  guest posting, reaching out to industry influencers, and
                  participating in community activities. Its important to focus
                  on natural and ethical link-building practices.
                </div>
              </div>
            </div>
          </RightContainer>
        </MainContainer>
        <Line>
          <hr color="#1b75bb" size="4" width="100%" />
        </Line>
      </section>
    </>
  );
}

FaqPage.propTypes = {};

export default memo(FaqPage);
