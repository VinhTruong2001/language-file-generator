const generateFile = () => {
    let fileContent = `export default {
        nav: {
            home: "{0}",
            about: "{1}",
            features: "{2}",
            pricing: "{3}",
            testimonials: "{4}",
            download: "{5}",
            signUp: "{6}",
        },
        home: {
            heading: "{7}",
            subHeading: "{8}",
            freeTrial: "{9}",
            scrollDown: "{10}",
        },
        about: {
            introHeader: "{11}",
            lead: "{12}",
        },
        features: {
            feature1: {
                heading: "{13}",
                content: "{14}",
            },
            feature2: {
                heading: "{15}",
                content: "{16}",
            },
            feature3: {
                heading: "{17}",
                content: "{18}",
            },
            feature4: {
                heading: "{19}",
                content: "{20}",
            },
            feature5: {
                heading: "{21}",
                content: "{22}",
            },
            feature6: {
                heading: "{23}",
                content: "{24}",
            },
        },
        howWork: {
            introHeader: "{25}",
            step1: {
                heading: "{26}",
                content: "{27}",
            },
            step2: {
                heading: "{28}",
                content: "{29}",
            },
            step3: {
                heading: "{30}",
                content: "{31}",
            },
            step4: {
                heading: "{32}",
                content: "{33}",
            },
            step5: {
                heading: "{34}",
                content: "{35}",
            },
            step6: {
                heading: "{36}",
                content: "{37}",
            },
        },
        pricing: {
            introHeader: "{38}",
            introContent: "{39}",
            plans: {
                currency: "{40}",
                start: "{41}",
                pro: {
                    title: "{42}",
                    price: "{43}",
                    per: "{44}",
                    feats: {
                        feat1: {
                            boldContent: "{45}",
                            content: "{46}",
                        },
                        feat2: {
                            content: "{47}",
                        },
                        feat3: {
                            content: "{48}",
                        },
                        feat4: {
                            content: "{49}",
                        },
                        feat5: {
                            content:  "{50}",
                        }
                    } 
                },
                enterprise: {
                    title: "{51}",
                    price: "{52}",
                    per: "{53}",
                    feats: {
                        feat1: {
                            boldContent: "{54}",
                            content: "{boldContent}",
                        },
                        feat2: {
                            boldContent: "{55}",
                            content: "{boldContent}",
                        },
                        feat3: {
                            content: "{56}",
                        },
                        feat4: {
                            content: "{57}",
                        },
                        feat5: {
                            content: "{58}",
                        }
                    } 
                },
            },
        },
        testimonials: {
            introHeader: "{59}",
            testimonial1: {
                author: "Anh Tran",
                position: "CEO",
                organization: "Vietnovel",
                content: "{60}",
            },
            testimonial2: {
                author: "Tri Ton",
                position: "CEO",
                organization: "OpenWorld",
                content: "{61}",
            }
        },
        download: {
            introHeader: "{62}",
            lead: "{63}",
            downloadBtn: "{64}",
        },
        footer: {
            summary: "{65}",
            contact: {
                heading: "{66}",
                address: "{67}",
                postal: "{68}",
                email: "{69}",
                phone: "{70}",
            },
            link: "{71}",
        },
        warnings: {
            videoTag: "{72}",
            backToTop: "{73}",
        }
    }`
    
    const allTransScripts = document.querySelectorAll("textarea")
    
    for (let i = 0; i < allTransScripts.length; i++) {
        const placeholder = `{${i}}`;
        fileContent = fileContent.replace(placeholder, allTransScripts[i].value.trim());
    }
    
    const fileName = "test.js";
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent));
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}