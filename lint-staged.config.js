module.exports = {
  '{libs,apps,tools,.github}/**/*.{ts,js,json,md,html,css,scss,yml,yaml}': [
    'nx affected --target typecheck --uncommitted',
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    'nx format:write --uncommitted --libs-and-apps'
  ]
};
