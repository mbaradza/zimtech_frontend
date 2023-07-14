
export const makeApiCall = async (url = '', opts = {}) => new Promise((resolve, reject) => {
    const { body, method: m, ...reqOpts } = opts;
    reqOpts.headers = { ...reqOpts.headers };
    const method = (m || 'GET').toUpperCase();
    const baseUrl = 'http://localhost:8080'
    url = `${baseUrl}${url}`;
  
  
    if (method === 'GET') {
      url = `${url}`;
    } else {
      reqOpts.headers['Content-Type'] = 'application/json';
      reqOpts.body = JSON.stringify({ ...body });
    }
  
     fetch(url, { method, ...reqOpts })
      .then(res => res.json())
      .then((json) => {
        const error = json.error || json.errors;
        if (error) return reject(error.map ? error : [error]);
        resolve(json);
      })
      .catch((err)=>{
        console.log(err)
        return reject(err)
      }).catch(err=>{
        
      });
  });
  