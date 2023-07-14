import {makeApiCall} from '../makeAPICalls';

export const getAll = (reqPayload = {}, reqOpts) => {
  return makeApiCall(`/api/hts/patient/${reqOpts.patientId}`, {
    body: reqPayload,
    ...reqOpts,
  });
};

export const getOne = (reqPayload = {}, reqOpts) => {
 
  return makeApiCall(`/api/hts/${reqOpts.id}`, {
    body: reqPayload,
    ...reqOpts,
  })
};

export const add = (reqPayload = {}, reqOpts) => {
  return makeApiCall(`/api/hts/add/${reqOpts.patientId}`, {
    method: 'POST',
    body: reqPayload,
    ...reqOpts,
  })
};


