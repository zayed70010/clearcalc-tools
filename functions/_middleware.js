import { legacyHostRedirect } from '../src/lib/legacy-host-redirect.js';

// Runs when this directory is deployed with the project (Git or Wrangler).
// Dashboard uploads of dist/ do not compile functions/. public/_worker.js is
// the same redirect for that upload, and Cloudflare ignores this file when
// _worker.js is present.
export async function onRequest(context) {
  const redirect = legacyHostRedirect(context.request);
  if (redirect) return redirect;
  return context.next();
}
