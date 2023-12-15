import push from "web-push";

let vapIDKeys = {
  publicKey:
    "BISAreb3fNmlV-FimMn5XurLbzpV937QrnrPc-m_6IfP04eNZxh0XVownuigLDGkcGDwFE6lf3hcSJhNCLI1dms",
  privateKey: "mdeaJbIUUyKg4cusmULOM3oh0ZQlyEGEUiLW3dJKQc8",
};

push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapIDKeys.publicKey,
  vapIDKeys.privateKey
);

let sub = {
  endpoint:
    "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABlfDjgqSrFsOBreR4Qp6S-y8mCvQos1iGr9ZgaSN8CBJiIphIjq1nHtnddHzUVPJs-At_t4DsIdzTh1XAi2-i4Wu1D3JIssROcJ9CfpG2TceJVfX0xtA1R5AGFInrN6gn1AU1awyR13oYRUGiF-1Z7WmyR_sjbvj2e99u6_FWQzst8PZg",
  expirationTime: null,
  keys: {
    auth: "Jq72iraQoPZ0FKs555VoFQ",
    p256dh:
      "BBE55n2twz0TnQD1yHqXfz5eJBql71VTUjF7c8wDpYL-TYSslODW0oddjjtVkGU_biCGFCHepkNnlIWtBVAsmAA",
  },
};

push.sendNotification(sub, "test message");
