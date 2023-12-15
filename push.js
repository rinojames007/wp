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

let sub = {};

push.sendNotification(sub, "test message");
