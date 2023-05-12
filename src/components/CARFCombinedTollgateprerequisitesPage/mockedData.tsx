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

const mySampleObject = {
  rtype: "Re-Platform",
  id: 9184,
  name: "dbECM-UK",
  nar_id: "70494-1",
  criticality: "Critical",
  r_type: "Re-Platform",
  scope: "2022 Baseline Scope - Carry Over",
  domain: "CTO",
  personal_data: "Yes",
  is_schrems_ii_relevant: true,
  is_ekm_required: null,
  epic_jira: "GMIG-4247",
  information_classification: null,
  carf_assessment: null,
  materiality: "Material",
  uk_important_business_service: "Not UK Important Business Service",
  tollgates: {
    ready_to_design: {
      advisory: {
        status: "Self Served",
        rationale:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
        label: null,
      },
    },
    ready_to_build: {
      ready_to_build_survey: {
        status: "Completed",
        rationale:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
        label: null,
      },
      rto_rpo: {
        status: "Completed",
        rationale:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
        label: null,
      },
      information_classification: {
        status: "In progress",
        rationale:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
        label: null,
      },
      solution_design: {
        status: "In progress",
        rationale:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
        label: null,
        comment: "",
      },
      cloud_product_registration_cloud_product_check: {
        status: "Not started",
        rationale:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
        label: ["Not Storing EU Personal Data", "Low Risk EU Personal Data"],
      },
      deployment_patterns: {
        status: "Not started",
        rationale:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
        label: null,
        all_deployment_patterns_implemented: "Yes",
        rationale_comment: "",
      },
      blueprint: {
        status: "Not required",
        rationale:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
        label: null,
      },
    },
    ready_to_release: {
      resiliency_measure_test_results: {
        advisory: {
          status: "Not started",
          rationale:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
          label: null,
        },
        auditing_logging_monitoring_alerting_metrics: {
          advisory: {
            status: "Not required",
            rationale:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
            label: null,
          },
          ekm_verification_evidencing: {
            advisory: {
              status: "Not started",
              rationale:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
              label: [
                "Not Storing EU Personal Data",
                "Low Risk EU Personal Data",
              ],
            },
          },
        },
      },
    },
  },
};
