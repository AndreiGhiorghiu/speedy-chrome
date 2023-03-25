const jira = {};

jira.checkAuth = async () => {
  const response = await fetch(
    'https://tremend.atlassian.net/rest/api/2/myself'
  );
  return response.json();
};

jira.pushIssue = async (data) => {
  const response = fetch(
    'https://aspirespeedy.atlassian.net/rest/api/2/issue',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',

      body: JSON.stringify({
        fields: {
          project: {
            key: data.projectName,
          },
          summary: data.title,
          description: data.description,
          issuetype: {
            name: 'Task',
          },
        },
      }),
    }
  );

  return response.json();
};

export default jira;
