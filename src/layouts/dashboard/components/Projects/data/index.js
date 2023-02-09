/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

export default function data() {
  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Location", accessor: "companies", width: "25%", align: "center" },
      { Header: "Views", accessor: "members", width: "10%", align: "left" },
      { Header: "Sales", accessor: "sales", width: "10%", align: "left" },
      { Header: "Conversion", accessor: "budget", align: "center" },
      { Header: "Total", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company name="google.com" />,
        members: (
          <MDBox display="flex" py={1}>
            3746
          </MDBox>
        ),
        sales: (
          <MDBox display="flex" py={1}>
            752
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            43%
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $19,291
          </MDTypography>
        ),
      },
      {
        companies: <Company name="facebook.com" />,
        members: (
          <MDBox display="flex" py={1}>
            8126
          </MDBox>
        ),
        sales: (
          <MDBox display="flex" py={1}>
            728
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            32%
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $17,638
          </MDTypography>
        ),
      },
      {
        companies: <Company name="twitter.com" />,
        members: (
          <MDBox display="flex" py={1}>
            8836
          </MDBox>
        ),
        sales: (
          <MDBox display="flex" py={1}>
            694
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            28%
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $16,218
          </MDTypography>
        ),
      },
      {
        companies: <Company name="Direct Email" />,
        members: (
          <MDBox display="flex" py={1}>
            1173
          </MDBox>
        ),
        sales: (
          <MDBox display="flex" py={1}>
            645
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            24%
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $14,421
          </MDTypography>
        ),
      },
      {
        companies: <Company name="linkedin.com" />,
        members: (
          <MDBox display="flex" py={1}>
            2739
          </MDBox>
        ),
        sales: (
          <MDBox display="flex" py={1}>
            539
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20%
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $12,370
          </MDTypography>
        ),
      },
      {
        companies: <Company name="instagram.com" />,
        members: (
          <MDBox display="flex" py={1}>
            2739
          </MDBox>
        ),
        sales: (
          <MDBox display="flex" py={1}>
            539
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20%
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $12,370
          </MDTypography>
        ),
      },
    ],
  };
}
