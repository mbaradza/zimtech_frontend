import {makeApiCall} from '../makeAPICalls';

export const getAll = (reqPayload = {}, reqOpts) => {
  return makeApiCall(`/api/screening/all/${reqOpts.htsId}`, {
    body: reqPayload,
    ...reqOpts,
  });
};

export const getOne = (reqPayload = {}, reqOpts) => {
 
  return makeApiCall(`/api/screening/${reqOpts.id}`, {
    body: reqPayload,
    ...reqOpts,
  })
};

export const add = (reqPayload = {}, reqOpts) => {
  return makeApiCall(`/api/screening/add/${reqOpts.htsId}`, {
    method: 'POST',
    body: reqPayload,
    ...reqOpts,
  })
};


