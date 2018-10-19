var axios = require('axios').default;

exports.getCluster = async (req, res) => {
  try {
    let response = await axios.get(`https://cce.sa-peru-1.telefonicaopencloud.com/api/v1/clusters/${req.params.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': req.headers['x-auth-token']
      }
    })
    return res.status(response.status).send(response.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).send(error.response.data);
    } else if (error.request) {
      return res.status(404).send(error.request);
    } else {
      return res.status(404).send('Not Found');
    }
  }
}

exports.getClusters = async (req, res) => {
  try {
    let response = await axios.get(`https://cce.sa-peru-1.telefonicaopencloud.com/api/v1/clusters`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': req.headers['x-auth-token']
      }
    })
    return res.status(response.status).send(response.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).send(error.response.data);
    } else if (error.request) {
      return res.status(404).send(error.request);
    } else {
      return res.status(404).send('Not Found');
    }
  }
}

