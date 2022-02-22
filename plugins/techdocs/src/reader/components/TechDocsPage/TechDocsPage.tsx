/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import { useOutlet } from 'react-router';

import { Page, Content } from '@backstage/core-components';
import { EntityName } from '@backstage/catalog-model';

import { TechDocsEntityMetadata, TechDocsMetadata } from '../../../types';
import { TechDocsPageHeader } from '../TechDocsPageHeader';
import { Reader } from '../Reader';
import { TechDocsPageProvider } from './context';

export type TechDocsPageRenderParams = {
  onReady: () => void;
  entityRef: EntityName;
  entityMetadataValue?: TechDocsEntityMetadata | undefined;
  techdocsMetadataValue?: TechDocsMetadata | undefined;
};

export type TechDocsPageRenderFunction = (
  params: TechDocsPageRenderParams,
) => JSX.Element;

export type TechDocsPageProps = {
  children?: TechDocsPageRenderFunction | React.ReactNode;
};

export const TechDocsPage = ({ children }: TechDocsPageProps) => {
  const outlet = useOutlet();

  if (!children) {
    return outlet;
  }

  return (
    <Page themeId="documentation">
      <TechDocsPageProvider>{children}</TechDocsPageProvider>
    </Page>
  );
};

export const TechDocsPageLayout: FC = ({ children }) => (
  <TechDocsPage>
    {({ onReady, entityRef, entityMetadataValue, techdocsMetadataValue }) => (
      <>
        <TechDocsPageHeader
          entityRef={entityRef}
          entityMetadata={entityMetadataValue}
          techDocsMetadata={techdocsMetadataValue}
        />
        <Content data-testid="techdocs-content">
          <Reader onReady={onReady} entityRef={entityRef}>
            {children}
          </Reader>
        </Content>
      </>
    )}
  </TechDocsPage>
);
