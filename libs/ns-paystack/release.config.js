const appName = 'ns-paystack';
const appPath = `libs/${appName}`;
const artifactName = appName;

module.exports = {
    name: appName,
    pkgRoot: `dist/${appPath}`,
    tagFormat: artifactName + '-v${version}',
    commitPaths: ['force-release.md', `${appPath}/*`],
    assets: [`${appPath}/README.md`, `${appPath}/CHANGELOG.md`],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: `${appPath}/CHANGELOG.md`
            }
        ],
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                message:
                    `chore(release): ${artifactName}` +
                    '-v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
            }
        ]
    ]
};