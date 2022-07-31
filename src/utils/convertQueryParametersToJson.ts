import React from 'react';

const convertQueryParametersToJson = (queryParam: string) => {
  const splitSearchParam = queryParam.split('?')[1];
  const returnJsonObject = JSON.parse(
    '{"' +
      decodeURI(splitSearchParam)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}',
  );
  return returnJsonObject;
};

export default convertQueryParametersToJson;
