export interface Fields {
  name: string;
  status: string;
  rationale: string;
}

export function createData(name: string, fields: Fields[]) {
  return {
    name,
    fields,
  };
}

export const rows = [
  createData("Ready to Design", [
    {
      name: "Advisory",
      status: "Self Served",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
  ]),
  createData("Ready to Build", [
    {
      name: "Ready to Build Survey",
      status: "Completed",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "RTO / RPO",
      status: "Completed",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Information Classification",
      status: "In progress",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Solution Design",
      status: "In progress",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Cloud Product Registration & Cloud Product Check",
      status: "Not started",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Deployment Patterns",
      status: "Not started",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Blueprint",
      status: "Not required",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
  ]),
  createData("Ready to Release", [
    {
      name: "Resiliency Measure Test Results",
      status: "Not started",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Auditing, Logging, Monitoring, Alerting Metrics",
      status: "Not required",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "EKM Verification & Evidencing",
      status: "Not started",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
  ]),
];
