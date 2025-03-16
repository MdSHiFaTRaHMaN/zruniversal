import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const TermsAbout = () => {
  return (
    <Layout className='w-full lg:w-10/12 mx-auto'>
      <Content className="container mx-auto p-6">
        <Title level={1}>Terms & Conditions</Title>
        <Paragraph>
          Please read these terms carefully before using our services. By accessing or using our services, you agree to be bound by these terms.
        </Paragraph>

        <Title level={2}>1. Introduction</Title>
        <Paragraph>
          This document outlines the terms and conditions for using our construction services, website, and related offerings.
        </Paragraph>

        <Title level={2}>2. Definitions</Title>
        <Paragraph>
          - <strong>"Company"</strong>: Refers to [Your Company Name].<br/>
          - <strong>"Services"</strong>: Includes construction, consulting, and related activities.<br/>
          - <strong>"User"</strong>: Any individual or entity using our services.
        </Paragraph>

        <Title level={2}>3. User Obligations</Title>
        <Paragraph>
          Users must:
          <ul>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Provide accurate and complete information when requested.</li>
            <li>Not misuse our services in any way.</li>
          </ul>
        </Paragraph>

        <Title level={2}>4. Service Terms</Title>
        <Paragraph>
          We provide a range of construction services as outlined on our website. Specific terms for each service may apply.
        </Paragraph>

        <Title level={2}>5. Payment Terms</Title>
        <Paragraph>
          - Payments must be made according to the agreed schedule.<br/>
          - Late payments may incur additional fees.<br/>
          - Refund policies, if applicable, will be stated in the service agreement.
        </Paragraph>

        <Title level={2}>6. Liability Limitations</Title>
        <Paragraph>
          - We are not liable for indirect or consequential damages.<br/>
          - Our total liability for any claim is limited to the amount paid for the service in question.
        </Paragraph>

        <Title level={2}>7. Governing Law</Title>
        <Paragraph>
          These terms are governed by the laws of [Your Jurisdiction], and any disputes will be resolved in the courts of this jurisdiction.
        </Paragraph>

        <Title level={2}>8. Changes to Terms</Title>
        <Paragraph>
          We may update these terms from time to time. Users will be notified of significant changes.
        </Paragraph>

        <Title level={2}>9. Contact Information</Title>
        <Paragraph>
          For any questions or concerns regarding these terms, please contact us at:
          <br/>📧 Email: info@constructioncompany.com
          <br/>📞 Phone: +1-234-567-8900
        </Paragraph>

        <Title level={2}>10. Disclaimer</Title>
        <Paragraph>
          The information provided on our website and services is for general informational purposes only. We make no warranties regarding accuracy or completeness.
        </Paragraph>
      </Content>
      <Footer className="bg-gray-200 text-center p-4">
        <p>© {new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
      </Footer>
    </Layout>
  );
};

export default TermsAbout;