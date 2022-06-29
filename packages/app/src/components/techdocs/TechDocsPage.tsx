import React from 'react';
import { Page } from '@backstage/core-components';
import {
  TechDocsReaderPageHeader,
  TechDocsReaderPageSubheader,
  TechDocsReaderPageContent,
} from '@backstage/plugin-techdocs';

const DefaultTechDocsPage = () => {
  return (
    <Page themeId="documentation">
      <TechDocsReaderPageHeader />
      <TechDocsReaderPageSubheader />
      <TechDocsReaderPageContent />
    </Page>
  );
};

export const techDocsPage = <DefaultTechDocsPage />;
