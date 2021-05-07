// This is an AllowList of GitHub Actions that are approved for use in this project.
// If a new or existing workflow file is updated to use an action or action version not listed here,
// CI will fail and the action will need to be audited by the docs engineering team before it
// can be added it this list.

module.exports = [
    "actions/checkout@*",
    "actions/github-script@*",
    "actions/first-interaction@*",
    "github/issue-labeler@*",
    "github/super-linter@*",
    "crazy-max/ghaction-github-labeler@*",
    "konradpabjan/move-labeled-or-milestoned-issue@*",
    "konradpabjan/actions-add-new-issue-to-column@*",
    "andymckay/labeler@*",
    "actions/stale@*"

];