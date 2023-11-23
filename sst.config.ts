import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "docs",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: stack.stage === "prod" ? "docs.icssc.club" : undefined,
          hostedZone: "icssc.club",
          cdk: { certificate: Certificate.fromCertificateArn(stack, "cert", process.env.CERTIFICATE_ARN) },
        }
      });
      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
