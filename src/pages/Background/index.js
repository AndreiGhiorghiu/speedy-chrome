import jira from '$apis/jira';

console.log('This is the background page.');
console.log('Put the background scripts here.');

jira.getProjects().then((reply) => console.log('reply', reply));
