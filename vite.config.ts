import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import envCompatible from "vite-plugin-env-compatible";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

// import dns from "dns"

// dns.setDefaultResultOrder("verbatim")

export default defineConfig({
  server: {
    open: true,
  },
  envPrefix: "REACT_APP_",
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), envCompatible()],
});
