/** True for http(s) URLs that leave the site; false for #anchors, mailto:, tel: and relative paths. */
export function isExternal(url: string): boolean {
  return /^https?:\/\//i.test(url)
}

/** Props to spread onto an <a> so external links open safely in a new tab. */
export function externalLinkProps(url: string): { target?: string; rel?: string } {
  return isExternal(url) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
