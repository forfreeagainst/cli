import { CodeTabs } from "D:/soul-ocean/vuePressProject/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.55_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_msqk4jlhtcxcnrtqi7pkd33t5e/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/soul-ocean/vuePressProject/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.55_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_msqk4jlhtcxcnrtqi7pkd33t5e/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/soul-ocean/vuePressProject/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.55_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_msqk4jlhtcxcnrtqi7pkd33t5e/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
