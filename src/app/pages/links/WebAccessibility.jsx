import { Grid, Typography } from "@mui/material";
import Layout from "../Layout";
import styled from "@emotion/styled";

const PageTitle = styled(Typography)`
    font-family: Montserrat !important;
    font-weight: 700 !important;
    font-size: 2.875rem !important;
    color: #484848;
    text-transform: uppercase;`;

const PagSubTitle = styled(Typography)`
        font-family: Montserrat !important;
        font-weight: 700 !important;
    `;

export default function WebAccessibility(){
    return (
        <Layout topMargin={true} appBarStyle="primary">
            <Grid sx={{ padding: "10px 44px 20px", color: "#9A9A9A", lineHeight: "26px"  }}>
                <PageTitle> Website Accessibility Statement </PageTitle>
                <div style={{ paddingBottom: "20px" }}>
                    <span style={{ fontWeight: 700 }}>{`Equal Travel Project `}</span> 
                    {`is committed to providing all users, including those with disabilities, with full and equal access to our website. We are committed to ensuring international compliance with web accessibility laws and policies, including, but not limited to, the Americans with Disabilities Act ("ADA"), and to improving everyone's user experience on our website, equaltravelproject.com by implementing the Web Content Accessibility Guidelines ("WCAG"), accessibility standards developed in collaboration with individuals and organizations worldwide through the World Wide Web Consortium ("W3C") process, with the goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments worldwide.`}
                    <div>
                        {`We have made a genuine effort and commitment to follow best practices for ADA compliance, including auditing and testing our website for accessibility. Please be aware that our efforts to meet current WCAG guidelines are ongoing as we incorporate the necessary accessibility widgets and improvements to make our website as accessible and user-friendly as possible.`}
                    </div>
                    <div>
                        {`This website is designed to be compatible with assistive technologies as well as the most recent two major browser versions. Some aspects of the website may not display optimally in Internet Explorer 10, 11, or older browsers. The website is not intended for use with Internet Explorer 9 or earlier versions`}
                    </div>
                </div>
                <div style={{ paddingBottom: "20px" }}>
                    <PagSubTitle> {`Accessibility Plugin / Widget`} </PagSubTitle>
                    <div>
                        {`This website may include a third-party plugin, also known as a Widget. Using this Widget can improve website accessibility for some users, particularly those with specific disabilities. This widget can be found on all pages of our website and strives to adhere to the most recent WCAG guidelines.`}
                    </div>
                    <div>
                        {`By clicking the accessibility menu icon that appears after clicking on the Widget described above, you can enable the accessibility menu. Please wait a moment after triggering the accessibility menu for the entire accessibility menu to load.`}
                    </div>
                </div>
                <div style={{ paddingBottom: "20px" }}>
                    <PagSubTitle> {`Disclaimer`} </PagSubTitle>
                    <div>
                        {`We have no control over the use of the Widget above or any other third-party add-ons or "plugins" on our website. These may or may not work for every user and/or every type of disability. We have no control over the structure of these plugins and are unable to modify them at all or to the extent necessary to accommodate every user of our website, and we are not responsible for those elements over which we have no control. You use these third-party widgets or plugins entirely at your own risk.`}
                    </div>
                    <div>
                        {`We have made reasonable efforts to make our website accessible in accordance with standard business practices; however, if you believe that some content, features, or processes could be improved, we welcome your feedback. If you have any questions or concerns, please contact us at info@equaltravelproject.com`}
                    </div>
                </div>
            </Grid>
        </Layout>
    )
}