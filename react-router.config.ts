import type { Config } from "@react-router/dev/config";

export default {
  async prerender() {
    return ["/", "/about", "/contact", "/license", "/resume"];
  },
} satisfies Config;
