import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

const sstConfig: SSTConfig = {
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
          domainName:
            stack.stage === "prod"
              ? "docs.icssc.club"
              : `docs-${stack.stage}.icssc.club`,
          hostedZone: "icssc.club",
        },
      });
      stack.addOutputs({ SiteUrl: site.url });
    });
  },
};
export default sstConfig;
