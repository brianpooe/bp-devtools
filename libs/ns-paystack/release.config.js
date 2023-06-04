const appName = 'ns-paystack';
const srcRoot = `libs/${appName}`;

module.exports = {
    extends: 'release.config.base.js',
    pkgRoot: `dist/${srcRoot}`,
    tagFormat: appName + '-v${version}',
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
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
                message:
                    `release(version): Release ${appName} ` +
                    '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
            }
        ]
    ]
};
