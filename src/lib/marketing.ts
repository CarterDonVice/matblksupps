/**
 * Single email/SMS capture seam for the whole site.
 *
 * Every marketing capture flow (coupon popup, Blacklist newsletter) routes
 * through `subscribe`, so connecting a provider later is a one-file change.
 * The transactional contact form is intentionally separate.
 */

export type SubscribeSource = 'coupon-popup' | 'blacklist';

export async function subscribe(input: {
  email: string;
  phone?: string;
  source: SubscribeSource;
}): Promise<{ ok: boolean }> {
  // TODO: wire Mailchimp here. All site capture flows route through this single function.
  void input;
  return { ok: true };
}
