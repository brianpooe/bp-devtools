const name = 'ns-paystack';
const srcRoot = `libs/${name}`;

module.exports = {
    extends: 'release.config.base.js',
    pkgRoot: `dist/${srcRoot}`,
    tagFormat: name + '-v${version}',
    commitPaths: [`${srcRoot}/*`],
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: `${srcRoot}/CHANGELOG.md`
            }
        ],
        '@semantic-release/npm'
    ]
};
