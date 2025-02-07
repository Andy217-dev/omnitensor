(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    6541: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 6393));
    },
    6393: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ex;
          },
        });
      var i = n(7437);
      n(7706);
      var s = n(2265),
        a = n(2573),
        o = n.n(a),
        r = n(6648);
      let c = () => {
        let [e, t] = (0, s.useState)(0);
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              t(window.innerWidth);
            };
            return (
              t(window.innerWidth),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          e
        );
      };
      function l() {
        let [e, t] = (0, s.useState)(null);
        return (
          (0, s.useEffect)(() => {
            let n = window.scrollY,
              i = () => {
                let i = window.scrollY,
                  s = i > n ? "down" : "up";
                s !== e && (i - n > 10 || i - n < -10) && t(s),
                  (n = i > 0 ? i : 0);
              };
            return (
              window.addEventListener("scroll", i),
              () => {
                window.removeEventListener("scroll", i);
              }
            );
          }, [e]),
          e
        );
      }
      var d = (e) => {
          let { isScrolled: t } = e,
            n = c(),
            a = l(),
            [d, m] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            n > 800 && m(!1);
          }, [n]);
          let u = [
            { href: "#about_us", title: "About" },
            { href: "#technology", title: "Technology" },
            { href: "#roadmap", title: "Roadmap" },
            { href: "#products", title: "Products" },
            { href: "#tokenomics", title: "Tokenomics" },            
          ];
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: ""
                  .concat(o().container, " ")
                  .concat(t && "down" === a ? o().scrolled : "", "\n        ")
                  .concat(t && "up" === a ? o().scrolledUp : "", "\n        "),
                children: [
                  (0, i.jsx)(r.default, {
                    src: "/logo.svg",
                    className: o().img,
                    width: 0,
                    height: 0,
                    alt: "Omnitensor logo",
                  }),
                  n > 900
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("nav", {
                            className: o().nav,
                            children: u.map((e, t) =>
                              (0, i.jsx)(
                                "a",
                                {
                                  href: e.href,
                                  className: o().hyperlink,
                                  children: e.title,
                                },
                                t
                              )
                            ),
                          }),
                          " ",
                        ],
                      })
                    : (0, i.jsx)("a", {
                        onClick: () => m(!0),
                        children: (0, i.jsx)(r.default, {
                          src: "/images/burger_menu.svg",
                          className: o().burgerMenu,
                          width: 0,
                          height: 0,
                          alt: "menu",
                        }),
                      }),
                ],
              }),
              d
                ? (0, i.jsxs)("div", {
                    className: o().mobileMenu,
                    children: [
                      (0, i.jsxs)("div", {
                        className: o().top,
                        children: [
                          (0, i.jsx)(r.default, {
                            src: "/logo.svg",
                            className: o().img,
                            width: 0,
                            height: 0,
                            alt: "Omnitensor logo",
                          }),
                          (0, i.jsx)("a", {
                            onClick: () => m(!1),
                            children: (0, i.jsx)(r.default, {
                              src: "/images/close_button.svg",
                              className: o().closeButton,
                              width: 0,
                              height: 0,
                              alt: "close button",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: o().linkContainer,
                        children: [
                          u.map((e, t) =>
                            (0, i.jsx)(
                              "a",
                              {
                                href: e.href,
                                onClick: () => m(!1),
                                children: e.title,
                              },
                              t
                            )
                          ),
                        ],
                      }),
                    ],
                  })
                : (0, i.jsx)(i.Fragment, {}),
            ],
          });
        },
        m = n(3613),
        u = n.n(m),
        h = n(6075),
        _ = n.n(h),
        g = n(9504),
        p = n.n(g);
      n(878), _().className;
      let x = p().className,
        f = {
          technologyTitle1: "AI Grid as a Service",
          technologyTitle2: "OmniTensor’s Decentralized",
          technologyTitle3: "AI Revolution",
          technologyText:
            "OmniTensor introduces AI Grid as a Service (AI-GaaS), a decentralized ecosystem that enables the development and deployment of AI solutions across a network of community-owned GPUs. By decentralizing AI compute power, OmniTensor eliminates bottlenecks and centralization risks associated with traditional AI platforms. Our platform also enables businesses and developers to choose from pre-trained AI models or train custom models while ensuring data privacy and security through end-to-end encryption.",
          questions: [
            "What is the Key Advantage of OmniTensor’s Decentralized AI Platform?",
            "How Does OmniTensor Reward Community Contributions?",
            "How Does OmniTensor Handle AI Model Validation?",
          ],
          answerHeader1: "Decentralization for",
          answerHeader1_2: "Scalability and Security",
          answerText1:
            "OmniTensor’s decentralized AI infrastructure distributes computing power across a network of community-owned GPUs. This eliminates the need for centralized cloud services, enhancing both scalability and security. The decentralized architecture ensures that no single point of failure exists, significantly reducing the risk of outages or data breaches. Moreover, by using a blockchain-based validation system, OmniTensor ensures that all AI computations are transparent, secure, and verifiable.",
          answerHeader2: "Tokenized Incentives for Participation",
          answerText2:
            "OmniTensor uses the OMNIT token to incentivize contributors who share computing resources, validate AI models, and provide training data. This decentralized reward mechanism allows anyone with idle GPU capacity or relevant data sets to participate in the network while earning OMNIT tokens. Contributors are rewarded based on their contributions, whether that be computational power, data validation, or testing models, fostering an inclusive and engaged community that drives the success of the ecosystem.",
          answerHeader3: "Decentralized Consensus for",
          answerHeader3_2: "Accurate Model Validation",
          answerText3:
            "OmniTensor utilizes a decentralized consensus mechanism, combining Proof of Work (PoW) and Proof of Stake (PoS), to validate AI models efficiently. This DualProof system ensures that AI models are not only trained using distributed resources but are also validated by multiple independent nodes within the network. Each node verifies the accuracy and integrity of AI computations, preventing faulty or biased models from being deployed. This decentralized validation approach guarantees the reliability and fairness of AI outputs, making it a trusted platform for developers and enterprises alike.",
        },
        j = {
          roadmapSlide: [
            {
              year: "Andromeda",
              content: [
                "Vision Definition",
                "Initial Research",
                "Whitepaper Drafting",
              ],
            },
            {
              year: "Orion",
              content: [
                "Core Architecture Design",
                "Consensus Mechanism Design",
                "Tokenomics Definition",
              ],
            },
            {
              year: "Sagittarius",
              content: [
                "EVM Chain Testnet Launch",
                "Community Expansion",
                "Token Launch on Ethereum",
                "Social Media Presence",
              ],
            },
            {
              year: "Lyra",
              content: ["EVM Chain Launch", "SDK Development", "Beta Testing"],
            },
            {
              year: "Draco",
              content: [
                "DePIN Growth",
                "Community Incentives",
                "Marketplace Launch",
              ],
            },
            {
              year: "Phoenix",
              content: [
                "Mainnet Release",
                "AI OmniChain Integration",
                "Token Utility Expansion",
              ],
            },
            {
              year: "Pegasus",
              content: [
                "Performance Optimizations",
                "Cross-Chain Interoperability",
                "Enhanced AI Model Customization",
              ],
            },
            {
              year: "Hydra",
              content: [
                "OmniChain 2.0",
                "Decentralized Governance",
                "AI Smart Contracts Library",
              ],
            },
            {
              year: "Cassiopeia",
              content: [
                "AI Infrastructure Leadership",
                "Zero-Knowledge Security",
                "Edge AI Integration",
              ],
            },
            {
              year: "Cygnus",
              content: [
                "Mainstream AI Adoption",
                "DAO AI Governance",
                "Continuous Improvement Culture",
              ],
            },
          ],
        },
        v = [
          {
            title: "AI Model Marketplace",
            logo: "/images/products_illustrations/ai_marketplace.png",
            text: "Access a wide range of AI models for text, image, speech and data processing, or train your own models.",
            alt: "illustration",
            link: "https://hajans-organization123.gitbook.io/omnitensor/products/ai-model-marketplace",
          },
          {
            title: "dApp Store",
            logo: "/images/products_illustrations/dapp_store.png",
            text: "Explore and deploy AI dApps that integrate seamlessly with business operations or enhance personal projects.",
            alt: "illustration",
            link: "https://hajans-organization123.gitbook.io/omnitensor/products/dapp-store",
          },
          {
            title: "Data Layer",
            logo: "/images/products_illustrations/data_layer.png",
            text: "Tap into OmniTensor’s community-collected and validated data for training and testing AI models at scale.",
            alt: "illustration",
            link: "https://hajans-organization123.gitbook.io/omnitensor/products/data-layer",
          },
          {
            title: "Customizable Solutions",
            logo: "/images/products_illustrations/custom_solution.png",
            text: "Leverage OmniTensor’s decentralized network to tune AI models to your specific needs, whether for predictive analytics, language processing, or automation.",
            alt: "illustration",
            link: "https://hajans-organization123.gitbook.io/omnitensor/products/customizable-solutions",
          },
          {
            title: "AI Inference Network",
            logo: "/images/products_illustrations/ai_network.png",
            text: "Scale your AI models efficiently with OmniTensor’s decentralized inference network, optimizing costs while maintaining high performance.",
            alt: "illustration",
            link: "https://hajans-organization123.gitbook.io/omnitensor/products/ai-inference-network",
          },
        ],
        b = {
          title1: "The Backbone of OmniTensor's",
          title2: "Economic Model",
          text1:
            "The total supply of OMNIT tokens is capped at 1 billion, ensuring predictable token distribution and stability within the OmniTensor ecosystem. OMNIT serves as the native currency, facilitating transactions, smart contract deployment, AI service payments, and rewarding contributors such as data validators, AI model trainers and GPU providers. Additionally, it supports staking in AI consensus validation.",
          text2: (0, i.jsxs)(i.Fragment, {
            children: [
              "Prior to the launch of the OmniTensor mainnet, an ERC20 token on Ethereum will act as a placeholder, enabling early access and liquidity, with a 1:1 swap for native OMNIT tokens once the mainnet is live.",
              (0, i.jsx)("br", {}),
              (0, i.jsx)("br", {}),
              " The ERC20 token, with contract address",
              " ",
              (0, i.jsx)("a", {
                href: "https://etherscan.io/token/0xComingSoon",
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, i.jsx)("u", {
                  children: "0xComingSoon",
                }),
              }),
              "\xa0 \xa0",
              (0, i.jsx)("button", {
                onClick: () =>
                  navigator.clipboard.writeText(
                    "0xComingSoon"
                  ),
                style: {
                  width: "6rem",
                  backgroundColor: "rgba(15, 50, 54, 1)",
                  color: "rgba(0, 234, 199, 1)",
                  fontWeight: 500,
                  cursor: "pointer",
                  border: "none",
                },
                onMouseEnter: (e) => {
                  e.target.style.backgroundColor = "#1f2937";
                },
                onMouseLeave: (e) => {
                  e.target.style.backgroundColor = "rgba(15, 50, 54, 1)";
                },
                children: "Copy",
              }),
              "\xa0 , has undergone a security audit by EtherAuthority to ensure safety and transparency.",
            ],
          }),
        },
        y = [         
          {
            title: "Twitter",
            icon: "/images/social_icons_community/x.svg",
            link: "https://x.com/",
          },
          {
            title: "Telegram",
            icon: "/images/social_icons_community/telegram.svg",
            link: "https://t.me/",
          },
        ],
        w = [
          {
            title: "App",
            icon: "/images/social_icons_community/web.svg",
            link: "https://app-omnitensor.vercel.app/agents",
          },
          {
            title: "Twitter",
            icon: "/images/social_icons_community/x.svg",
            link: "https://x.com/",
          },
        ],
        C = {
          title: "Redefining AI Development for a Decentralized Future",
          text: "Lorem ipsum dolor sit amet consectetur. Amet eu massa nunc fermentum arcu aenean.",
          productLink1: "https://app.omnitensor.io",
          productLink2: "https://explorer.omnitensor.io",
          productLink3: "https://models.omnitensor.io",
          productLink4: "https://store.omnitensor.io",
          docsLink: "https://hajans-organization123.gitbook.io/omnitensor/",
          blogLink: "https://omnitensorio.medium.com/",
          gettingStartedLink:
            "https://hajans-organization123.gitbook.io/omnitensor/getting-started/setting-up-your-account",
          tutorialsLink:
            "https://hajans-organization123.gitbook.io/omnitensor/tutorials-and-examples/building-ai-dapps-step-by-step",
          termsLink: "https://hajans-organization123.gitbook.io/omnitensor/legal/terms-of-service",
          privacyLink: "https://hajans-organization123.gitbook.io/omnitensor/legal/privacy-policy",
          copyrightLink: "",
        };
      var k = () =>
          (0, i.jsx)("footer", {
            className: u().footer,
            children: (0, i.jsxs)("div", {
              className: u().contentContainer,
              children: [
                (0, i.jsxs)("div", {
                  className: u().container,
                  children: [
                    (0, i.jsxs)("div", {
                      className: u().newsletter,
                      children: [
                        (0, i.jsx)(r.default, {
                          src: "/logo.svg",
                          width: 0,
                          height: 0,
                          alt: "Omnitensor logo",
                        }),
                        (0, i.jsx)("p", { className: x, children: C.title }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: u().footerLinks,
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsxs)("ul", {
                            className: x,
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#about_us",
                                  children: "About Us",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#technology",
                                  children: "Technology",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#roadmap",
                                  children: "Roadmap",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#products",
                                  children: "Products",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#tokenomics",
                                  children: "Tokenomics",
                                }),
                              }),
                            ],
                          }),
                        }),                        
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("h4", {
                              className: u().robotoMono,
                              children: "Resources",
                            }),
                            (0, i.jsxs)("ul", {
                              children: [
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)("a", {
                                    href: C.docsLink,
                                    target: "_blank",
                                    children: "Documentation",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)("a", {
                                    href: C.gettingStartedLink,
                                    target: "_blank",
                                    children: "Getting Started",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)("a", {
                                    href: C.tutorialsLink,
                                    target: "_blank",
                                    children: "Tutorials",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "".concat(u().footerBottom, " ").concat(x),
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("a", {
                          href: C.termsLink,
                          target: "_blank",
                          children: (0, i.jsx)("p", {
                            children: "Terms of Use",
                          }),
                        }),
                        (0, i.jsx)("a", {
                          href: C.privacyLink,
                          target: "_blank",
                          children: (0, i.jsx)("p", {
                            children: "Privacy Policy",
                          }),
                        }),                        
                      ],
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: C.copyrightLink1,
                        children: (0, i.jsx)("p", {
                          children: "\xa9 2025 Copyright",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        N = n(1725),
        T = n.n(N),
        A = n(1636),
        I = n.n(A);
      let O = [
        { src: "/images/carousel/DexTools.svg", alt: "DexTools logo" },
        { src: "/images/carousel/Ether.svg", alt: "Ether logo" },
        { src: "/images/carousel/Messier.svg", alt: "Messier logo" },
        { src: "/images/carousel/Sablier.svg", alt: "Sablier logo" },
        { src: "/images/carousel/UNCX.svg", alt: "UNCX logo" },
        { src: "/images/carousel/Uniswap.svg", alt: "Uniswap logo" },
      ];
      var M = () => {
          let [e, t] = (0, s.useState)(!1);
          return (0, i.jsx)("div", {
            className: I().carouselContainer,
            children: (0, i.jsx)("div", {
              className: "".concat(I().carousel, " "),
              children: (0, i.jsx)("div", {
                className: ""
                  .concat(I().carouselTrack, " ")
                  .concat(e ? I().paused : ""),
                onMouseEnter: () => {
                  t(!0);
                },
                onMouseLeave: () => {
                  t(!1);
                },
                children: [...O, ...O, ...O, ...O].map((e, t) =>
                  (0, i.jsx)(
                    r.default,
                    {
                      src: e.src,
                      className: I().img,
                      width: 0,
                      height: 0,
                      alt: e.alt,
                    },
                    t
                  )
                ),
              }),
            }),
          });
        },
        S = n(7309);
      let L = () =>
        (0, i.jsx)("button", {
          onClick: () => {
            window.open("https://hajans-organization123.gitbook.io/omnitensor/", "_blank");
          },
          className: T().secondaryButton,
          children: "Learn More",
        });
      var E = () => {
          let e = c(),
            [t, n] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              setTimeout(() => {
                n(!0);
              }, 1500);
            }, []),
            (0, i.jsxs)("section", {
              id: "header",
              className: "".concat(T().heroContainer, " "),
              children: [
                (0, i.jsxs)("div", {
                  className: "".concat(T().hero, " ").concat(T().fadeIn),
                  children: [
                    (0, i.jsx)("div", {
                      className: T().heroContent,
                      children: (0, i.jsxs)(S.pT, {
                        direction: "left",
                        cascade: !0,
                        triggerOnce: !0,
                        damping: 1,
                        delay: 2e3,
                        children: [
                          (0, i.jsxs)("h1", {
                            className: x,
                            children: [
                              (0, i.jsx)("span", {
                                children: "AI Grid as a Service:",
                              }),
                              " ",
                              (0, i.jsx)("br", {}),
                              (0, i.jsxs)("span", {
                                className: T().highlight,
                                children: [
                                  "Redefining AI Development for",
                                  e < 801
                                    ? (0, i.jsx)("br", {})
                                    : (0, i.jsx)(i.Fragment, {}),
                                  " a Decentralized Future",
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("p", {
                            className: T().subheading,
                            children:
                              "OmniTensor is redefining AI with decentralized infrastructure, enabling the creation, deployment and scaling of AI applications for developers, businesses and communities. Our AI Grid as a Service (AI-GaaS) eliminates the need for centralized control, offering an open, community-driven ecosystem for AI innovation.",
                          }),
                          (0, i.jsxs)("div", {
                            className: T().buttons,
                            children: [
                              (0, i.jsx)("button", {
                                onClick: () => {
                                  window.open(
                                    "https://app-omnitensor.vercel.app/",
                                    "_blank"
                                  );
                                },
                                className: T().primaryButton,
                                children: "Launch App",
                              }),
                              (0, i.jsx)(L, {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                    t
                      ? (0, i.jsx)(S.LG, {
                          className: T().heroImage,
                          triggerOnce: !0,
                          damping: 1,
                          delay: 2e3,
                          children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(r.default, {
                              src: "/images/main_illustration_desktop.svg",
                              alt: "Futuristic figure",
                              className: T().img,
                              width: 0,
                              height: 0,
                            }),
                          }),
                        })
                      : (0, i.jsx)(i.Fragment, {}),
                  ],
                }),
                (0, i.jsx)(M, {}),
                (0, i.jsx)("div", { className: T().fadedElipse }),
              ],
            })
          );
        },
        D = n(1379),
        P = n.n(D),
        R = n(2531),
        B = n.n(R),
        F = (e) => {
          let { title: t } = e;
          return (0, i.jsxs)("div", {
            className: B().container,
            children: [
              (0, i.jsx)(r.default, {
                src: "/images/section_bullet.svg",
                className: B().img,
                width: 0,
                height: 0,
                alt: "",
              }),
              (0, i.jsx)("h3", { className: B().h3, children: t }),
            ],
          });
        };
      let z = [
        {
          icon: "/images/about_us_circles/dev_icon.svg",
          title: "Developers",
          text: "Utilize OmniTensor’s full-scale decentralized AI infrastructure to create and deploy AI models. With our ready-to-use SDK, pre-configured AI models and scalable infrastructure, developers can quickly build, train and host AI-powered applications, saving time and reducing costs.",
          id: "box1",
        },
        {
          icon: "/images/about_us_circles/community_icon.svg",
          title: "Community",
          text: "Share your computing power and data, helping train AI models while earning OMNIT tokens. OmniTensor empowers community members to actively participate in the decentralized AI network by contributing GPUs, validating data and testing AI models, all while being rewarded.",
          id: "box2",
        },
        {
          icon: "/images/about_us_circles/business_icon.svg",
          title: "Business",
          text: "Automate business processes efficiently with AI dApps from OmniTensor’s marketplace. Our decentralized platform offers customizable AI solutions that integrate seamlessly into business operations, enhancing productivity while lowering the cost of AI implementation.",
          id: "box3",
        },
      ];
      var H = () => {
          let e = c();
          return (0, i.jsx)("div", {
            className: P().container,
            id: "about_us",
            children: (0, i.jsxs)("div", {
              className: P().contentContainer,
              children: [
                (0, i.jsx)(S.Mi, {
                  direction: "left",
                  triggerOnce: !0,
                  fraction: 1,
                  children: (0, i.jsx)(F, { title: "About Us" }),
                }),
                (0, i.jsxs)("div", {
                  className: P().textContainer,
                  children: [
                    (0, i.jsx)(S.Mi, {
                      direction: "left",
                      style: { flex: 1 },
                      triggerOnce: !0,
                      fraction: 1,
                      children: (0, i.jsx)("h2", {
                        className: "".concat(P().h2, " ").concat(x),
                        children: "What is OmniTensor?",
                      }),
                    }),
                    (0, i.jsx)(S.Mi, {
                      direction: "right",
                      style: { flex: 1 },
                      triggerOnce: !0,
                      fraction: 1,
                      children: (0, i.jsxs)("p", {
                        className: P().p,
                        children: [
                          "OmniTensor is a decentralized AI network designed to streamline the development, launch and use of AI-powered dApps. Built with community-driven principles at its core, OmniTensor enables developers to create AI solutions faster and more affordably than traditional centralized platforms.",
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("br", {}),
                          "Our decentralized infrastructure harnesses unused computing power from the community, democratizing AI development by enabling participation from GPU and data contributors across the globe. Through our ecosystem, AI is made accessible to all, fostering a new wave of innovation.",
                        ],
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: P().whoIsContainer,
                  children: [
                    (0, i.jsx)(S.pT, {
                      triggerOnce: !0,
                      fraction: 1,
                      children: (0, i.jsx)("h2", {
                        className: ""
                          .concat(P().h2, " ")
                          .concat(x, " ")
                          .concat(P().textCenter),
                        children: "Who is OmniTensor for?",
                      }),
                    }),
                    (0, i.jsx)(r.default, {
                      className: P().circle1,
                      src: "/images/about_us_circles/circle1.svg",
                      width: 0,
                      height: 0,
                      alt: "",
                    }),
                    (0, i.jsx)(r.default, {
                      className: P().circle2,
                      src: "/images/about_us_circles/circle2.svg",
                      width: 0,
                      height: 0,
                      alt: "",
                    }),
                    (0, i.jsx)(r.default, {
                      className: P().circle3,
                      src: "/images/about_us_circles/circle6.svg",
                      width: 0,
                      height: 0,
                      alt: "",
                    }),
                    (0, i.jsx)(r.default, {
                      className: P().circle4,
                      src: "/images/about_us_circles/circle4.svg",
                      width: 0,
                      height: 0,
                      alt: "",
                    }),
                    (0, i.jsx)(r.default, {
                      className: P().circle5,
                      src: "/images/about_us_circles/circle5.svg",
                      width: 0,
                      height: 0,
                      alt: "",
                    }),
                    (0, i.jsx)(r.default, {
                      className: P().circle6,
                      src: "/images/about_us_circles/circle6.svg",
                      width: 0,
                      height: 0,
                      alt: "",
                    }),
                    (0, i.jsx)("div", {
                      className: P().glassBoxesContainer,
                      children: (0, i.jsx)(S.Mi, {
                        cascade: !0,
                        direction: e > 800 ? "down" : "left",
                        damping: 1,
                        triggerOnce: !0,
                        fraction: 0.7,
                        children: z.map((e, t) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              id: e.id,
                              className: ""
                                .concat(P().glassContainer, " ")
                                .concat(
                                  1 === t
                                    ? P().secondContainer
                                    : 2 === t
                                    ? P().thirdContainer
                                    : ""
                                ),
                              children: [
                                (0, i.jsx)(r.default, {
                                  className: P().glassIcon,
                                  src: e.icon,
                                  width: 0,
                                  height: 0,
                                  alt: "",
                                }),
                                (0, i.jsx)("h2", {
                                  className: "".concat(P().h2, " ").concat(x),
                                  children: e.title,
                                }),
                                (0, i.jsx)("p", {
                                  className: P().glassText,
                                  children: e.text,
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        U = n(1076),
        G = n.n(U),
        q = n(9965),
        W = n.n(q),
        K = () =>
          (0, i.jsx)("div", {
            className: W().container,
            id: "technology",
            children: (0, i.jsxs)("div", {
              className: W().contentContainer,
              children: [
                (0, i.jsxs)("div", {
                  className: W().textContainer,
                  children: [
                    (0, i.jsx)(S.Mi, {
                      delay: 4,
                      cascade: !0,
                      triggerOnce: !0,
                      fraction: 0.5,
                      children: (0, i.jsx)(F, { title: "Technology" }),
                    }),
                    (0, i.jsxs)(S.pT, {
                      cascade: !0,
                      delay: 2,
                      damping: 0.6,
                      fraction: 1,
                      triggerOnce: !0,
                      children: [
                        (0, i.jsxs)("h2", {
                          className: "".concat(W().h2, " ").concat(x),
                          children: [
                            f.technologyTitle1,
                            (0, i.jsx)("br", {}),
                            (0, i.jsxs)("span", {
                              className: W().span,
                              children: [
                                f.technologyTitle2,
                                (0, i.jsx)("br", {}),
                                " ",
                                f.technologyTitle3,
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className: W().p,
                          children: f.technologyText,
                        }),
                        (0, i.jsx)(L, {}),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(r.default, {
                  src: "/images/technology_illustration.svg",
                  className: W().illustration,
                  width: 0,
                  height: 0,
                  alt: "illustration",
                }),
              ],
            }),
          }),
        Q = n(513),
        V = n.n(Q),
        Y = n(4446),
        X = n(8521),
        Z = () => {
          let [e, t] = (0, s.useState)(0),
            [n, a] = (0, s.useState)(!1),
            o = c(),
            d = l(),
            [m, u] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            u(!0);
          }, []),
            (0, s.useEffect)(() => {
              let e = () => {
                let e = document
                  .getElementById("questions")
                  .getBoundingClientRect();
                e.top <= 100 && e.bottom > 100 ? a(!0) : a(!1);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []);
          let h = (e) => {
              let t =
                document.querySelectorAll(".section")[e].getBoundingClientRect()
                  .top + window.scrollY;
              window.scrollTo({ top: t - 150, behavior: "smooth" });
            },
            _ = (n) => {
              n !== e &&
                (u(!1),
                setTimeout(() => {
                  t(n), u(!0);
                }, 500));
            };
          (0, s.useEffect)(() => {
            let e = () => {
              document.querySelectorAll(".section").forEach((e, n) => {
                let i = e.getBoundingClientRect().top + window.scrollY - 100,
                  s = e.offsetHeight,
                  a = window.scrollY;
                a >= i - 100 && a < i + s && t(n);
              });
            };
            return (
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, []);
          let g = {
            enterFromLeft: {
              initial: { opacity: 0, x: -100 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 100 },
            },
            enterFromRight: {
              initial: { opacity: 0, x: 100 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -100 },
            },
            enterFromBottom: {
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -100 },
            },
          };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              o <= 800
                ? (0, i.jsxs)("div", {
                    className: ""
                      .concat(n ? "" : V().noBar, " ")
                      .concat(V().stickyQuestionBar, " ")
                      .concat("up" === d ? V().noMenu : "", " ")
                      .concat(x),
                    children: [
                      (0, i.jsx)(r.default, {
                        src: "/images/question_arrow_left.svg",
                        alt: "",
                        width: 0,
                        height: 0,
                        onClick: () => (e > 0 ? h(e - 1) : null),
                      }),
                      (0, i.jsx)("p", { children: f.questions[e] }),
                      (0, i.jsx)(r.default, {
                        src: "/images/question_arrow_right.svg",
                        alt: "",
                        width: 0,
                        height: 0,
                        onClick: () =>
                          e < f.questions.length ? h(e + 1) : null,
                      }),
                    ],
                  })
                : (0, i.jsx)(i.Fragment, {}),
              (0, i.jsxs)("div", {
                className: V().container,
                id: "questions",
                children: [
                  o > 800
                    ? (0, i.jsx)("div", {
                        className: V().sidebar,
                        children: (0, i.jsx)("ul", {
                          children: f.questions.map((t, n) =>
                            (0, i.jsxs)(
                              "div",
                              {
                                style: { display: "flex", gap: "1rem" },
                                children: [
                                  e === n
                                    ? (0, i.jsx)(r.default, {
                                        src: "/images/technology_arrow.svg",
                                        width: 0,
                                        height: 0,
                                        alt: "",
                                      })
                                    : (0, i.jsx)(i.Fragment, {}),
                                  (0, i.jsx)(
                                    "li",
                                    {
                                      className: e === n ? V().active : "",
                                      onClick: () => {
                                        _(n);
                                      },
                                      children: t,
                                    },
                                    n
                                  ),
                                ],
                              },
                              n
                            )
                          ),
                        }),
                      })
                    : (0, i.jsx)(i.Fragment, {}),
                  (0, i.jsx)("div", {
                    className: "".concat(V().content),
                    children:
                      o <= 800
                        ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsxs)("section", {
                                className: "section",
                                children: [
                                  (0, i.jsxs)("h2", {
                                    className: "".concat(x),
                                    children: [
                                      f.answerHeader1,
                                      (0, i.jsx)("br", {}),
                                      f.answerHeader1_2,
                                    ],
                                  }),
                                  (0, i.jsx)("p", { children: f.answerText1 }),
                                ],
                              }),
                              (0, i.jsx)("hr", {}),
                              (0, i.jsxs)("section", {
                                className: "section",
                                children: [
                                  (0, i.jsx)("h2", {
                                    className: "".concat(x),
                                    children: f.answerHeader2,
                                  }),
                                  (0, i.jsx)("p", { children: f.answerText2 }),
                                ],
                              }),
                              (0, i.jsx)("hr", {}),
                              (0, i.jsxs)("section", {
                                className: "section",
                                children: [
                                  (0, i.jsxs)("h2", {
                                    className: "".concat(x),
                                    children: [
                                      f.answerHeader3,
                                      (0, i.jsx)("br", {}),
                                      f.answerHeader3_2,
                                    ],
                                  }),
                                  (0, i.jsx)("p", { children: f.answerText3 }),
                                ],
                              }),
                            ],
                          })
                        : (0, i.jsx)(Y.M, {
                            mode: "wait",
                            children:
                              0 === e
                                ? (0, i.jsx)(
                                    X.E.div,
                                    {
                                      initial: g.enterFromLeft.initial,
                                      animate: g.enterFromLeft.animate,
                                      exit: g.enterFromLeft.exit,
                                      children: (0, i.jsxs)("section", {
                                        className: "section",
                                        children: [
                                          (0, i.jsxs)("h2", {
                                            className: "".concat(x),
                                            children: [
                                              f.answerHeader1,
                                              (0, i.jsx)("br", {}),
                                              f.answerHeader1_2,
                                            ],
                                          }),
                                          (0, i.jsx)("p", {
                                            children: f.answerText1,
                                          }),
                                        ],
                                      }),
                                    },
                                    "question0"
                                  )
                                : 1 === e
                                ? (0, i.jsx)(
                                    X.E.div,
                                    {
                                      initial: g.enterFromBottom.initial,
                                      animate: g.enterFromBottom.animate,
                                      exit: g.enterFromBottom.exit,
                                      children: (0, i.jsxs)("section", {
                                        className: "section1",
                                        children: [
                                          (0, i.jsx)("h2", {
                                            className: "".concat(x),
                                            children: f.answerHeader2,
                                          }),
                                          (0, i.jsx)("p", {
                                            children: f.answerText2,
                                          }),
                                        ],
                                      }),
                                    },
                                    "question1"
                                  )
                                : 2 === e
                                ? (0, i.jsx)(
                                    X.E.div,
                                    {
                                      initial: g.enterFromRight.initial,
                                      animate: g.enterFromRight.animate,
                                      exit: g.enterFromRight.exit,
                                      children: (0, i.jsxs)("section", {
                                        className: "section2",
                                        children: [
                                          (0, i.jsxs)("h2", {
                                            className: "".concat(x),
                                            children: [
                                              f.answerHeader3,
                                              (0, i.jsx)("br", {}),
                                              f.answerHeader3_2,
                                            ],
                                          }),
                                          (0, i.jsx)("p", {
                                            children: f.answerText3,
                                          }),
                                        ],
                                      }),
                                    },
                                    "question2"
                                  )
                                : (0, i.jsx)(i.Fragment, {}),
                          }),
                  }),
                ],
              }),
            ],
          });
        };
      n(9051), n(5291);
      var J = n(9054),
        $ = n.n(J),
        ee = n(3153);
      let et = (e) => {
          let { title: t, text: n, key: s } = e;
          return (0, i.jsxs)(
            "div",
            {
              className: "".concat($().glassContainer, " ").concat(x),
              children: [
                (0, i.jsx)(X.E.h2, {
                  className: "".concat($().h2, " "),
                  children: t,
                }),
                (0, i.jsx)("p", { className: $().p, children: n }),
              ],
            },
            s
          );
        },
        en = [
          { title: "85%", text: "Reduction in AI Training Time" },
          { title: "40%", text: "Cost Savings on AI Computation" },
          { title: "99.9%", text: "Data Accuracy in Model Validation" },
        ],
        ei = (e) => {
          let { content: t, text: n, index: s, currentIndex: a, key: o } = e;
          return (0, i.jsxs)(
            "div",
            {
              className: "".concat($().carouselItem, " "),
              children: [
                (0, i.jsx)("p", {
                  className: ""
                    .concat($().carouselYear, " ")
                    .concat(x, " ")
                    .concat(s === a ? $().active : ""),
                  children: n,
                }),
                0 !== t.length
                  ? (0, i.jsx)("div", {
                      className: ""
                        .concat($().carouselDot, " ")
                        .concat(s === a ? $().active : ""),
                    })
                  : (0, i.jsx)(i.Fragment, {}),
                (0, i.jsx)("ul", {
                  className: ""
                    .concat($().carouselP, " ")
                    .concat(s === a ? $().active : ""),
                  children:
                    null == t
                      ? void 0
                      : t.map((e, t) => (0, i.jsx)("li", { children: e }, t)),
                }),
              ],
            },
            o
          );
        };
      var es = () => {
          let [e, t] = (0, s.useState)(2),
            n = c(),
            a = [
              ...j.roadmapSlide,
              { year: "", content: [] },
              { year: "", content: [] },
            ],
            o = n > 800 ? a : j.roadmapSlide;
          return (0, i.jsxs)("div", {
            className: $().contentContainer,
            id: "roadmap",
            children: [
              (0, i.jsxs)("div", {
                className: $().numbersContainer,
                children: [
                  (0, i.jsx)(r.default, {
                    src: "/images/roadmap_circle.svg",
                    className: $().circle1,
                    width: 226,
                    height: 226,
                    alt: "",
                  }),
                  (0, i.jsx)(r.default, {
                    src: "/images/roadmap_circle.svg",
                    className: $().circle2,
                    width: 226,
                    height: 226,
                    alt: "",
                  }),
                  (0, i.jsx)(r.default, {
                    src: "/images/roadmap_circle2.svg",
                    className: $().circle3,
                    width: 226,
                    height: 226,
                    alt: "",
                  }),
                  (0, i.jsx)(r.default, {
                    src: "/images/roadmap_circle2.svg",
                    className: $().circle4,
                    width: 226,
                    height: 226,
                    alt: "",
                  }),
                  (0, i.jsx)("h2", {
                    className: "".concat($().h2, " ").concat(x),
                    children: "OmniTensor Pre-Launch Testing Results",
                  }),
                  (0, i.jsx)("div", {
                    className: $().glassBoxesContainer,
                    children: (0, i.jsx)(S.mb, {
                      cascade: !0,
                      triggerOnce: !0,
                      fraction: 0.5,
                      children: en.map((e, t) =>
                        (0, i.jsx)(et, { title: e.title, text: e.text }, t)
                      ),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("h2", {
                className: "".concat($().h2, " ").concat(x),
                children: "OmniTensor Roadmap",
              }),
              (0, i.jsxs)("div", {
                className: $().roadMapContainer,
                children: [
                  (0, i.jsxs)("div", {
                    style: { position: "relative" },
                    children: [
                      (0, i.jsx)(ee.Z, {
                        dots: !1,
                        infinite: !1,
                        speed: 400,
                        slidesToShow: n > 800 ? 3 : 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        arrows: !1,
                        adaptiveHeight: !0,
                        swipeToSlide: !0,
                        focusOnSelect: !0,
                        centerPadding: n > 800 ? "60px" : "150px",
                        centerMode: !0,
                        afterChange: (e) => {
                          t(e);
                        },
                        children: o.map((t, n) =>
                          (0, i.jsx)(
                            ei,
                            {
                              index: n,
                              content: t.content,
                              text: t.year,
                              currentIndex: e,
                            },
                            n
                          )
                        ),
                      }),
                      (0, i.jsx)("div", { className: $().carouselLine }),
                    ],
                  }),
                  (0, i.jsx)(r.default, {
                    src: "/images/roadmap_ripples.svg",
                    className: $().ripples,
                    width: 0,
                    height: 0,
                    alt: "",
                  }),
                  (0, i.jsx)(r.default, {
                    src: "/images/roadmap_fade.svg",
                    className: $().ripples,
                    width: 0,
                    height: 0,
                    alt: "",
                  }),
                  (0, i.jsx)("div", { className: $().fadeDiv }),
                  (0, i.jsx)("div", { className: $().fadeDivRight }),
                ],
              }),
            ],
          });
        },
        ea = n(9790),
        eo = n.n(ea),
        er = () => {
          let [e, t] = (0, s.useState)(0),
            [n, a] = (0, s.useState)(0),
            [o, c] = (0, s.useState)(!1),
            [l, d] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            d(!0), c(!0);
          }, []);
          let m = (n) => {
              n !== e &&
                (d(!1),
                setTimeout(() => {
                  t(n), d(!0);
                }, 500));
            },
            u = (e) => {
              e !== n &&
                (c(!1),
                setTimeout(() => {
                  a(e), c(!0);
                }, 200));
            };
          return (0, i.jsxs)("div", {
            className: eo().contentContainer,
            id: "products",
            children: [
              (0, i.jsxs)("div", {
                className: eo().topContainer,
                children: [
                  (0, i.jsx)(S.Mi, {
                    triggerOnce: !0,
                    fraction: 0.5,
                    children: (0, i.jsx)(F, { title: "Products" }),
                  }),
                  (0, i.jsx)(S.Mi, {
                    triggerOnce: !0,
                    direction: "right",
                    className: eo().topSlide,
                    fraction: 0.5,
                    children: (0, i.jsx)("div", {
                      className: eo().buttonsContainer,
                      children: v.map((e, t) =>
                        (0, i.jsx)(
                          "button",
                          {
                            onClick: () => {
                              m(t), u(t);
                            },
                            className: ""
                              .concat(eo().button, " ")
                              .concat(x, " ")
                              .concat(o && t === n ? eo().active : ""),
                            children: (0, i.jsx)("h3", {
                              className: eo().buttonTitle,
                              children: e.title,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(S.Mi, {
                triggerOnce: !0,
                direction: "up",
                style: { gap: "1rem" },
                fraction: 0.5,
                children: (0, i.jsx)("div", {
                  className: "".concat(eo().glassContainer, " ").concat(x),
                  children: (0, i.jsxs)("div", {
                    className: ""
                      .concat(eo().container, " ")
                      .concat(l ? eo().fadeIn : ""),
                    children: [
                      (0, i.jsxs)("div", {
                        className: eo().textContainer,
                        children: [
                          (0, i.jsx)("p", { children: v[e].text }),
                          (0, i.jsx)("button", {
                            onClick: () => window.open(v[e].link, "_blank"),
                            children: v[e].title,
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.default, {
                        src: v[e].logo,
                        className: eo().logo,
                        width: 0,
                        height: 0,
                        alt: "product logo",
                        unoptimized: !0,
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsxs)("div", {
                id: "tokenomics",
                className: eo().tokenomicsContainer,
                children: [
                  (0, i.jsx)(S.Mi, {
                    direction: "left",
                    triggerOnce: !0,
                    fraction: 1,
                    children: (0, i.jsx)(F, { title: "Tokenomoics" }),
                  }),
                  (0, i.jsxs)("div", {
                    className: eo().tokenomicsText,
                    children: [
                      (0, i.jsx)(S.Mi, {
                        direction: "left",
                        style: { flex: 1.2 },
                        triggerOnce: !0,
                        fraction: 1,
                        children: (0, i.jsxs)("h2", {
                          className: "".concat(eo().h2, " ").concat(x),
                          children: [b.title1, (0, i.jsx)("br", {}), b.title2],
                        }),
                      }),
                      (0, i.jsx)(S.Mi, {
                        direction: "right",
                        style: { flex: 1, flexDirection: "column" },
                        triggerOnce: !0,
                        fraction: 1,
                        children: (0, i.jsxs)("p", {
                          className: eo().p,
                          children: [
                            b.text1,
                            (0, i.jsx)("br", {}),
                            (0, i.jsx)("br", {}),
                            b.text2,
                            (0, i.jsx)(S.pT, {
                              triggerOnce: !0,
                              fraction: 1,
                              damping: 1,
                              children: (0, i.jsx)("button", {
                                onClick: () => {
                                  window.open(
                                    "https://etherauthority.io/omnitensor-smart-contract-audit/",
                                    "_blank"
                                  );
                                },
                                className: eo().buttonLearn,
                                children: "Audit",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ec = n(9509),
        el = n.n(ec);
      let ed = [
        {
          name: "Sebastian H.",
          description:
            "Co-founder with extensive experience in development, strategic planning, and infrastructure design",
          picture: "https://i.ibb.co/TRSfTck/1-4.png",
        },
        {
          name: "Mikel\uD835\uDED5",
          description:
            "Co-founder specializing in development, marketing, and managing key partnerships.",
          picture: "https://i.ibb.co/KX4rPkc/2-4.png",
        },
        {
          name: "Ciprian A.",
          description:
            "Lead developer with deep expertise in AI architecture and system integration.",
          picture: "https://i.ibb.co/7CT0jG7/3-4.png",
        },
        {
          name: "Michelle A.",
          description:
            "PR professional with a strong background in media relations, social media, and brand\xa0management.",
          picture: "https://i.ibb.co/gdmQn8P/4-4.png",
        },
      ];
      var em = () => {
          let e = c();
          return (0, i.jsxs)("div", {
            className: el().contentContainer,
            id: "our_team",
            children: [
              (0, i.jsx)(r.default, {
                src: "/images/roadmap_circle.svg",
                className: el().circle1,
                width: 226,
                height: 226,
                alt: "",
              }),
              (0, i.jsx)(r.default, {
                src: "/images/about_us_circles/circle3.svg",
                className: el().circle2,
                width: 226,
                height: 226,
                alt: "",
              }),
              (0, i.jsx)(r.default, {
                src: "/images/roadmap_circle.svg",
                className: el().circle3,
                width: 226,
                height: 226,
                alt: "",
              }),
              (0, i.jsx)(r.default, {
                src: "/images/roadmap_circle.svg",
                className: el().circle4,
                width: 226,
                height: 226,
                alt: "",
              }),
              (0, i.jsx)(r.default, {
                src: "/images/about_us_circles/circle3.svg",
                className: el().circle5,
                width: 226,
                height: 226,
                alt: "",
              }),
            ],
          });
        },
        eu = n(3487),
        eh = n.n(eu),
        e_ = () =>
          (0, i.jsxs)("div", {
            className: eh().joinContainer,
            children: [
              (0, i.jsxs)("div", {
                className: eh().contentContainer,
                children: [
                  (0, i.jsxs)("h2", {
                    className: "".concat(x, " ").concat(eh().h2),
                    children: [
                      "Shape the Future of Decentralized",
                      " ",
                      (0, i.jsx)("br", {}),
                      "AI with OmniTensor",
                    ],
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "OmniTensor is powered by its community. Join our vibrant ecosystem of developers, businesses and contributors who are leading the charge in decentralizing AI. Whether you’re looking to share your resources, develop cutting-edge AI applications, or simply stay connected, our community is where the future of AI is being built.",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: eh().buttonsContainer,
                children: (0, i.jsx)(S.z0, {
                  triggerOnce: !0,
                  cascade: !0,
                  fraction: 0.5,
                  children: y.map((e, t) =>
                    (0, i.jsxs)(
                      "a",
                      {
                        className: eh().button,
                        href: e.link,
                        target: "_blank",
                        children: [
                          (0, i.jsx)(r.default, {
                            src: e.icon,
                            width: 0,
                            height: 0,
                            alt: "",
                          }),
                          (0, i.jsx)("p", { children: e.title }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
              (0, i.jsxs)("div", {
                className: eh().contentContainer,
                children: [
                  (0, i.jsxs)("h2", {
                    className: "".concat(x, " ").concat(eh().h2),
                    children: [
                      (0, i.jsx)("br", {}),
                      " ",
                      (0, i.jsx)("br", {}),
                      "OmniTensorBrain",
                      " ",
                      (0, i.jsx)("br", {}),
                    ],
                  }),
                  (0, i.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html:
                        'The <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xB1373733E161E7AA0eed3c9Ca0549E200a977fa4" style="text-decoration:underline" target="_blank">$OMNIB</a> token powers the OmniTensorBrain AI agent, unlocking advanced AI functionalities such as private chat, document analysis, API integrations, and voting power within the ecosystem.',
                    },
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: eh().buttonsContainer,
                children: (0, i.jsx)(S.z0, {
                  triggerOnce: !0,
                  cascade: !0,
                  fraction: 0.5,
                  children: w.map((e, t) =>
                    (0, i.jsxs)(
                      "a",
                      {
                        className: eh().button,
                        href: e.link,
                        target: "_blank",
                        children: [
                          (0, i.jsx)(r.default, {
                            src: e.icon,
                            width: 0,
                            height: 0,
                            alt: "",
                          }),
                          (0, i.jsx)("p", { children: e.title }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          }),
        eg = (e) => {
          let { children: t, offset: n } = e,
            [a, o] = (0, s.useState)(!1),
            r = (0, s.useRef)(null),
            l = c();
          return (
            (0, s.useEffect)(() => {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting && !a && o(!0);
                  });
                },
                {
                  rootMargin:
                    l > 800 ? "0px 0px -100% 0px" : "0px 0px -20% 0px",
                }
              );
              return (
                r.current && e.observe(r.current),
                () => {
                  r.current && e.unobserve(r.current);
                }
              );
            }, []),
            (0, i.jsx)("div", {
              ref: r,
              className: ""
                .concat(G().fadeInSection, " ")
                .concat(a ? G().isVisible : ""),
              children: t,
            })
          );
        },
        ep = n(2117);
      function ex() {
        let [e, t] = (0, s.useState)(!1),
          [n, a] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            setTimeout(() => {
              a(!0);
            }, 1e3);
            let e = () => {
              window.scrollY > 0 ? t(!0) : t(!1);
            };
            return (
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, []),
          (0, i.jsx)("body", {
            children: n
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(d, { isScrolled: e }),
                    (0, i.jsx)(E, {}),
                    (0, i.jsxs)("div", {
                      className: G().midSectionContainer,
                      children: [
                        (0, i.jsx)(H, {}),
                        (0, i.jsx)(K, {}),
                        (0, i.jsx)(eg, { children: (0, i.jsx)(Z, {}) }),
                      ],
                    }),
                    (0, i.jsx)(es, {}),
                    (0, i.jsxs)("div", {
                      className: ""
                        .concat(G().second, " ")
                        .concat(G().midSectionContainer),
                      children: [
                        (0, i.jsx)(er, {}),
                        (0, i.jsx)(em, {}),
                        (0, i.jsx)(e_, {}),
                      ],
                    }),
                    (0, i.jsx)(k, {}),
                  ],
                })
              : (0, i.jsx)(ep.Spinner, {
                  color: "white",
                  style: { margin: "30rem auto" },
                }),
          })
        );
      }
    },
    878: function () {},
    1076: function (e) {
      e.exports = {
        midSectionContainer: "page_midSectionContainer__uPOeq",
        second: "page_second__RKjkK",
        fadeInSection: "page_fadeInSection__QytRF",
        isVisible: "page_isVisible__pOxsc",
        dimLight: "page_dimLight___o_pw",
        container: "page_container__LLik5",
        glassOverlay: "page_glassOverlay__tW_xz",
        fallDownComponent: "page_fallDownComponent__TNyQg",
        isFalling: "page_isFalling__SixPS",
        staggeredAnimation: "page_staggeredAnimation__mNiYt",
      };
    },
    1636: function (e) {
      e.exports = {
        carouselContainer: "Carousel_carouselContainer__iGelC",
        carousel: "Carousel_carousel__fKTL_",
        carouselTrack: "Carousel_carouselTrack__dGrgi",
        scroll: "Carousel_scroll__dOVLj",
        paused: "Carousel_paused___eyDe",
      };
    },
    3613: function (e) {
      e.exports = {
        footer: "Footer_footer___mXpK",
        container: "Footer_container__w17O5",
        contentContainer: "Footer_contentContainer__u_aVv",
        newsletter: "Footer_newsletter__I_6a2",
        subscribeForm: "Footer_subscribeForm__M68Dd",
        colorWhite: "Footer_colorWhite__kcl6m",
        footerLinks: "Footer_footerLinks__Y2poX",
        footerBottom: "Footer_footerBottom__YMG7I",
        socialItem: "Footer_socialItem__TDyIh",
      };
    },
    1725: function (e) {
      e.exports = {
        secondaryButton: "Header_secondaryButton__pFNz4",
        heroContainer: "Header_heroContainer__gucnB",
        fadedElipse: "Header_fadedElipse__4A3j_",
        hero: "Header_hero__1B_V0",
        heroContent: "Header_heroContent__9VYPz",
        highlight: "Header_highlight__gTeTc",
        subheading: "Header_subheading__tzE8m",
        buttons: "Header_buttons__strt7",
        primaryButton: "Header_primaryButton__wVngt",
        heroImage: "Header_heroImage__kSGOW",
        slideContainer: "Header_slideContainer__iDuSL",
      };
    },
    2573: function (e) {
      e.exports = {
        scrolled: "Menu_scrolled__Ni7_6",
        scrolledUp: "Menu_scrolledUp__Cg5tR",
        img: "Menu_img__x1dc1",
        container: "Menu_container__2wtOZ",
        nav: "Menu_nav__AeG8L",
        hyperlink: "Menu_hyperlink__ydSEA",
        button: "Menu_button__qvuMb",
        mobileMenu: "Menu_mobileMenu__8s0_G",
        top: "Menu_top__4JCGO",
        closeButton: "Menu_closeButton__lD2CJ",
        burgerMenu: "Menu_burgerMenu__XkuTX",
        linkContainer: "Menu_linkContainer__tQySy",
      };
    },
    2531: function (e) {
      e.exports = {
        container: "SectionTitle_container___E4sX",
        img: "SectionTitle_img__Lvl88",
        h3: "SectionTitle_h3__YFAzA",
      };
    },
    1379: function (e) {
      e.exports = {
        container: "AboutUs_container__yr_Wr",
        contentContainer: "AboutUs_contentContainer__y4s7w",
        textContainer: "AboutUs_textContainer__K_W3d",
        h2: "AboutUs_h2__3vKPc",
        p: "AboutUs_p__5Wr3v",
        textCenter: "AboutUs_textCenter__rVKHF",
        whoIsContainer: "AboutUs_whoIsContainer__khg2f",
        circle1: "AboutUs_circle1__5ob90",
        circle2: "AboutUs_circle2__3NsCD",
        circle3: "AboutUs_circle3__Jdi_d",
        circle4: "AboutUs_circle4__H5lqb",
        circle5: "AboutUs_circle5__eBne2",
        circle6: "AboutUs_circle6__GLAvL",
        glassBoxesContainer: "AboutUs_glassBoxesContainer__aABrC",
        glassContainer: "AboutUs_glassContainer__vAEsH",
        glassIcon: "AboutUs_glassIcon___w7VI",
        glassText: "AboutUs_glassText__u5T3D",
        secondContainer: "AboutUs_secondContainer__78f_K",
        thirdContainer: "AboutUs_thirdContainer__vuEUk",
      };
    },
    3487: function (e) {
      e.exports = {
        joinContainer: "Community_joinContainer__pAZA5",
        contentContainer: "Community_contentContainer__TDMZK",
        h2: "Community_h2__mqmUq",
        img: "Community_img__wDOeP",
        buttonsContainer: "Community_buttonsContainer__vLCby",
        button: "Community_button__D1I3y",
        medium: "Community_medium__BF1wr",
      };
    },
    9509: function (e) {
      e.exports = {
        contentContainer: "OurTeam_contentContainer___RMP1",
        profilesContainer: "OurTeam_profilesContainer__R7x6x",
        profileCardContainer: "OurTeam_profileCardContainer__kOmu_",
        textContainer: "OurTeam_textContainer__E_lt3",
        circle1: "OurTeam_circle1__Y_YKK",
        circle2: "OurTeam_circle2__Jt7j8",
        circle3: "OurTeam_circle3__6z_Lw",
        circle4: "OurTeam_circle4__ZrRth",
        circle5: "OurTeam_circle5__dQP_v",
      };
    },
    9790: function (e) {
      e.exports = {
        contentContainer: "Products_contentContainer__eoi17",
        tokenomicsContainer: "Products_tokenomicsContainer__iClGi",
        tokenomicsText: "Products_tokenomicsText___Ei8e",
        h2: "Products_h2__cquIs",
        p: "Products_p__yxdCM",
        buttonLearn: "Products_buttonLearn__AkdJh",
        topContainer: "Products_topContainer__B7Ke5",
        buttonsContainer: "Products_buttonsContainer__rMS3T",
        topSlide: "Products_topSlide__Xyyk8",
        button: "Products_button__xMqow",
        active: "Products_active__8Budi",
        glassContainer: "Products_glassContainer__6q_IT",
        container: "Products_container__8fIOi",
        textContainer: "Products_textContainer__XkAlP",
        fadeIn: "Products_fadeIn___f0rd",
      };
    },
    513: function (e) {
      e.exports = {
        container: "Questions_container__sRm5K",
        sidebar: "Questions_sidebar__NVLBn",
        active: "Questions_active__aoOM8",
        content: "Questions_content__ArcDh",
        fadeIn: "Questions_fadeIn__h3vYl",
        stickyQuestionBar: "Questions_stickyQuestionBar__NC6gc",
        scrolledPast: "Questions_scrolledPast__Zop7M",
        noMenu: "Questions_noMenu___7dc7",
        noBar: "Questions_noBar__ndQiV",
      };
    },
    9054: function (e) {
      e.exports = {
        glassBoxesContainer: "Roadmap_glassBoxesContainer__HAKKM",
        glassContainer: "Roadmap_glassContainer__l4AAQ",
        glassText: "Roadmap_glassText__WyvkE",
        p: "Roadmap_p__acmco",
        h2: "Roadmap_h2__zcF_W",
        contentContainer: "Roadmap_contentContainer__Ow2is",
        numbersContainer: "Roadmap_numbersContainer__nI4Lk",
        circle1: "Roadmap_circle1___CJ9D",
        circle2: "Roadmap_circle2__QS4H3",
        circle3: "Roadmap_circle3__dSOGj",
        circle4: "Roadmap_circle4__CohuR",
        roadMapContainer: "Roadmap_roadMapContainer__k8_Tb",
        carouselItem: "Roadmap_carouselItem__9NLA5",
        carouselP: "Roadmap_carouselP__6sVUH",
        active: "Roadmap_active__yR_H_",
        carouselYear: "Roadmap_carouselYear__FWW7n",
        carouselLine: "Roadmap_carouselLine__0XotW",
        carouselDot: "Roadmap_carouselDot__2bc4L",
        ripples: "Roadmap_ripples__ige45",
        fadeDiv: "Roadmap_fadeDiv__ELlR9",
        fadeDivRight: "Roadmap_fadeDivRight__sSkkZ",
      };
    },
    9965: function (e) {
      e.exports = {
        container: "Technology_container__SQf6p",
        contentContainer: "Technology_contentContainer__fOyUM",
        textContainer: "Technology_textContainer__sTHoR",
        h2: "Technology_h2__8Be3G",
        span: "Technology_span__u32F8",
        p: "Technology_p__eK0GT",
        illustration: "Technology_illustration__KCpbv",
      };
    },
  },
  function (e) {
    e.O(0, [857, 843, 725, 683, 390, 971, 23, 744], function () {
      return e((e.s = 6541));
    }),
      (_N_E = e.O());
  },
]);
