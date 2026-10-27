// Snow Day Predictor as a Worker: static files from the ASSETS binding, plus the site's
// two endpoints (functions/api/: the board search and the community poll), the same handlers Pages would run.
import { onRequest as boards } from "./functions/api/boards.js";
import { onRequest as vote } from "./functions/api/vote.js";

const API = { "/api/boards": boards, "/api/vote": vote };

export default {
  async fetch(request, env) {
    const handler = API[new URL(request.url).pathname];
    if (handler) return handler({ request, env });
    return env.ASSETS.fetch(request);
  },
};
