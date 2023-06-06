const appName = 'ns-paystack';
const appPath = `libs/${appName}`;
const artifactName = appName;

module.exports = {
    name: appName,
    branches: [
        '+([0-9])?(.{+([0-9]),x}).x',
        'main',
        'next',
        'next-major',
        { name: 'beta', prerelease: true },
        { name: 'alpha', prerelease: true }
    ],
    pkgRoot: `dist/${appPath}`, // should come from angular.cli
    tagFormat: artifactName + '-v${version}',
    commitPaths: ['force-release.md', `${appPath}/*`], // should come from dep-graph and angular.json
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
