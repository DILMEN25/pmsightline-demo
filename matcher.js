// Demo module for PMSightline.
// Reads Azure DevOps work item ids (AB#123) from a pull request title or body.
// Used to show the "merged pull request, work item still open" check.

function extractWorkItemIds(text) {
  const ids = new Set();
  const pattern = /AB#(\d+)/gi;
  let match;
  while ((match = pattern.exec(text || "")) !== null) {
    ids.add(Number(match[1]));
  }
  return [...ids];
}

module.exports = { extractWorkItemIds };
