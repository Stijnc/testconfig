---
name: "🐞 Bug report"
about: "Create a report to help us improve."
title: '[Bug]: '
labels:
- "bug"
- "triage"
assignees: ''
body:
- type: dropdown
  attributes:
    label: What dashboard in dexports is affected?
    description: Please select the dashboard impacted
    options:
        - Cost Management
        - Compliancy
        - Service Delivery
        - Project Planning
        - Windows Virtual Desktop (WVD)
        - Azure Kubernetes Service (AKS)
        - DexMove
    validations:
        required: true∏
---

<!--
For questions, ask in Discussions: https://github.com/dexmach/dexports/discussions

Before you file an issue read the:
- Code of Conduct: https://github.com/dexmach/dexports/blob/main/CODE_OF_CONDUCT.md


Check to make sure someone hasn't already opened a similar bug: https://github.com/dexmach/dexports/issues
-->

### What dashboard in dexports is affected?

<!-- Please select the dashboard impacted -->

General:

- [ ] Cost management
- [ ] Compliancy
- [ ] Service Delivery
- [ ] Project Planning

Managed offerings:

- [ ] Windows Virtual desktop (WVD)
- [ ] Azure Kubernetes Service (AKS)

### Describe the current behaviour you are seeing?

<!-- Give as much detail as you can to help us understand the bug you are seeing. -->

### What would the expected behaviour be?

<!-- Briefly describe to expected behaviour. -->


### Steps to reproduce

<!-- Describe the detailed steps reproducing the unexpected behaviour you are seeing -->

1.
2.
3.
4,

### Context (environment)

<!-- How has this issue affected you? What are you trying to accomplish? -->

### Possible implementation or workaround

<!-- Not obligatory. -->
<!-- Do you have a current workaround available? -->

### Additional information

<!-- Add any other context or screenshots about the issue here. -->

