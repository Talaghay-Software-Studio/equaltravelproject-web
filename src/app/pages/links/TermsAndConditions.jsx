import { Grid, Typography } from "@mui/material";
import Layout from "../Layout";
import makeStyles from "@mui/styles/makeStyles";

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
    bottomSpacing: {
        paddingBottom: "20px"
    },
    email: {
        color: "#3B79C9",
        cursor: "pointer"
    }
  }))

export default function TermsAndConditions(){
    const compStyles = useStyles();
    return (
        <Layout topMargin="true" appBarStyle="primary">
            <Grid sx={{ padding: "10px 44px 20px", color: "#9A9A9A", lineHeight: "26px" }}>
                <Typography classes={{root: compStyles.pageTitle }}> Terms and Conditions </Typography>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`TERMS AND CONDITIONS`}
                    </Typography>
                    <div>
                        {`By visiting and using (hereinafter the “website”) equaltravelproject.com, you accept and agree to be bound by these Terms and Conditions including our Disclaimer and Privacy Policy posted on the website and incorporated herein by reference.`}
                    </div>
                    <div>
                        {`The term “you” refers to anyone who uses, visits and/or views the website. Equal Travel Project reserves the right to amend or modify these terms and conditions in its sole discretion at any time without notice and by using the website, you accept those amendments. It is your responsibility to periodically check the website for updates.`}
                    </div>
                    <div>
                        {`Your continued use of the website after posting of any changes to our Terms and Conditions constitutes your acceptance of those changes and updates. You must not access or use the website if you do not wish to be bound by these Terms and Conditions.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`INTENDED AGE`}
                    </Typography>
                    {`All information and content on this website are intended for individuals over the age of 18. Children, as defined in our Privacy Policy, are prohibited from using this website.`}
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`PRIVACY POLICY`}
                    </Typography>
                    {`We are dedicated to respecting the privacy of your personal information. Your acceptance of our Privacy Policy is expressly incorporated into these Terms and Conditions. Please review our Privacy Policy for more information.`}
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`DISCLAIMER`}
                    </Typography>
                    {`Your acceptance of our Disclaimer is expressly incorporated into these Terms and Conditions. Please review the Disclaimer for more information.`}
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`MANDATORY ARBITRATION AND GOVERNING LAW`}
                    </Typography>
                    <div>
                        {`You expressly waive any legal claims you may have now or in the future arising from or related to the website and our products/services. In the event of a dispute, claim, or controversy arising from or relating to your use of this website, the terms and conditions shall be construed in accordance with the laws of the state of Florida, United States.`}
                    </div>
                    <div>
                        {`You agree to first resolve any disputes or claims through mandatory arbitration, and you consent to and submit to the jurisdiction and courts of Florida, without regard to conflict of law principles or where the parties are located at the time of the dispute.`}
                    </div>
                    <div>
                        {`You agree to bear the full cost of arbitration, to the extent permitted by law. Participation in arbitration in good faith is a condition precedent to pursuing any other legal or equitable remedies available, such as litigation or any other legal procedure. You also agree that if a legal claim is filed after the required arbitration, the prevailing party shall be entitled to recover reasonable attorney's fees and other legal costs.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`INTELLECTUAL PROPERTY`}
                    </Typography>
                    <div>
                        {`All content on this website including but not limited to text, posts, logos, marks, graphics, files, materials, services, products, videos, audio, applications, computer code, designs, downloads and all other information here (collectively, the “Content”) is owned by us and is protected by copyright, trademark and other intellectual property and unfair competition laws with the exception of any content from others that we are lawfully permitted to use. You are granted a limited revocable license to print or download Content from the website for your own personal, non-commercial, non-transferrable, informational and educational use only while ensuring it’s not in violation of any copyright, trademark, and intellectual property or proprietary rights.`}
                    </div>
                    <div>
                        {`You agree not to copy, duplicate, steal, modify, publish, display, distribute, reproduce, store, transmit, post, create derivative works, reverse engineer, sell, rent or license any part of the Content in any way to anyone, without our prior written consent. You agree to abide by the copyright, trademark laws and intellectual property rights and shall be solely responsible for any violations of these terms and conditions.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`USER CONTENT AND LAWFUL USE OF THE WEBSITE`}
                    </Typography>
                    <div>
                        {`For any Content or information that you upload, display, post, transmit, send, email or submit to us on the website or on any of our social media sites, you warrant that you are the owner of that Content or have express permission from the owner of those intellectual property rights to use and distribute that Content to us.`}
                    </div>
                    <div>
                        {`You grant us and/or our officers, employees, successors, shareholders, joint venture partners or anyone else working with us a royalty-free, perpetual, irrevocable, worldwide, non-exclusive right and license to identify you, publish, post, reformat, copy, distribute, display, edit, reproduce any Content provided by you on our website and on any of our social media sites for any purpose. You shall be solely liable for any damages resulting from any infringement of copyrights, trademark or other proprietary rights of any Content or information that you provide to us.`}
                    </div>
                    <div>
                        {`You agree not to upload, display, post, transmit, distribute, send, email or submit to us on the website or on any of our social media sites any information or Content that is-`}
                    </div>
                    <div>
                        <div>{`(a) illegal, violates or infringes upon the rights of others,`}</div>
                        <div>{`(b) defamatory, abusive, profane, hateful, vulgar, obscene, libelous, pornographic, threatening,`}</div>
                        <div>{`(c) encourages or advocates conduct that would constitute a criminal offense, giving rise to civil liability or otherwise violate any law,`}</div>
                        <div>{`(d) distribute material including but not limited to spyware, computer virus, any kind of malicious computer software or any other harmful information that is actionable by law,`}</div>
                        <div>{`(e) any attempts to gain unauthorized access to any portion or feature of the website, and`}</div>
                        <div>{`(f) send unsolicited or unauthorized material or cause disruption in the operation of the website. You agree to use the website for lawful purposes only and shall be liable for damages resulting from the violation of any provision contained in these Terms and Conditions.`}</div>
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`THIRD-PARTY LINKS`}
                    </Typography>
                    <div>
                        {`The website may contain links to third-party websites or resources for your convenience. We may serve as an affiliate for some of these third-party websites by offering or advertising their products or services on the website; however, we do not own or control these third-party websites. Once you click on a third-party link and leave this website, you are no longer bound by our terms and conditions.`}
                    </div>
                    <div>
                        {`You agree that we are not responsible or liable for the accuracy, content or any information presented on these third-party websites. You assume all risks for using these third-party websites or resources and any transactions between you and these third-party websites are strictly between you and the third party. We shall not be liable for any damages resulting from your use of these third-party websites or resources.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`USE OF OUR PAID AND FREE PRODUCTS`}
                    </Typography>
                    <div>
                        {`On this website, we may provide free products for download as well as sell paid courses, programs, physical or digital products, and any other related materials (collectively, "products"). All of our products and/or services, including all content, are copyright protected under US and international copyright laws. You are granted a limited revocable license to print or download Content from our digital products for your own personal, non-commercial, non-transferrable, informational and educational use only while ensuring it’s not in violation of any copyright, trademark, and intellectual property or proprietary rights. Copying or storing our content for other than personal use is expressly prohibited without our prior written consent.`}
                    </div>
                    <div>
                        {`You acknowledge and agree that you have no right to share, modify, sell, edit, copy, reproduce, create derivative works of, reverse engineer, enhance or in any exploit our products. You cannot sell or redistribute any of our products, whether free or paid ones, without our express written consent. You agree to abide by the copyright, trademark laws and intellectual property rights and shall be solely responsible for any violations of these terms and conditions.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`TERMINATION`}
                    </Typography>
                    <div>
                        {`We reserve the right in our sole discretion to refuse, remove, restrict your access, revoke and terminate your use of our website including any or all Content published by you or us at any time for any reason, without notice.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`NO REFUNDS, RETURNS OR EXCHANGES ALLOWED`}
                    </Typography>
                    <div>
                        {`All sales of products and/or services on this website are final. There are no refunds, returns, or exchanges allowed. There will be no exceptions. Please carefully review all products before purchasing to ensure that you have purchased the correct product. We truly believe in giving more than receiving and each of our products and services is designed by keeping this core principle in mind. The prices are intentionally kept reasonably low in price as compared to market value to give you the tools and information you need at an affordable price. Failure to use the product you purchased from us does not give you the right to refuse payment of any associated charges.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`NO WARRANTIES`}
                    </Typography>
                    <div>
                        {`ALL CONTENT, INFORMATION, PRODUCTS AND/OR SERVICES ON THE WEBSITE ARE “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND INCLUDING THE WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PURPOSE, EXPRESS OR IMPLIED TO THE FULL EXTENT PERMISSIBLE BY LAW. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONTENT, INFORMATION, MATERIALS, PRODUCTS AND/OR SERVICES PROVIDED ON THIS WEBSITE. COMPANY MAKES NO WARRANTIES THAT THE WEBSITE WILL PERFORM OR OPERATE TO MEET YOUR REQUIREMENTS OR THAT THE INFORMATION PRESENTED HERE WILL BE COMPLETE, CURRENT OR ERROR-FREE. COMPANY DISCLAIMS ALL WARRANTIES, IMPLIED AND EXPRESS FOR ANY PURPOSE TO THE FULL EXTENT PERMITTED BY LAW.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`LIMITATION OF LIABILITY`}
                    </Typography>
                    <div>
                        {`You agree that under no circumstances, we and/or our officers, employees, successors, shareholders, joint venture partners or anyone else working with us shall be liable for any direct, indirect, incidental, consequential, equitable, special, punitive, exemplary or any other damages resulting from your use of this website including but not limited to all the content, information, products, services and graphics presented here.`}
                    </div>
                    <div>
                        {`You expressly agree that your use of the website is at your sole risk and that you are solely responsible for the accuracy of the personal and any information you provide, the outcome of your actions, personal and business results, and for all other use in connection with the website.`}
                    </div>
                    <div>
                        {`You also expressly agree that we and/or our officers, employees, successors, shareholders, joint venture partners or anyone else working with us shall not be liable to you for any damages resulting from 1) any errors or omissions on the website, delay or denial of any products or services, failure of performance of any kind, interruption in the operation and your use of the website, website attacks including computer virus, hacking of information, and any other system failures; 2) any loss of income, use, data, revenue, profits, business or any goodwill related to the website; 3) any theft or unauthorized access by third party of your information from the website regardless of our negligence; and 4) any use or misuse of the information, products and/or services offered here.`}
                    </div>
                    <div>
                        {`This limitation of liability shall apply whether such liability arises from negligence, breach of contract, tort or any other legal theory of liability. You agree that we provide no express or implied guarantees to you for the content presented here, and you accept that no particular results are being promised to you here.`}
                    </div>
                </div>

                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`INDEMNIFICATION`}
                    </Typography>
                    <div>
                        {`You agree to indemnify and hold the Company and/or its officers, employees, successors, shareholders, joint venture partners or anyone else working with us harmless from all losses, claims, damages, demands, actions, suits, proceedings or judgments, including costs, expenses and reasonable attorneys' fees ("Liabilities") assessed against or otherwise incurred by you arising, in whole or in part, from: (a) actions or omissions, whether done negligently or otherwise, by you, your agents, directors, officers, employees or representatives; (b) all your actions and use of the website including purchasing products and services; (c) violation of any laws, rules, regulations or ordinances by you; or (d) violation of any terms and conditions of this website by you or anyone related to you; e) infringement by you or any other user of your account of any intellectual property or other rights of anyone. The Company will notify you promptly of any such claims or liability and reserves the right to defend such claim, liability or damage at your expense. You shall fully cooperate and provide assistance to us if requested, without any cost, to defend any such claims.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`WAIVER OF CLASS ACTIONS`}
                    </Typography>
                    <div>
                        {`You agree that any dispute arising from or related to this Agreement will be resolved solely between you and the Company. You waive your right to bring a class action against us and agree not to bring claims against us as a member of a class or as a representative.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`ENTIRE AGREEMENT`}
                    </Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`These Terms and Conditions along with our Privacy Policy and Disclaimer constitute the entire agreement between you and us with respect to this website. It supersedes all prior or contemporaneous communications, discussions, negotiations or proposals we may have had with you whether electronic, oral or written.`}
                    </div>
                    <div>
                        {`A printed version of this entire agreement including the Privacy Policy and Disclaimer and of any notice given in electronic form shall be admissible in judicial or administrative proceedings with respect to this website to the same extent and given the same effect as other business contracts and documents kept and maintained in printed form.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`SEVERABILITY`}
                    </Typography>
                    <div>
                        {`If any provision in these Terms and Conditions is deemed by a court, regulatory authority or other public or private tribunal of competent jurisdiction to be invalid or unenforceable, such provision is deemed to have been omitted from this Agreement. The remainder of this Agreement remains in full force and effect, and is modified to any extent necessary to give such force and effect to the remaining provisions, but only to such extent.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`MODIFICATIONS`}
                    </Typography>
                    <div>
                        {`Company reserves the right, in its sole discretion and without notice, to (a) revise these Terms and Conditions; (b) modify the website and/or any services or products it offers; and (c) discontinue the website and/or products or services at any time. Any changes to these terms will take effect immediately. You agree to review these Terms and Conditions and any other online policies posted on the website on a regular basis to be aware of any changes. You agree to be bound by the revision if you continue to use or access the website after these modifications.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`ACKNOWLEDGEMENT`}
                    </Typography>
                    <div>
                        {`By using any of our products, services or accessing the site, you acknowledge that you have read and agree to be bound by these terms and conditions.`}
                    </div>
                </div>
                <div className={`${compStyles.bottomSpacing}`}>
                    <Typography classes={{ root: compStyles.pageSubtitle}}>
                        {`CONTACT`}
                    </Typography>
                    <div className={`${compStyles.bottomSpacing}`}>
                        {`For any questions, please contact us at `}
                        <span className={`${compStyles.email}`}>info@equaltravelproject.com</span>
                    </div>
                </div>
            </Grid>
        </Layout>
    )
}