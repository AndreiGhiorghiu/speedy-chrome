import { method } from 'lodash';
import store from '$store';

const jira = {};

jira.checkAuth = async () => {
  const response = await fetch(`${store.get('url')}/rest/api/2/myself`);

  return response.json();
};

jira.pushIssue = async (data) => {
  const response = await fetch(`${store.get('url')}/rest/api/2/issue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',

    body: JSON.stringify({
      fields: {
        project: {
          key: store.get('project'),
        },
        summary: data.title || '',
        description: data.description || '',
        issuetype: {
          name: 'Task',
        },
        customfield_10034: {
          value: data.storyPoints || '',
        },
        labels: [data.label || ''],
      },
    }),
  });

  return response.json();
};

jira.getProjects = async () => {
  const response = await fetch(
    `${store.get(
      'url'
    )}/rest/internal/2/productsearch/search?counts=boards%3D5%2Cdashboards%3D5%2Cprojects%3D5%2Cfilters%3D5&type=boards%2Cdashboards%2Cprojects%2Cfilters`
  );

  const data = await response.json();
  const projects = data.find((item) => item.id === 'quick-search-projects');

  return projects;
};

export default jira;

// https://id.atlassian.com/login?login_hint=ct.96and@gmail.com&prompt=none&continue=https://aspirespeedy.atlassian.net/secure/BrowseProjects.jspa?selectedProjectType=software
