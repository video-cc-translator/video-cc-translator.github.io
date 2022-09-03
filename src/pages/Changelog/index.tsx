import { Fragment } from 'react';
import PageLayout from '../../layouts/PageLayout';

import { CHANGELOG } from '../../data/changelog';

import Limit from '../../components/Limit';
import Table from '../../components/Table';
import styled from 'styled-components';

const VersionTitle = styled.h2``;
const Box = styled.div``;
const ChangeTable = styled(Table)`
  width: 100%;
  border: 2px solid #555;

  th,
  td {
    border: 2px solid #555;
  }
  ${Box} {
    padding: 1.5em;
  }
`;
const Wrapper = styled.div`
  padding-top: 16px;
`;

const Changelog = () => {
  return (
    <PageLayout pageTitle='Changelog'>
      <Limit maxWidth='sm'>
        <Wrapper>
          <ChangeTable>
            <tbody>
              {CHANGELOG.map((log, key) => {
                const { version, features, fixes } = log;
                return (
                  <Fragment key={key}>
                    <tr>
                      <th rowSpan={3}>
                        <VersionTitle>{version}</VersionTitle>
                      </th>
                    </tr>
                    <tr>
                      <th>신규 기능</th>
                      <td>
                        <Box>
                          {features && features.length > 0 ? (
                            <ul>
                              {features.map((feature) => (
                                <li>- {feature}</li>
                              ))}
                            </ul>
                          ) : (
                            '-'
                          )}
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <th>개선 사항</th>

                      <td>
                        <Box>
                          {fixes && fixes.length > 0 ? (
                            <ul>
                              {fixes.map((fix) => (
                                <li>- {fix}</li>
                              ))}
                            </ul>
                          ) : (
                            '-'
                          )}
                        </Box>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </ChangeTable>
        </Wrapper>
      </Limit>
    </PageLayout>
  );
};

export default Changelog;
