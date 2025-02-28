 

/**
 * Get a link to cluster in Operate.
 *
 * @param {Endpoint} endpoint
 */
export function getClusterUrl(endpoint) {
  const {
    camundaCloudClusterId,
    camundaCloudClusterRegion
  } = endpoint;

  const url = new URL(`https://${camundaCloudClusterRegion}.operate.camunda.io/${camundaCloudClusterId}`);

  return url;
}

function getProcess(apiResponse) {
  return apiResponse?.deployments?.[0]?.process || null;
}

export function getProcessId(response) {
  return getProcess(response)?.bpmnProcessId || null;
}

export function getProcessVersion(response) {
  return getProcess(response)?.version || null;
}
