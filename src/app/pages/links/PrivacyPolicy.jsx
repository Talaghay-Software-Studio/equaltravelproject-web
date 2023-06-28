import { Grid, Typography } from "@mui/material";
import Layout from "../Layout";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    pageTitle: {
        fontFamily: "Montserrat !important",
        fontWeight: "700 !important",
        fontSize: "2.875rem !important",
        color: "#484848",
        textTransform: "uppercase"
        },
    pageSubtitle: {
        fontFamily: "Montserrat !important",
        fontWeight: "700 !important"
    },
    emphasizeText: {
        fontWeight: "700 !important"
    },
    verticalSpacing: {
        padding: "20px 0px"
    },
    bottomSpacing:{
        paddingBottom: "20px"
    }
  }))

export default function PrivacyPolicy(){
    const compStyles = useStyles();

    return (
        <Layout topMargin={true}>
            <Grid sx={{ padding: "10px 44px 20px", color: "#9A9A9A", lineHeight: "26px" }}>
                <Typography classes={{root: compStyles.pageTitle }}> Privacy Policy </Typography>
                <div className={`${compStyles.verticalSpacing}`}>
                    {`Equal Travel Project is dedicated to respecting the privacy of your personal information. This Privacy Policy describes what information is collected from you on equaltravelproject.com (hereinafter the “website”) and how it is used. This Privacy Policy applies to this website and any products or services that we offer that link to this policy. The term “you” refers to anyone who uses, visits, or views the website.`}
                </div>
                <div className={`${compStyles.emphasizeText } ${compStyles.bottomSpacing}`}>
                    {`By visiting and using the website, you accept and agree to be bound by this privacy policy. Your continued use of the website after posting of any changes to our Privacy Policy constitutes your acceptance of those changes and updates. You must not access or use the website if you do not wish to be bound by this Privacy Policy.`}
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`CHILDREN’S PRIVACY`} </Typography>
                    {`We respect the privacy of children and “child” means an individual under the age of 13. This policy is in accordance with the Children's Online Privacy Protection Act (“COPPA”). This website's information and content are only intended for people over the age of 18. This website is not intended for children under the age of 13. Without prior parental or guardian consent, we do not knowingly collect, use, or disclose personal information from children under the age of 13. If you believe that personal information was collected without parental or guardian consent from a child under the age of 13, please contact us to have that information deleted.`}
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`WHAT INFORMATION WE COLLECT AND HOW IT IS USED`} </Typography>
                    <div>
                        {`When you access the website, you may provide certain personally identifiable information including but not limited to your name, email address, phone number, address, avatar image, credit card information when you make a purchase on the website (“personal information”).`}
                    </div>
                    <div className={`${compStyles.verticalSpacing}`}>
                        {`This information is collected when you register on the site, place an order, subscribe to a newsletter, contact us, use the search feature on the website, provide comments or any other feedback, fill out a form or use the live chat or enter any other information on the website to communicate with us. From time to time, we may also collect information that you submit when you participate in any online surveys that we may post on our website.`}
                    </div>
                    <div>
                        {`Your personal information is used to personalize your experience, improve the website to better serve you, provide customer service support, efficiently process your requests or transactions, tailor advertisements to you, elicit reviews of services or products, provide you offers, promotions and to follow up with you through correspondence (email, live chat, or phone). We may also use this information to provide you offers and promotions from our partners and/or our affiliates in exchange for a commission without additional cost to you.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`GOOGLE ANALYTICS`} </Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`Just like other websites, this website automatically collects certain information about you through Log Data and Google Analytics. Log Data is information about your computer’s Internet Protocol Address, which is your “IP” address, browser information, Internet Service Provider’s information, your operating system, and your browser type. Similarly, Google Analytics collects certain information about your location, browsing history, the pages you visit, the equipment you used to access the website, traffic patterns, and other general patterns related to your use of the website.`}
                    </div>
                    <div>
                        {`This information is used to analyze website statistics related to user behavior and interests, improve our performance and your use of the website and to further enhance our products and services offered to you. Please see Google’s Privacy and Terms to learn more about their privacy practices.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`COMMENTS AND SOCIAL MEDIA`} </Typography>
                    <div>
                        {`If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. When you leave a comment, your name, email address and website/organization name is not shared with a third party and may be used to communicate with you.`}
                    </div>
                    <div className={`${compStyles.verticalSpacing}`}>
                        {`Social media accounts and sharing options are available on this website. Social media sites (Facebook, Twitter, YouTube, Pinterest, and others) can track your personal information. Should you choose to interact with us on social media, please note that you will be voluntarily disclosing that personal information. This information is no longer private. It becomes public information and can be collected and used by others. We have no control over and take no responsibility for the use, storage or dissemination of such publicly-disclosed personal information by you.`}
                    </div>
                    <div>
                        {`Any such interactions via comments and social media with us do not subject us to any kind of liability related to misuse of your information by others.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`USE OF COOKIES`} </Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`The website may use cookies to facilitate your use of the website. Cookies are files with small amounts of data including an anonymous unique identifier that a website sends to your computer’s hard drive when you are viewing the website. Just like other websites, we automatically collect some non-personally identifiable information including but not limited to your IP address, geographic location, language preference, date and time of visitors.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`Some features of our website may use Flash cookies, which are small files stored on your computer by websites that use Adobe Flash Player. They can store data such as preferences, settings and usage information like which pages you visit. The main difference between traditional cookies and flash cookies is that they are not managed through the browser but locally on your computer.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`When you leave a comment on our website, you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`If you have an account and you log in to this website, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`We may use cookies for various reasons such as optimizing and personalizing your browsing experience, checking our website analytics, saving your preferences and settings for future use, serving ads based on your liking and interests, affiliate marketing and posting comments on our website.`}
                    </div>
                    <div>
                        {`This information is only collected to better serve and understand your user experience on the website. You have the option of turning off cookies on your computer should you wish to do so. If you choose to do that, you may not be able to view all the features and content of this website.`}
                    </div>
                </div>
                <div  className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`USE OF WEB BEACONS AND PIXELS`} </Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`In conjunction with the use of cookies, third parties may also use web beacons, which are also known as clear GIFs, web bugs or pixel tags to collect general information about your use of our website. They monitor user activity and are used to track customer behavior data. This information may be relevant to third parties such as the ad networks used on our website to tailor the advertising based on your behavior and interests.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`We may use social media pixels to track and collect general information about your use in compliance with different social media sites (Facebook, Twitter, Pinterest, and others) for the purpose of promoting products, tracking conversions, remarketing, running target advertisements and so forth.`}
                    </div>
                    <div>
                        {`Third parties like Facebook may use their own cookies, web beacons and other technologies to collect and receive information from our website for the purpose of providing target advertisements. You may see our ads on Facebook or YouTube after you have visited our website.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`THIRD-PARTY LINKS AND USE`} </Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`We may include, offer or advertise third party links, products or services on the website. Once you click on a third-party link and leave this website, you are no longer bound by our Privacy Policy and Terms and Conditions.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`Articles on this website may include embedded content (e.g. videos, images, advertisements, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`We may use Google AdSense advertising along with any other third-party advertising on the website. Google is a third party that also uses cookies to serve ads on the website for the purpose of providing a positive user experience. Third-party vendors such as Google use cookies to serve ads based on a user’s prior visits to the website. You can opt-out of Google by visiting their privacy policy and ad settings.`}
                    </div>
                    <div>
                        {`We have no control over these third parties and they have their own privacy policies. Neither are we responsible for the activities and practices of these third parties. You should contact them directly and read their privacy policies for any questions. You also agree that your use of these third-party websites is solely at your risk.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`DISCLOSURE OF YOUR INFORMATION`} </Typography>
                    <div>
                        {`As a general rule, we do not disclose your personal information to third parties without your consent with the exception of the following circumstances:`}
                    </div>
                    <div>
                        <ol>
                            <li>
                                {`We may disclose your information to our trusted third parties that work with us such as our website hosting partners, email marketing service provider, other service providers that assist in the operation of the website, and any other affiliates and subsidiaries we rely upon to provide you products and services offered here.`}
                            </li>
                            <li>
                                {`We may disclose your information to contractors or third parties we use to support our business. These parties may use your data only to provide the services requested by us and for no other purpose, and they are bound by contractual obligations to keep your information confidential.`}
                            </li>
                            <li>
                                {` We may disclose your information in order to comply with state or federal regulations related to copyright infringement lawsuits or any other legal claims related to the website.`}
                            </li>
                            <li>
                                {`We may disclose your information to enforce our website or product terms and conditions or terms of sale and any other agreements we may have entered into for billing and collection purposes.`}
                            </li>
                            <li>
                                {`We may disclose your information to our successor and/or acquiring party in the event of a merger, acquisition, restructuring, dissolution or partial sale in the future. However, your personal information will be transferred to the acquiring party in accordance with this privacy policy.`}
                            </li>
                        </ol>
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`EMAIL MARKETING`} </Typography>
                    <div>
                        {`You have the option of opting in or unsubscribing from our email list. By subscribing and opting in, you agree to receive newsletters, updates, messages, promotional materials and any other content related to this website. When you send an email, your email message along with email address and responses are saved for communication purposes with you. This information is kept confidential and we do not share, sell or trade your email information with third parties except as otherwise stated in this privacy policy.`}
                    </div>
                    <div>
                        {`If you are in the European Union and opt-in to receive any of our free products or services and/or purchase any products or services through our website then you will be subscribed to receive our free email newsletter once you affirmatively consent to it. Please see the Opt-Out section below should you wish to “unsubscribe” and not receive any emails from us.`}
                    </div>
                    <div>
                        {`But if you are NOT in the European Union then you will be automatically subscribed to receive our free email newsletter once you opt-in to receive any of our free products or services and/or purchase any products or services through our website. Please see the Opt-Out section below should you wish to “unsubscribe” and not receive any emails from us.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`OPT-OUT`} </Typography>
                    <div>
                        {`We comply with the CAN-SPAM Act of 2003 and do not spam or send misleading information. Should you wish to no longer receive communication from us, you have the option of unsubscribing by clicking “unsubscribe” at the bottom of the email we send to you or by contacting us.`}
                    </div>
                    <div>
                        {`As for third party websites, please contact them directly to unsubscribe and/or opt-out from their communications.`}
                    </div>
                    <div>
                        {`We are in compliance with the GDPR along with the email marketing service we use to collect your data.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`GDPR VISITOR RIGHTS (FOR EU AND UK CUSTOMERS AND VISITORS)`} </Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`If you are located in the European Union (“EU”) or the United Kingdom (“UK”), you are entitled to certain rights and information listed below under the General Data Protection Regulation (“GDPR).`}
                    </div>
                    <div>
                        {`We will retain any information you choose to provide to us until the earlier of:`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        <ol>
                            <li>
                                {`You ask us to delete the information by sending a request to info@equaltravelproject.com Please note that such requests may result in you no longer being able to access paid or free content previously provided to you.`}
                            </li>
                            <li>
                                {`Our decision to cease using our existing data providers.`}
                            </li>
                            <li>
                                {`The Company decides to no longer be in business or continue to offer the services.`}
                            </li>
                            <li>
                                {`The data is no longer needed to provide you service, is too costly to maintain further retention, or the Company finds it outdated.`}
                            </li>
                        </ol>
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`You have the right to request access to your data that we store and have the ability to access your personal data.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`You have the right to either rectify or erase your personal data. You have the right to verify the accuracy of your personal data and have it corrected or removed completely`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`You have the right to seek restrictions on the processing of your data. When you restrict the processing of your data, we can store your data but cannot process it further.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`You have the right to object to the processing of your data in certain circumstances including but not limited to direct marketing, profiling, scientific or historical research purposes, statistical purposes, automated decision making and profiling and tasks based on legitimate interests or in the public interest/exercise of official authority.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`You have the right to the portability of your data. You have the right to request your personal data from us, receive it and transfer it to another controller.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`You have the right to withdraw consent at any time. If you have provided consent to the Company’s processing of your personal data, you have the right to withdraw that consent any time without affecting the lawfulness of processing based upon consent that occurred prior to your withdrawal of consent.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`You have the right to lodge a complaint with a supervisory authority that has jurisdiction over issues related to the GDPR.`}
                    </div>
                    <div>
                        {`We require only the information that is reasonably necessary to enter into a contract with you. We will not require you to provide consent for any unnecessary processing as a condition of entering into a contract with us.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`LEGAL BASIS FOR PROCESSING DATA UNDER THE GDPR`} </Typography>
                    <div>
                        {`Under the GDPR, we may process your data under the following legal basis:`}
                    </div>
                    <div>
                        <ul>
                            <li>
                                <span className={`${compStyles.emphasizeText}`}>{`Consent`}</span>
                                {`: when you give us clear consent to process your personal data for one or more specific purpose.`}
                            </li>
                            <li>
                                <span className={`${compStyles.emphasizeText}`}>{`Contractual Necessity`}</span>
                                {`: when processing your personal data is necessary to fulfill a contract with you.`}
                            </li>
                            <li>
                                <span className={`${compStyles.emphasizeText}`}>{`Legal Obligation`}</span>
                                {`: when processing of your personal data is necessary to comply with the law such as data related to taxes or employee records.`}
                            </li>
                            <li>
                                <span className={`${compStyles.emphasizeText}`}>{`Vital Interests`}</span>
                                {`: when processing of your personal data is necessary to protect your life or health.`}
                            </li>
                            <li>
                                <span className={`${compStyles.emphasizeText}`}>{`Public Interests`}</span>
                                {`: when processing of your personal data is necessary for the performance of a task carried out in the public interest or for official functions.`}
                            </li>
                            <li>
                                <span className={`${compStyles.emphasizeText}`}>{`Legitimate Interests`}</span>
                                {`: when processing of your personal data is necessary to further our legitimate interests such as marketing activities.`}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`YOUR STATE PRIVACY RIGHTS`} </Typography>
                    <div>
                        {`State consumer privacy laws may give their residents additional rights in terms of how we use their personal information. These privacy rights vary depending on the local laws that apply to you.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        <div className={`${compStyles.emphasizeText}`}>{`California, Colorado, Connecticut, Virginia, and Utah each provide their state residents with rights to:`}</div>
                        <ul>
                            <li>{`Confirm whether we process their personal information.`}</li>
                            <li>{`Access and delete certain personal information.`}</li>
                            <li>{`Data portability.`}</li>
                            <li>{`Opt-out of personal data processing for targeted advertising and sales.`}</li>
                        </ul>
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        <div className={`${compStyles.emphasizeText}`}>{`California, Colorado, Connecticut, and Virginia also provide their state residents with rights to:`}</div>
                        <ul>
                            <li>{`Correct inaccuracies in their personal information, taking into account the information's nature processing purpose.`}</li>
                            <li>{`Opt-out of profiling in furtherance of decisions that produce legal or similarly significant effects.`}</li>
                        </ul>
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        <span className={`${compStyles.emphasizeText}`}>{`Nevada `}</span>
                        {`provides its residents with a limited right to opt-out of certain types of personal information being sold by a business. The opt-out option does not apply to all types of data, however; it does protect sensitive medical or financial data, for example. Please note that we do not currently sell data that triggers the opt-out requirements of that statute.`}
                    </div>
                    <div>
                        {`To exercise any of these rights above under different states, please contact us with your request at info@equaltravelproject.com and please include your name, email address, and mailing address.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`CALIFORNIA CONSUMER PRIVACY ACT (CCPA) AND CALIFORNIA PRIVACY RIGHTS ACT (CPRA) COMPLIANCE AND YOUR LEGAL RIGHTS`} </Typography>
                    <div>
                        {`If you live in California, you have additional rights under California law, and we comply with the CCPA and CPRA because we may have visitors from California on our website. Here are your legal rights under CCPA/CPRA:`}
                        <ol>
                            <li>
                                {`You have the right to know the categories of personal information we have collected, sold or disclosed about you to third parties.`}
                            </li>
                            <li>
                                {`You have the right to opt-out of the sale and sharing of your personal information with third parties. If you are under the age of 16, you have the right to opt in to such sales, or to have a parent or guardian opt in on your behalf.`}
                            </li>
                            <li>
                                {`You also have the right to access your personal information, which we will provide within 30 days of such request.`}
                            </li>
                            <li>
                                {`You have the right to know what personal information is collected from you and how it is used, which we explained in this Privacy Policy.`}
                            </li>
                            <li>
                                {`You have the right to correct your personal information.`}
                            </li>
                            <li>
                                {`You have the right to have your personal information deleted, subject to some exceptions.`}
                            </li>
                            <li>
                                {`You have the right to equal service, price and no discrimination`}
                            </li>
                            <li>
                                {`You have the right to data portability and right to request your personal information and use it for your own purposes.`}
                            </li>
                            <li>
                                {`You have the right to consent and/or limit the use and disclosure of your sensitive personal information.`}
                            </li>
                        </ol>
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}> {`CATEGORIES OF PERSONAL INFORMATION COLLECTED AND DISCLOSED FOR A BUSINESS PURPOSE`} </Typography>
                    <div>
                        {`The types of personal information we collect and how we use it have already been listed above, but under the CCPA/CPRA, the following categories of personal information may have been collected and disclosed for business purposes in the previous 12 months:`}
                        <ul>
                            <li>
                                {`Identifiers such as your name, address, phone number, email address and other similar identifiers`}
                            </li>
                            <li>
                                {`Protected classification characteristics such as your age, gender, religion and disability information`}
                            </li>
                            <li>
                                {`Commercial information such as your use of our products and services`}
                            </li>
                            <li>
                                {`Internet/Network information such as your IP address, search history, browser and device information`}
                            </li>
                            <li>
                                {`Geolocation data such as the information about your physical location or movements`}
                            </li>
                            <li>
                                {`Sensory information such as audio, electronic, photos or other visual information`}
                            </li>
                            <li>
                                {`Professional or Employment Information such as your job history including previous employer and performance evaluations`}
                            </li>
                            <li>
                                {`Biometric information such as fingerprints, faceprints, voiceprints, genetic and physiological activity patterns. We do not [or do] collect any biometric information from you.`}
                            </li>
                            <li>
                                {`Education information such as records related to your educational institution (grades, transcripts, class lists, student schedules and so forth). We do not [or do] collect any such education information.`}
                            </li>
                            <li>
                                {`Inferences such as information reflecting your interests, preferences, characteristics, physiological trends, and abilities.`}
                            </li>
                            <li>
                                {`Other Personal Information such as information provided by you directly when you fill a form on our website, register for an event scheduled by us, post a comment on our website or social media, make a purchase from us, your account login or credentials allowing you to access a product or account, telephone number, and any other information you provide to us.`}
                            </li>
                            <li>
                                {`Sensitive personal information such as your social security, driver’s license, state identification card or passport number. We do not [or do] collect this sensitive personal information from you.`}
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`HOW WE COLLECT YOUR PERSONAL INFORMATION AND FOR WHAT PURPOSE`}
                    </Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`We collect this personal information directly from you, from your browser or device, use of cookies, service providers, our business partners, affiliates, or from third parties. We do not sell your personal information to third parties.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`We use the information we collect for various purposes depending on how you interact with us. These purposes include:`}
                        <ul>
                            <li>{`To provide our services or products to you including invoices and statements`}</li>
                            <li>{`To create, maintain or secure your account with us`}</li>
                            <li>{`To process your requests, purchases, transactions and payments`}</li>
                            <li>{`To communicate with you about your account and our products/services`}</li>
                            <li>{`To communicate with you about your account and our products/services`}</li>
                            <li>{`To market or advertise our new products and promotions to you via email or other social media, to answer your questions, and to understand your needs and preferences.`}</li>
                            <li>{`To improve our website, products, services, content and advertising and personalize them to your interests and preferences`}</li>
                            <li>{`To better understand the demographics of our users, analyze data and usage trends`}</li>
                            <li>{`To help you share our content, products, services, and your experience working with us with your friends and followers on social media`}</li>
                            <li>{`To hire or evaluate you as a candidate when you seek employment with us`}</li>
                            <li>{`To protect our website, products and services from misuse and to ensure security`}</li>
                            <li>{`To process payments or to prevent theft and fraud`}</li>
                            <li>{`To transfer business in any merger, acquisition, reorganization, sale of assets, bankruptcy where we may sell, transfer or share some of our business assets including information related to our customers. In those instances, you will be notified of such ownership changes as well as the rights you have regarding your personal information.`}</li>
                            <li>{`To comply with legal requirements and to enforce our terms and agreements with you`}</li>
                            <li>{`To assess or carry out a merger, dissolution, restructuring, reorganization, or other sale or transfer of some or all of our assets, whether as part of a bankruptcy or similar proceeding, in which personal information about our website users, including our email list, is one of the assets transferred.`}</li>
                        </ul>
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`We may also use your information in other ways for which we provide specific notice at the time of collection. We may combine different types of information that we collect about you for any of the purposes described above.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`Please be advised we DO NOT SELL YOUR PERSONAL INFORMATION to third parties and have never sold your personal information. We do not intend to sell your personal information in the future either.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`Under the CCPA and CPRA, you still have the right to opt-out of sharing your personal information and send us a “do not sell or share my personal information” request. If you would like to exercise any of your rights under California law, please submit a verifiable consumer request to us by sending us an email at info@equaltravelproject.com`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`Only you, as the person registered with the California Secretary of State, or someone you authorize to act on your behalf, can make such verifiable consumer requests related to your personal information.`}
                    </div>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`Your verifiable consumer request must provide sufficient information that allows us to verify that you are the person you are claiming to be or that you are the authorized representative of such person about whom we had collected personal information. You must describe your request with enough details such as your first and last name, address and your country that allow us to properly understand the request and respond to it. Please note we cannot respond to your request or provide you with personal information unless we first verify your identity or authority to make such a request and confirm that the personal information relates to you. We will make all attempts to respond to your request within 30 days of receipt.`}
                    </div>
                    <div>
                        {`The above-mentioned California privacy rights are not absolutely guaranteed because there are some exceptions that allow us to refuse your request. We are only required to respect these rights if we are acting as a business under the CCPA/CPRA and the requested rights have been granted and applied to you under the CCPA/CPRA.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>{`CALIFORNIA’S “SHINE THE LIGHT” ACT`}</Typography>
                    <div>
                        {`Pursuant to California’s “Shine the Light Act,” you are permitted to request information about the manner in which we share certain categories of information with third parties for their marketing use. We may disclose your personal information to our affiliates or other related third parties such as service providers, vendors for their use in marketing to you, so we can provide the products and/or services offered on this website to you. When we disclose such information, your personal information is still kept confidential and between us and that third party. It is not used for any other purpose that’s not permitted under the laws.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>{`DO NOT TRACK SIGNALS`}</Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`This privacy notice for California residents supplements the information included in the previous sections of this privacy policy. California and Delaware law also requires us to state whether we honor “Do Not Track” settings in your browser regarding targeted advertising, and please note we do not monitor or respond to Do Not Track browser requests.`}
                    </div>
                    <div>
                        {`You can also enable or disable Do not Track in your browser. This is a setting that tells websites not to track your online activities. To enable or disable it, go to the "Privacy" or "Security" tab in your browser's settings menu. Depending on which browser you're using, you may find the option under "Do Not Track Requests" or something similar.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>{`DATA RETENTION`}</Typography>
                    <div>
                        {`We will retain your information as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We may also retain and use your information to continue offering you our products and services, comply with our legal and accounting obligations, resolve disputes and enforce our agreements.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>{`SECURITY`}</Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`The security of your personal information is important to us, and we strive to follow generally commercial industry standards to protect your personal information submitted to us voluntarily and automatically. However, no method of transmission over the Internet is 100% secure and we cannot guarantee the absolute security of your information. When you make a credit card purchase or purchase through any means on the website, you will be directed to a third-party vendor to complete the transaction. Any information you provide during the checkout process is not stored on our website but instead provided to the third-party vendor that completes the purchase transaction.`}
                    </div>
                    <div>
                        {`By using this website, you agree to hold us harmless for any security breach and for any unauthorized use of your personal information by third parties. You also agree that we cannot be held responsible for any disclosure of your information through our website without our knowledge and consent.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>{`PRIVACY POLICY UPDATES`}</Typography>
                    <div>
                        {`This privacy policy is effective as of 05/30/2023 and will be updated and modified as needed. You are responsible for visiting this page periodically to check for future updates to this policy. Any modifications to this privacy policy will be effective upon our publishing of the new terms, and your continued use of our website after the posting of any updates constitutes your acceptance of our modified privacy policy.`}
                    </div>
                </div>
                <div>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>{`CONTACT`}</Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`For any questions or comments regarding the privacy policy, please contact us at info@equaltravelproject.com`}
                    </div>
                </div>
            </Grid>
        </Layout>
    )
}